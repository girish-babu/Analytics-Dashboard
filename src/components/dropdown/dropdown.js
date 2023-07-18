import React, { useEffect, useState } from "react";
import "./dropdown.scss"; // Import the CSS file for styling

const Dropdown = (props) => {
	const { options, onChange, value } = props;
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleClick = (e, option) => {
		toggleDropdown();
		onChange(option.value);
	};

	return (
		<div className="dropdown">
			<button className="dropdown-toggle" onClick={toggleDropdown}>
				{value}
			</button>
			{isOpen && (
				<ul className="dropdown-menu">
					{options.map((option, i) => {
						return (
							<li
								key={i}
								className="dropdown-item"
								onClick={(e) => handleClick(e, option)}
							>
								{option.label}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
