// import files
import ImageSlider from "../components/ImageSlider"
// import lib
import {motion} from "framer-motion"

const VisitPlace = () => {

  return (
    <div className="overflow-hidden" id="explore">
        <h1 className="text-6xl font-bold text-center mt-12 mb-12">PLACES TO <motion.span className="border-b-4 border-red-600">VISIT</motion.span></h1>
        <ImageSlider />
        <p className="text-xs font-semibold text-right my-8">PAGE 2 OF 4</p>
    </div>
  )
}

export default VisitPlace