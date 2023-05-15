import {IoArrowForwardSharp,IoMailOutline} from "react-icons/io5"

export const ButtonExplore = () => {
  return (
    <>
        <a href="#explore" className="bg-blacksmooth px-4 py-[4px] text-whitesmooth flex justify-evenly items-center mr-4 font-semibold transition-all ease-in duration-150 hover:bg-whitesmooth hover:text-blacksmooth outline outline-2 -outline-offset-2 outline-blacksmooth">explore <IoArrowForwardSharp className="rotate-[45deg] ml-2"/></a>
    </>
  )
}

export const ButtonContact = () => {
    return (
        <>
            <a href="#contact" className="bg-[#eaeaea] border-2 border-[#242424] px-4 py-[4px] font-semibold text-[#242424] flex justify-evenly items-center transition-all ease-in duration-150 hover:bg-blacksmooth hover:text-whitesmooth">contact <IoMailOutline className="ml-2"/></a>
        </>
    )
}