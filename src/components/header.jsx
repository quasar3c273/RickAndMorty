import React from "react";
import Filter from "./filter";

const Header = ({ onFilterChange, filters }) => {
    return (
        <header className="bg-dark mb-5">
            <div className="container navbar navbar-dark bg-dark">
                <div className="container">
                    <h3 className="text-white">Rick and Morty API</h3>
                </div>
                <Filter onFilterChange={onFilterChange} filters={filters} />
            </div>
        </header>
    );
};

export default Header;
