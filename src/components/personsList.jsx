import React from "react";
import Person from "./person";

const PersonsList = ({ characters = [] }) => {
    return (
        <div className="container">
            <div className="row">
                {characters.map((character) => (
                    <Person key={character.id} {...character} />
                ))}
            </div>
        </div>
    );
};

export default PersonsList;
