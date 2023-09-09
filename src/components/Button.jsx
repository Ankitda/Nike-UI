const Button = ({label, iconURL, backgroundColor, borderColor, textColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 bg-coral-red font-montserrat text-lg px-7 py-4 leading-none rounded-full
    ${backgroundColor ? `border-2 ${backgroundColor} ${borderColor} ${textColor}` : ` text-white border-coral-red`}`}>
        {label}
        {iconURL && <img src={iconURL} alt="arroe right icon" className="ml-2 rounded-full w-5 h-5 bg-white-400" />}
    </button>
  )
}

export default Button