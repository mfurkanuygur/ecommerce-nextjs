"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const SortFilters = ({ params }) => {
    const router = useRouter()
    const searchText = params?.search
    const filters = params?.filter?.split(",")
    const [selectedSort, setSelectedSort] = useState("default");

    const handleSort = (e) => {
        const productSort = e.target.value;

        const queryParams = [];
        if (searchText) queryParams.push(`search=${searchText}`);
        if (filters?.length > 0) queryParams.push(`filter=${filters.join(",")}`);
        queryParams.push(`sort=${productSort}`);

        const url = `/products/?${queryParams.join("&")}`;
        router.push(url);
    }
    useEffect(() => {
        setSelectedSort("default");
    }, [searchText]);

    return (
        <div>
            <select value={selectedSort}
                onChange={(e) => {
                    setSelectedSort(e.target.value);
                    handleSort(e);
                }} className="p-2 bg-cyan-800 text-white rounded-lg">
                <option value="default">Default</option>
                <option value="azName">A-Z (Name)</option>
                <option value="zaName">Z-A (Name)</option>
                <option value="priceInc">Price Inc</option>
                <option value="priceDec">Price Dec</option>
                <option value="azCategory">A-Z (Category)</option>
                <option value="zaCategory">Z-A (Category)</option>
            </select>
        </div>
    )
}

export default SortFilters