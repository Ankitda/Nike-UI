import { arrowRight } from "../assets/icons"
import { Button } from "../components"
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
    <section className="flex justify-start items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer image" width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-col flex-1 justify-start">
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg">Special 
          <span className="text-coral-red"> Offer</span>
        </h2>
        <p className="leading-8 mt-4 text-lg text-slate-gray font-montserrat lg:max-w-lg">Embark ona shopping journey that redefines your experience with unbeatables deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart</p>
        <p className="leading-8 mt-4 text-lg text-slate-gray font-montserrat lg:max-w-lg">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. your journey with us is nothing short of exceptional</p>
        <div className="flex flex-wrap gap-5 mt-11">
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer