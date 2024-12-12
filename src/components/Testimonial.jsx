import Ellipse  from "../assets/Ellipse.png";



const Testimonial = () => {
  return (
    <section className="m-9">
        <div className="bg-[#26190F] w-full h-[23rem] max-sm:h-[30rem] flex flex-col justify-center text-center items-center">
            <img src={Ellipse} className="w-32" alt="" />
            <p className="w-1/2 text-[12px] text-center font-light mt-4 text-[#D7D7D7]"> ‘ I absolutely love Coff's Blueberry Muffin! It's the perfect balance of sweetness and blueberry flavor, and it pairs wonderfully with a cup of their rich espresso. The muffin is always fresh and moist, making it a delightful treat any time of day. I highly recommend trying it ‘</p>
            <h2 className="text-[13px] text-[#ED7C3C] mt-3 font-semibold">John Doe</h2>
        </div>
    </section>
  )
}

export default Testimonial