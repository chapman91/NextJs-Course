import { useRouter } from 'next/router'

function ProductDetail() {
    // Call the use Router hook and store it in a var
    const router = useRouter()
    // ProductId on the query segment corresponds to the productId file in the 'Pages' folder
    const productId = router.query.productid
    return <h1>Details about product {productId}</h1>
}
  
export default ProductDetail
 
// Extract the product id and do something with it  