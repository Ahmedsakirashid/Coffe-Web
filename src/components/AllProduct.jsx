import { AvailableProduct } from "../constant"



const AllProduct = () => {
  return (
    <section className="mt-32 p-10">
        <div className="">
            <h1 className="text-[#868686] text-2xl ml-12 mb-10 max-sm:ml-0 ">Available Products</h1>
        </div>

        <div className="">
            <div className="flex flex-row items-center justify-evenly max-sm:flex-col max-md:p-4">
                {
                    AvailableProduct.map((all, index)=>(
                        <div className="max-sm:mb-10 max-sm:justify-center" key={index}>
                            <img src={all.img} className="lg:w-80 mb-3 max-sm:w-52 md:w-52 " alt="" />

                            <h5 className="lg:text-[17px] max-md:text-[13px]  mb-2">{all.name}</h5>

                            <p className="w-2/3 text-[12px] md:text-[9px] font-light text-[#4E4C4C] mb-4">{all.description}</p>

                            <a href="#" className="px-5 py-2 bg-[#ED7C3C] text-white rounded-md">Sign in</a>
                        </div>
                        
                    ))
                }


            </div>
        </div>

    </section>
  )
}

export default AllProduct