import React, { useState, useRef, useEffect } from "react";

const useFocus = () => {
	const [focus, setFocus] = useState(false);
	const focusRef = useRef(null);

	const enter = () => {
		setHovered(true);
	};
	const leave = () => {
		setHovered(false);
	};

	useEffect(() => {
		ref.current.addEventListener("mouseenter", enter);
		ref.current.addEventListener("mouseleave", leave);
	}, []);
	return [hovered, focusRef];
};

export default useFocus;
