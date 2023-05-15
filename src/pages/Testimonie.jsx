// import files
import TestimonieCarousel from "../components/TestimonieCarousel"
import Review from "../components/Review"
// import lib
import useEmblaCarousel from 'embla-carousel-react'
import { useState,useEffect,useCallback } from "react"

const Testimonie = () => {
    const [selectedIndex,setSelectedIndex] = useState(0)
    const [emblaRef,emblaApi] = useEmblaCarousel({
        loop:true,
    })

    const onSelect = useCallback(() => {
        if(!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    },[emblaApi,setSelectedIndex])

    const handleClick = useCallback((index) => {
        if(emblaApi === undefined) return
        emblaApi.scrollTo(index)
    },[emblaApi])

    useEffect(() => {
        if(!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
    }, [emblaApi,onSelect,selectedIndex])
    
  return (
    <div className="overflow-hidden py-12 h-[500px] " ref={emblaRef}>
        <div className="flex">
            <TestimonieCarousel index={0} selectedIndex={selectedIndex} handleClick={handleClick}>
                <Review>
                    <p className="text-whitesmooth">&ldquo;Booking through you was very easy and made our lives so much easier. I have nothing bad to say! Thank you for giving us tips and guidance&rdquo;</p>
                    <p className="text-red-600 font-bold text-xl">Meg</p>
                </Review>
            </TestimonieCarousel>
            <TestimonieCarousel index={1} selectedIndex={selectedIndex} handleClick={handleClick}>
                <Review>
                    <p className="text-whitesmooth">You did a fabulous job. There were no hitches. Thank you again for all your work planning this trip.</p>
                    <p className="text-red-600 font-bold text-xl">Carl</p>
                </Review>
            </TestimonieCarousel>
            <TestimonieCarousel index={2} selectedIndex={selectedIndex} handleClick={handleClick}>
                <Review>
                    <p className="text-whitesmooth">I am so thankful you guys are my travel agents as I am to overwhelmed with everything else to shop for airplane tickets. You know you are much more than travel people. You are my friends, and that means a great deal to me. Thankyou, in these unwanted times of crisis, you both came to help me</p>
                    <p className="text-red-600 font-bold text-xl">Don</p>
                </Review>
            </TestimonieCarousel>
            <TestimonieCarousel index={3} selectedIndex={selectedIndex} handleClick={handleClick}>
                <Review>
                    <p className="text-whitesmooth">Booking through you was very easy and made our lives so much easier. I have nothing bad to say! Thank you for giving us tips and guidance</p>
                    <p className="text-red-600 font-bold text-xl">Meg</p>
                </Review>
            </TestimonieCarousel>
            <TestimonieCarousel index={4} selectedIndex={selectedIndex} handleClick={handleClick}>
                <Review>
                    <p className="text-whitesmooth">You did a fabulous job. There were no hitches. Thank you again for all your work planning this trip.</p>
                    <p className="text-red-600 font-bold text-xl">Carl</p>
                </Review>
            </TestimonieCarousel>
            <TestimonieCarousel index={5} selectedIndex={selectedIndex} handleClick={handleClick}>
                <Review>
                    <p className="text-whitesmooth">I am so thankful you guys are my travel agents as I am to overwhelmed with everything else to shop for airplane tickets. You know you are much more than travel people. You are my friends, and that means a great deal to me. Thankyou, in these unwanted times of crisis, you both came to help me</p>
                    <p className="text-red-600 font-bold text-xl">Don</p>
                </Review>
            </TestimonieCarousel>
        </div>
    </div>
  )
}

export default Testimonie