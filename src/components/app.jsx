import React, { useState, useEffect } from "react";
import PersonsList from "./personsList";
import Header from "./header";
import Error from "./errors/404";
import Footer from "./footer";
import Pagination from "./pagination";

import GetData from "../get-personal-info/getData";

const getPersonalInfo = new GetData();

function App() {
    const pageSize = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState({});
    const [error, setError] = useState("");
    const [spinner, setSpinner] = useState(true);
    const [filters, setFilters] = useState({
        name: "",
        status: "",
        species: "",
        type: "",
        gender: ""
    });

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const onFilterChange = (key, value) => {
        setCurrentPage(1);
        setFilters({ ...filters, [key]: value });
    };

    useEffect(() => {
        setSpinner(true);
        getPersonalInfo
            .getFiltersCharacter(filters, currentPage)
            .then((data) => {
                setData(data);
                setSpinner(false);
                setError("");
            })
            .catch((error) => {
                console.error(error);
                setData({});
                setError(error.status);
            });
    }, [filters, currentPage]);

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header onFilterChange={onFilterChange} filters={filters} />
            <main className="d-flex flex-column align-items-center">
                <Error hasError={error} isLoading={spinner}>
                    <PersonsList characters={data.results} />
                    <Pagination
                        infoAboutPages={data.info}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                        isLoading={spinner}
                    />
                </Error>
            </main>
            <Footer totalPages={data.info} />
        </div>
    );
}

export default App;
