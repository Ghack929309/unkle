import React from "react";
import { ImArrowDown } from "react-icons/im";
import useHover from "../hooks/useHover";
import Tooltip from "../hooks/Tooltip";

//ImArrowDown
const Form = () => {
	const [hovered, ref] = useHover();
	return (
		<div className="w-full max-w-lg">
			<h1 className="mb-6 text-center text-xl font-semibold tracking-wide text-[#2b9dfe]">
				Remplissez votre contrat
			</h1>

			<div className="-mx-3 mb-6 flex flex-wrap">
				<div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
					<label
						className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
						htmlFor="grid-first-name"
					>
						Nom
					</label>

					<input
						className="mb-3 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
						id="grid-first-name"
						type="text"
						placeholder="Jane"
					/>

					<p className="text-xs italic text-red-500">
						Please fill out this field.
					</p>
				</div>
				<div className="w-full px-3 md:w-1/2">
					<label
						className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
						htmlFor="grid-last-name"
					>
						Prenom
					</label>
					<input
						className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
						id="grid-last-name"
						type="text"
						placeholder="Doe"
					/>
				</div>
			</div>
			<div className="-mx-3 mb-6 flex flex-wrap">
				<div className="w-full px-3">
					<label
						className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
						htmlFor="grid-password"
					>
						Mot de passe
					</label>
					<input
						className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
						id="grid-password"
						type="password"
						placeholder="******************"
					/>

					<p className="text-xs italic text-gray-600">
						Make it as long and as crazy as you'd like
					</p>
				</div>
			</div>
			<div className="-mx-3 mb-2 flex flex-wrap">
				<div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
					<label
						className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
						htmlFor="grid-city"
					>
						Telephone
					</label>
					<input
						className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
						id="grid-city"
						type="number"
						placeholder="Albuquerque"
					/>
				</div>
				<div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
					<label
						className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
						htmlFor="grid-state"
					>
						Status
					</label>
					<div className="relative">
						<select
							className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
							id="grid-state"
						>
							<option>Pending</option>
							<option>Active</option>
							<option>Finished</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg
								className="h-4 w-4 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>
				<div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
					<label
						className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
						htmlFor="grid-zip"
					>
						Zip
					</label>
					<input
						className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
						id="grid-zip"
						type="text"
						placeholder="90210"
					/>
				</div>
				<div className="flex w-full flex-col items-center justify-center space-y-2  p-2">
					<Tooltip
						text="read carefully before checking off"
						placement="right"
						delay={0.02}
					>
						<label ref={ref} htmlFor="check">
							<div className="flex cursor-pointer items-center justify-center space-x-2">
								<input type="checkbox" id="check" name="agree" />
								<p className="text-[#ffa5c5]">
									Agree with terms and conditions
								</p>
							</div>
						</label>
					</Tooltip>
					<button className="rounded-xl bg-[#2b9dfe] px-6 py-2 text-sm text-white">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Form;
