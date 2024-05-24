// Extract product Id, review id and display in browser


// 'useRouter' hook in Next.js is a powerful tool that allows you to interact with the router object directly within your functional components
import { useRouter } from 'next/router'

function Review() {
    const router = useRouter()
    const { productId, reviewId } = router.query

    return <h1>Review {reviewId} for product {productId}</h1>
}

export default Review 