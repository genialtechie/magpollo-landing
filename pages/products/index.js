import {
  getAvailableProducts,
  getCategories,
  getCategoryProducts,
  getFilteredProducts,
} from '../../prisma/queries';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ProductCard } from '../../components';

export default function Products({ products, categories }) {
  const router = useRouter();
  const editedCategories = [
    { name: 'All Products', slug: 'All Products' },
    ...categories,
  ]; // add 'All Products' to the categories array for the dropdown menu
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    // update the query with the selected category
    selectedCategory === 'All Products' // when the user selects a new category from the dropdown menu
      ? router.push('/products?category=all')
      : router.push(`/products?category=${selectedCategory}`);
  }, [selectedCategory]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // update the query with the selected filter
    if (selectedFilter === 'asc') {
      router.push('/products?category=all&filter=asc');
    } else if (selectedFilter === 'desc') {
      router.push('/products?category=all&filter=desc');
    }
  }, [selectedFilter]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container h-fit py-10">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-1 p-5 lg:p-10">
          <div>
            <h1 className="text-xl font-bold text-custom uppercase text-center lg:text-left">
              Shop By
            </h1>
            <ul className="mt-4 hidden lg:block">
              <li className="text-lg mx-auto lg:mx-0 w-fit hover:text-orange transition-all duration-300 ease-in hover:cursor-pointer">
                <Link href="/products?category=all">All Products</Link>
              </li>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="text-lg mx-auto lg:mx-0 w-fit hover:text-orange transition-all duration-300 ease-in hover:cursor-pointer"
                >
                  <Link href={`/products?category=${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="block lg:hidden mt-4 container w-[300px] mx-auto h-fit overflow-hidden">
              <select
                className="w-full bg-theme text-lg text-custom border border-custom rounded-sm p-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {editedCategories.map((category) => (
                  <option
                    key={category.slug}
                    value={category.slug}
                    className="w-[300px] text-sm text-custom"
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-xl font-bold text-custom uppercase text-center lg:text-left">
              Relevance
            </h1>
            <ul className="mt-4 hidden lg:block">
              <li className="text-lg w-fit mx-auto lg:mx-0 hover:text-orange transition-all duration-300 ease-in hover:cursor-pointer">
                <Link href="/products?category=all&filter=asc">
                  Price: Low to High
                </Link>
              </li>
              <li className="text-lg w-fit mx-auto lg:mx-0 hover:text-orange transition-all duration-300 ease-in hover:cursor-pointer">
                <Link href="/products?category=all&filter=desc">
                  Price: High to Low
                </Link>
              </li>
            </ul>
            <div className="block lg:hidden mt-4 container w-[300px] mx-auto h-fit overflow-hidden">
              <select
                className="w-full bg-theme text-lg text-custom border border-custom rounded-sm p-2"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option
                  value=""
                  className="w-[300px] text-sm text-custom"
                ></option>
                <option
                  value="asc"
                  className="w-[300px] text-sm text-custom"
                >
                  Price: Low to High
                </option>
                <option
                  value="desc"
                  className="w-[300px] text-sm text-custom"
                >
                  Price: High to Low
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  let products;
  if (query.category === 'all' && !query.filter) {
    // return all available products if no filter is passed in query
    products = await getAvailableProducts();
  } else if (query.category === 'all' && query.filter) {
    // return all available products sorted by price if a filter is passed
    products = await getFilteredProducts(query.filter);
  } else {
    products = await getCategoryProducts(query.category); // return products in a specific category
  }
  const categories = await getCategories(); // return all categories
  return {
    props: {
      products,
      categories,
    },
  };
}
