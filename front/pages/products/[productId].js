import axios from 'axios';
import { useRouter } from 'next/router'

function Product({ product }) {
    const router =  useRouter();
    if(router.isFallback)
        return <div>Loading...</div>
    return (
        <>
            <h2>{product.id} {product.title}</h2>
            <p>{product.description}-{product.price}</p>
        </>
    )
}

export default Product

export async function getStaticPaths() {
    return {
        paths: [
            { params: { productId: "1" } }, // See the "paths" section below
        ],
        fallback: true,
    };
}

export async function getStaticProps(ctx) {
    try {
        const { params } = ctx
        console.log(`Regenerating product ${params.productId}`)
        const { data } = await axios(`http://localhost:4000/products/${params.productId}`);
        return { props: { product: data }, revalidate: 10};
    } catch (error) {
        return { errorLoading: true }
    }
}
