import { useRouter } from 'next/router';
import LayoutDetailPage from '../../components/LayoutDetailPage';

const ProductPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Log information on the client-side
  return (
    <LayoutDetailPage product={product} />
  );
};

export default ProductPage;

export async function getServerSideProps({ params }) {
  const { id } = params;

  try {
    const res = await fetch(`http://backend:8080/api/products/${id}`);
    const product = await res.json();

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    // Handle error or return a fallback product
    console.error('Error fetching product:', error);
    return {
      props: {
        product: {}, // Return an empty product or handle the error as needed
      },
    };
  }
}
