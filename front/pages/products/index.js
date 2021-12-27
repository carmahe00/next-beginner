import axios from 'axios';
import Link from 'next/link'

function ProductList({ products = [] }) {

    return <>
        <h1>List of products</h1>
        {
            products.map(product => (
                <div key={product.id}>
                    <Link href={`products/${product.id}`} >
                        <h2>
                            {product.id} {product.title} {product.price}
                        </h2>

                    </Link>
                    <hr />
                </div>
            ))
        }
    </>
}

ProductList.getInitialProps = async ctx => {
    try {
        const { data } = await axios("http://localhost:4000/products");
        return { products: data.slice(0, 3), revalidate: 10 };
    } catch (error) {
        return { errorLoading: true }
    }
}

export default ProductList;
