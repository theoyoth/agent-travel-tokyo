// import file
import ServiceImage from "../components/ServiceImage"

const Services = () => {

  return (
    <div id="services">
        <div className="flex justify-between items-center mb-12">
            <h1 className="text-6xl font-bold border-b-4 border-red-600">SERVICES</h1>
            <p className="text-xl font-semibold">here are some of our offers we give you</p>
        </div>
        <ServiceImage />
        <p className="text-xs font-semibold text-right my-12">PAGE 3 OF 4</p>
    </div>
  )
}

export default Services