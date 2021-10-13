import React from "react";

const Footer = ({ totalPages }) => {
    return (
        <footer className="mt-auto bg-dark text-white-50 py-5">
            <div className="container text-center">
                {totalPages ? <p>Total Pages: {totalPages.pages}</p> : <></>}
            </div>
        </footer>
    );
};

export default Footer;
