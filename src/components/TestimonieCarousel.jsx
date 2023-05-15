// import files
// import lib

const TestimonieCarousel = ({children,index,handleClick,selectedIndex}) => {
  return (
    <div className={`grow-0 shrink-0 basis-[40%] mx-12 text-center cursor-default select-none ${selectedIndex === index ?  'opacity-100':'opacity-30'}`} onClick={() => handleClick(index)}>
        {children}
    </div>
  )
}

export default TestimonieCarousel