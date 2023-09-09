import { star } from "../assets/icons"
const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-1 flex-col gap-4 justify-center items-center">
        <div className="mb-8">
            <img src={imgURL} alt="customerImage" width={120} height={120} className="object-cover rounded-full"/>
        </div>
        <h3 className="font-palanquin text-3xl text-center font-bold">{customerName}</h3>
        <p className="flex gap-2 text-xl">
            <img src={star} alt="star" width={24} height={24} />
            {`(${rating})`}
        </p>
        <p className="text-slate-gray text-lg font-montserrat max-w-xs text-center">
            {feedback}
        </p>
    </div>
  )
}

export default ReviewCard