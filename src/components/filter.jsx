import React from "react";
import Input from "./input";
import Select from "./select";

const Filter = ({ filters, onFilterChange }) => {
    return (
        <div className="filter container mb-5 text-white">
            <div className="d-flex flex-wrap justify-content-center mr-1">
                <Input
                    value={filters.name}
                    name="name"
                    onFilterChange={onFilterChange}
                    type="text"
                />
                <Select
                    label="Gender:"
                    name="gender"
                    onFilterChange={onFilterChange}
                    values={["female", "male", "genderless", "unknown"]}
                />
                <Select
                    label="Choose status:"
                    name="status"
                    onFilterChange={onFilterChange}
                    values={["alive", "dead", "unknown"]}
                />
                <Input
                    value={filters.species}
                    label="Race:"
                    name="species"
                    onFilterChange={onFilterChange}
                    type="text"
                />
                <Input
                    value={filters.type}
                    label="Type:"
                    name="type"
                    onFilterChange={onFilterChange}
                    type="text"
                />
            </div>
        </div>
    );
};

export default Filter;
