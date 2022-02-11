import React, { useRef, useState } from "react";
import Portal from "./portal";

const getPoint = (el, tt, placement, space) => {
	return {
		x: 50,
		y: 50,
	};
};

const Tooltip = ({
	text,
	placement = "bottom",
	space = 15,
	children,
	...props
}) => {
	const [show, setShow] = useState(0);
	const posRef = useRef({ x: 0, y: 0 });
	const tooltipRef = useRef();

	const handleMOver = (e) => {
		setShow(1);
		posRef.current = getPoint(e.currentTarget, tooltipRef, placement, space);
	};
	const handleMOut = () => setShow(0);
	return (
		//creation of the react clone element
		<>
			{React.cloneElement(children, {
				onMouseOver: handleMOver,
				onMouseOut: handleMOut,
			})}
			<Portal>
				{show && (
					<span
						ref={tooltipRef}
						className={`border-xl pointer-events-none fixed top-[${posRef.current.y}px] left-[${posRef.current.x}px] z-40 block whitespace-nowrap bg-gray-700 p-2 font-semibold tracking-normal text-white opacity-${show}`}
					>
						{text}
					</span>
				)}
			</Portal>
		</>
	);
};

export default Tooltip;
