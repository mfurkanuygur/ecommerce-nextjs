"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProductsFilter = ({ params }) => {
    const categories = [
        { value: "Men's Clothing", label: "Men's Clothing" },
        { value: "Jewelery", label: "Jewelery" },
        { value: "Electronics", label: "Electronics" },
        { value: "Women's Clothing", label: "Women's Clothing" },
    ];

    const router = useRouter()
    const searchText = params?.search
    const sort = params?.sort
    const [filters, setFilters] = useState([])

    const handleFilter = (e) => {
        const filterName = e.target.value;
        e.target.checked ?
            setFilters([...filters, filterName]) : setFilters(() => filters.filter((f) => f !== filterName))
    };

    const generateUrl = () => {
        let url = "/products";
        const queryParams = [];
        if (searchText) queryParams.push(`search=${searchText}`);
        if (sort) queryParams.push(`sort=${sort}`);
        if (filters.length > 0) queryParams.push(`filter=${filters.join(",")}`);
        if (queryParams.length > 0) {
            url += `?${queryParams.join("&")}`;
        }
        return url;
    };

    useEffect(() => {
        router.push(generateUrl());
    }, [filters, searchText, sort])

    // Reset sort and filters when searchText changes
    useEffect(() => {
        if (searchText && (sort || filters.length > 0)) {
            // router.push(`/products/?search=${searchText}`);
            router.push(generateUrl());
            document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
                checkbox.checked = false;
            });
            setFilters([])
        }
    }, [searchText]);

    const handleClearFilter = () => {
        setFilters([])
        document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
            checkbox.checked = false;
        });
    }
    return (
        <div className="max-w-72 min-w-52 hidden md:block">
            <h1 className="text-2xl font-bold mb-3">Filters</h1>
            <h2 className="text-lg font-bold  border-b-2 py-1 mb-2 border-cyan-800">Categories</h2>
            {categories.map((category) => (
                <form className="flex items-center gap-2 " key={category.value} >
                    <input type="checkbox" value={category.value} id={`${category.label}`} onChange={(e) => { handleFilter(e) }} />
                    <label className=" cursor-pointer" htmlFor={`${category.label}`}>
                        {category.label}
                    </label>
                </form>
            ))}
            <button className="p-2 my-3 border-2 rounded-lg bg-cyan-800 text-white text-sm" onClick={() => { handleClearFilter() }}>Clear All Filter</button>
        </div>
    )
}
export default ProductsFilter