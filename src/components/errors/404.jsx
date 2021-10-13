import React from "react";
import Spinner from "../spinner";
import "../errors/404.css";

const Error = ({ hasError, children }) => {
    if (hasError === 404) {
        return (
            <>
                <div className="background-img">
                    <div className="space"></div>
                    <div className="wrapper">
                        <div className="img-wrapper">
                            <span>44</span>
                        </div>
                        <p>
                            The page you are trying to search has been moved to
                            another universe.
                        </p>
                    </div>
                </div>
            </>
        );
    }

    if (hasError) {
        return <Spinner />;
    }
    return children;
};

export default Error;
