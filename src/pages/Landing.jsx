// import files
import {ButtonExplore,ButtonContact} from "../components/Button"
// import lib
import {motion} from "framer-motion"

const LandingPage = () => {
  const exploreStagger = {
    init:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.1,
        delayChildren:0.4
      }
    }
  }
  const exploreStaggerChildren = {
    init:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        ease:'easeInOut',
      }
    }
  }
  const exploSimple = {
    init:{
      opacity:0,
      x:-100
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        delay:1,
        ease:'easeInOut'
      }
    }
  }
  const imgLanding = {
    init:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.4,
        delayChildren:1.1,
      }
    }
  }
  const imgLandingChildren = {
    init:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        ease:'easeIn'
      }
    }
  }
  return (
    <section className="relative h-[90vh]" id="home">
      <div className="grid grid-cols-2">
        <div>
          <motion.h1 className="text-[8rem] font-bold leading-tight -ml-3" variants={exploreStagger} initial="init" animate="visible">
            {Array.from("EXPLORE").map((lett,i) => (
              <motion.span key={i} variants={exploreStaggerChildren}>{lett}</motion.span>
            ))}
          </motion.h1>
          <motion.h1 className="bg-red-600 text-[#eaeaea] text-[7rem] font-bold px-4 w-max" variants={exploreStagger} initial="init" animate="visible">
            {Array.from("TOKYO").map((lett,i) => (
              <motion.span key={i} variants={exploreStaggerChildren}>{lett}</motion.span>
            ))}
          </motion.h1>
          <motion.div className="flex flex-col justify-between mt-5 h-[150px]" variants={exploSimple} initial="init" animate="visible">
            <p className="font-semibold">we are agency based in <span className="text-red-600 font-bold">SHIBUYA</span>. we provide<br/>services for those people who want to<br/> explore <span className="text-red-600 font-bold">TOKYO</span>.</p>
            <div className="flex gap-4">
              <ButtonExplore />        
              <ButtonContact />        
            </div>
          </motion.div>
        </div>
        <motion.div className="relative" variants={imgLanding} initial="init" animate="visible">
          <motion.img src="/img/landing-page-3.webp" alt="landing page" className="w-10/12 absolute right-0 top-8 origin-top " variants={imgLandingChildren} />
          <motion.img src="/img/landing-page-1.webp" alt="landing page" className="w-[90%] absolute -left-32 -bottom-12 origin-top" variants={imgLandingChildren} />
          <motion.img src="/img/landing-page-2.webp" alt="landing page" className="w-1/2 absolute right-12 bottom-4 origin-top" variants={imgLandingChildren} />
        </motion.div>
      </div>
      <p className="text-xs font-semibold text-right absolute right-0 bottom-0">PAGE 1 OF 4</p>
    </section>
  )
}

export default LandingPage