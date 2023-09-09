import { Button } from "../components"
const Subscribe = () => {
  return (
    <section className="max-container flex justify-center items-center flex-col">
      <h3 className="text-center text-4xl font-palanquin font-bold">
        Sign Up for More 
        <span className="text-coral-red"> Exciting </span>
        Products
      </h3>
      <div className="mt-11 flex flex-1 justify-between w-4/5 border-2 border-slate-300 rounded-[100px] p-2 max-sm:flex-col max-sm:border-none">
        <input type="text" placeholder="subscribe@nike.com" className="ml-4 input border-2 max-sm:border-slate-300"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full max-sm:mt-10">
          <Button label="Sign Up"/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe