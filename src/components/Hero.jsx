import { HeroSection } from "../constant"

const Hero = () => {
  return (
    <section className="m-5 relative">
      <div className="flex flex-col md:flex-row p-7 bg-[#080201] w-full h-auto mt-24">
        {
          HeroSection.map((hero, index) => (
            <div key={index} className="w-full flex flex-col md:flex-row justify-between items-center mb-10">
              <div className="md:w-1/2 w-full flex flex-col items-start md:mr-8">
                <h1 className="text-[#ED7C3C] text-2xl md:text-4xl mb-3">{hero.title}</h1>
                <p className="text-[#C8AEAE] w-full md:w-3/4 font-thin text-base md:text-[18px]">{hero.description}</p>

                <div className="p-4 md:p-8 w-full md:w-3/4 bg-[#131313] rounded-md h-auto mt-6 md:mt-10 flex flex-col md:flex-row justify-between">
                  <div className="text-white mb-4 md:mb-0 md:w-1/2">
                    <h6 className="pb-2">Price: {hero.price}</h6>
                    <p className="text-[13px] font-thin text-[#A7A7A7]">Allergens</p>
                    <p className="text-[8px] text-[#ED7C3C]">Contains milk</p>
                  </div>

                  <div className="">
                        <h3 className="text-white font-3xl pb-2 ">Ingredients/Components:</h3>
                        <p className="text-[#838383] text-[12px]">Espresso, steamed milk, caramel syrup, caramel drizzle</p>
                        </div>
                </div>
              </div>

              <div className="w-full md:w-auto flex justify-center md:justify-end">
                <img src={hero.image} className="w-[200px] md:w-[320px] h-[250px] md:h-[406px] mt-6 md:mt-0" alt="" />
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Hero;
