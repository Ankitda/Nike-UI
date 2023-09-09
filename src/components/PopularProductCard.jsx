import { star } from "../assets/icons"
const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full justify-center items-center">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px] transform transition duration-500 hover:scale-90 hover:bg-gradient-to-l"/>
        <div className="mt-8 flex justify-start flex-col gap-4">
            <div className="flex justify-start flex-row gap-4">
                <img src={star} alt="star" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
            </div>
            <h3 className="text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
        </div>
    </div>
  )
}

export default PopularProductCard