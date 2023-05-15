// import files
import {servicesData} from  "../constant"
// import lib
import {motion} from "framer-motion"

const ServiceImage = () => {
  const staggerService = {
    init:{
      opacity:0,

    },
    visible : {
      opacity:1,
      transition:{
        staggerChildren:0.2,
      }
    }
  }
  const staggerServiceChildren = {
    init:{
      x:100,
      opacity:0,
    },
    visible : {
      x:0,
      opacity:1,
      transition:{
        ease:'easeInOut'
      }
    }
  }
  return (
    <motion.div className="grid grid-cols-1 lg:grid-cols-4 gap-4 overflow-hidden" variants={staggerService} initial="init" whileInView="visible">
        {
            servicesData.map((service) => (
                <motion.div key={service.id} className="relative w-[200px] lg:w-[280px]" variants={staggerServiceChildren}>
                    <img src={`/img/${service.img}`} alt="page 3 image" loading="lazy" />
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-[#eaeaea] font-semibold">{service.title}</p>
                </motion.div>
            ))
        }
    </motion.div>
  )
}

export default ServiceImage