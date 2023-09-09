import { reviews } from "../constants"
import { ReviewCard } from "../components"
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="mt-4 m-auto text-center max-w-lg font-montserrat text-slate-gray">Here genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly max-lg:flex-col items-center gap-14">
        {reviews.map((review)=>(
          <ReviewCard key={review.feedback} {...review}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews