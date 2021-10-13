import React from "react";
import _ from "lodash";
import Spinner from "./spinner";

const Pagination = ({
    onPageChange,
    currentPage,
    infoAboutPages = {},
    isLoading
}) => {
    if (isLoading) {
        return <Spinner />;
    }

    const pagesCount =
        infoAboutPages.pages === undefined ? 1 : infoAboutPages.pages;
    let pagesCards = _.range(1, pagesCount + 1);

    if (pagesCards.length > 15) {
        let pagesCardsCopy = pagesCards.slice(15);
        pagesCards = pagesCards.filter((x) => !pagesCardsCopy.includes(x));
    }

    if (pagesCount === 1) return null;
    return (
        <>
            <nav>
                <ul className="pagination">
                    {currentPage !== 1 ? (
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={() => {
                                    onPageChange(currentPage - 1);
                                }}
                            >
                                Prev
                            </button>
                        </li>
                    ) : (
                        <></>
                    )}
                    {pagesCards.map((page) => (
                        <li
                            className={
                                "page-item" +
                                (page === currentPage ? " active" : "")
                            }
                            key={page}
                        >
                            <button
                                className="page-link"
                                onClick={() => {
                                    onPageChange(page);
                                }}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    {currentPage !== pagesCount ? (
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={() => {
                                    onPageChange(currentPage + 1);
                                }}
                            >
                                Next
                            </button>
                        </li>
                    ) : (
                        <></>
                    )}
                </ul>
            </nav>

            <nav>
                <ul className="pagination">
                    <li className="page-item active">
                        <button className="page-link">
                            Current page: {currentPage}
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
};

Pagination.default = {
    infoAboutPages: {}
};

export default Pagination;
