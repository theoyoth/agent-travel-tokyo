// import lib
import {AiFillCar} from "react-icons/ai"
import {IoSend} from "react-icons/io5"

const Contact = () => {
  return (
    <div>
        <h1 className="text-whitesmooth text-3xl text-center font-bold flex items-center justify-center">Contact Us <AiFillCar className="ml-2" /></h1>
        <div className="mt-12 flex justify-center">
            <form className="w-[600px] flex flex-col py-12 px-32 border-2 border-whitesmooth">
                <input type="email" placeholder="email" className="bg-whitesmooth mb-4 px-4 py-2 outline-none" />
                <textarea cols="30" rows="8" placeholder="message" className="bg-whitesmooth mb-4 px-4 py-2 outline-none"></textarea>
                <button className="bg-red-600 hover:bg-red-700 outline-none text-whitesmooth font-semibold py-2 flex justify-center items-center">SEND<IoSend className="ml-2"/></button>
            </form>
        </div>
    </div>
  )
}

export default Contact