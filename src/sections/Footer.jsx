import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { SocialMedia } from "../components"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <section id="contact-us" className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col item-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards 
          </p>
          <div className="flex items-center gap-3 mt-8">
            {socialMedia.map((platform)=>(
              <SocialMedia key={platform.alt} {...platform}/>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((footerSection) => (
            <div key={footerSection.title} className="">
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{footerSection.title}</h4>
              <ul>{footerSection.links.map((links)=>(
                <li key={links.name} className="text-white-400 font-montserrat text-base leading-normal hover:text-slate-800">
                  <a href={links.link}>{links.name}</a>
                </li>
              ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright image" width={20} height={20} className="rounded-full m-0"/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </section>
  )
}

export default Footer