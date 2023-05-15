// import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <nav className="pt-8 flex justify-between">
        <div>
            <h1 className="text-xl font-bold">explo.co</h1>
        </div>
        <ul className="flex justify-between w-[400px]">
            <li className="relative after:content-[''] after:block after:w-[100%] after:transform after:scale-0 after:origin-center after:h-[2px] after:bg-blacksmooth after:absolute after:bottom-0 after:left-0 after:transition-transform after:duration-200 after:ease-in hover:after:scale-[1]"><a href="#home" className="font-semibold ">Home</a></li>
            <li className="relative after:content-[''] after:block after:w-[100%] after:transform after:scale-0 after:origin-center after:h-[2px] after:bg-blacksmooth after:absolute after:bottom-0 after:left-0 after:transition-transform after:duration-200 after:ease-in hover:after:scale-[1]"><a href="#services" className="font-semibold">Services</a></li>
            <li className="relative after:content-[''] after:block after:w-[100%] after:transform after:scale-0 after:origin-center after:h-[2px] after:bg-blacksmooth after:absolute after:bottom-0 after:left-0 after:transition-transform after:duration-200 after:ease-in hover:after:scale-[1]"><a href="#ourteam" className="font-semibold">Our team</a></li>
        </ul>
    </nav>
  )
}

export default Navbar