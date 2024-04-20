import Product from "@/components/product/Product";
import ProductsFilter from "@/components/productsFilter/ProductsFilter";
import ProductsSort from "@/components/productsSort/ProductsSort";
import { getAllProducts } from "@/lib/data";

const page = async ({ searchParams }) => {
    const products = await getAllProducts();
    const searchText = searchParams?.search
    const sort = searchParams?.sort
    const productFilters = searchParams?.filter?.split(",").map(filter => filter.toLowerCase())
    let filteredProducts =
        searchText == null
            ? products
            : products.filter((product) =>
                product.title
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            );

    if (productFilters) {
        filteredProducts = filteredProducts.filter(product => productFilters.includes(product.category.toLowerCase()));
    }

    switch (sort) {
        case "azName":
            filteredProducts.sort((a, b) =>
                a.title.toLowerCase().localeCompare(b.title.toLowerCase())
            );
            break;
        case "zaName":
            filteredProducts.sort((a, b) =>
                b.title.toLowerCase().localeCompare(a.title.toLowerCase())
            );
            break;
        case "priceDec":
            filteredProducts.sort((a, b) => Number(b.price) - Number(a.price));
            break;
        case "priceInc":
            filteredProducts.sort((a, b) => Number(a.price) - Number(b.price));
            break;
        case "azCategory":
            filteredProducts.sort((a, b) =>
                a.category.toLowerCase().localeCompare(b.category.toLowerCase())
            );
            break;
        case "zaCategory":
            filteredProducts.sort((a, b) =>
                b.category.toLowerCase().localeCompare(a.category.toLowerCase())
            );
            break;
        default:
            filteredProducts.sort((a, b) => Number(a.id) - Number(b.id));
            break;
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-24">
            <div className="flex justify-between w-full py-4 ">
                <ProductsSort params={searchParams} />
            </div>
            <h1 className="font-semibold block md:hidden mb-3 text-left">Products <span className="font-bold text-xl ">{filteredProducts?.length}</span></h1>
            <div className="flex flex-col md:flex-row justify-between gap-8">
               <ProductsFilter params={searchParams} />
                <div>
                    <h1 className="font-semibold mb-3 hidden md:block">Products <span className="font-bold text-xl ">{filteredProducts?.length}</span></h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">

                        {(filteredProducts.length == 0 && <div>Not found Product</div>) ||
                            filteredProducts.map((product) => (
                                <Product product={product} key={product.id} />
                            ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;
