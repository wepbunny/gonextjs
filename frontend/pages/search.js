import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

const SearchPage = ({ products }) => {
   console.log("Products received in SearchPage:", products);
   // Log information on the client-side
   return (
    <Layout products={products} />
  );
};

export async function getServerSideProps({ query }) {
  try {
    const { query: searchQuery } = query; // Extract the 'query' parameter
    const res = await fetch(`http://backend:8080/api/products/search?query=${encodeURIComponent(searchQuery)}`);
    const data = await res.json();
    console.log("Search results from backend:", data);
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error("Error fetching search results:", error);
    return {
      props: {
        products: [], // or handle the error as needed
      },
    };
  }
}

export default SearchPage;
