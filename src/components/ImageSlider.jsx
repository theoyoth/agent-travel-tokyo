// import files
import {placeToVisit} from '../constant';
// import lib
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// const AutoplaySlider = withAutoplay(AwesomeSlider);

const ImageSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({delay:5000})
  ])

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className="h-auto flex">
        {placeToVisit.map((place) => (
          <div className="relative flex growth-0 shrink-0 basis-full" key={place.id}>
              <img src={`/img/${place.img}`} alt={place.place} loading='lazy' className="brightness-[0.3] object-cover"/>
              <div className="flex flex-cols">
                <h1 className="text-[#eaeaea] text-6xl font-bold w-max absolute top-1/3 left-1/2 transform -translate-x-[50%]">{place.place}</h1>
                <p className="font-bold text-[#eaeaea] absolute left-1/2 bottom-32 transform -translate-x-[50%] text-center z-10">{place.ex}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider