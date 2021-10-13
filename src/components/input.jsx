import React from "react";

const ZERO = 0;
const ONE = 1;

const Input = ({ name, text, onFilterChange, ...props }) => {
    const label = name[ZERO].toUpperCase() + name.substring(ONE);
    const onChange = (event) => onFilterChange(name, event.target.value);

    return (
        <div className="mx-2 flex-grow-1 flex-shrink-1">
            <label className="form-label" htmlFor={name}>
                {label}:
            </label>
            <input
                onChange={onChange}
                name={name}
                id={name}
                className="form-control"
                {...props}
            />
            {text && (
                <div id="emailHelp" className="form-text">
                    {text}
                </div>
            )}
        </div>
    );
};

export default Input;
