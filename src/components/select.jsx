import React from "react";

const ZERO = 0;
const ONE = 1;

const Select = ({
    name,
    className,
    containerClass,
    defaultValue,
    values,
    label,
    text,
    onFilterChange,
    ...props
}) => {
    const onChange = (event) => onFilterChange(name, event.target.value);

    return (
        <div className="mx-2 flex-grow-1 flex-shrink-1">
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}
                </label>
            )}
            <select
                name={name}
                id={name}
                className="form-select"
                onChange={onChange}
                defaultValue={defaultValue}
                aria-label={`Select for ${name}`}
                {...props}
            >
                <option value="">{`Select for ${name}`}</option>
                {values.map((value) => (
                    <option key={value} value={value}>
                        {value[ZERO].toUpperCase() + value.substring(ONE)}
                    </option>
                ))}
            </select>
            {text && <div className="form-text">{text}</div>}
        </div>
    );
};

export default Select;
