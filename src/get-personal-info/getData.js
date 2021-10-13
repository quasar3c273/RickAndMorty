export default class GetData {
    constructor() {
        this.api = "https://rickandmortyapi.com/api";
    }

    getFiltersUrl = (filters = {}) => {
        let filterAddress = "";
        for (const filter in filters) {
            if (filters.filter !== "")
                filterAddress += `&${filter}=${filters[filter]}`;
        }
        return filterAddress;
    };

    getFiltersCharacter = async (filters = {}, currentPage = 1) => {
        const filterUrl = this.getFiltersUrl(filters);
        return await this.getResource(
            `/character/?page=${currentPage}${filterUrl}`
        );
    };

    getResource = async (url) => {
        const res = await fetch(`${this.api}${url}`);

        if (!res.ok) {
            let error = new Error(
                `Could not fetch ${url}, received ${res.status}`
            );
            error.status = res.status;
            throw error;
        }
        return await res.json();
    };
}
