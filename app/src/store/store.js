import { getAllProducts } from "@/lib/data"
import { create } from "zustand"

export const useSearchTerm = create((set) => ({
    searchTerm: null,
    updateSearchTerm: (newTerms) => set({ searchTerm: newTerms })
}))

export const useFilteredProduct = create((set) => ({
    products: null,
    filteredProducts: async (filterText) => {
        const allProducts = await getAllProducts().filter(product => { product.title.toLowerCase().includes(filterText?.toLowerCase()) })
        set({ products: allProducts })
    }
}))

export const useLoginState = create((set) => ({
    loginState: false,
    updateLoginState: (newState) => set({ loginState: newState })
}))
