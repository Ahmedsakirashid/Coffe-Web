import first from "../assets/first.png";
import sec from "../assets/sec.png";
import logo from "../assets/logo.png";
import {Menu, X} from "lucide-react";

const Nav = () => {
  return (
    <nav className="relative bg-black  max-md:h-[70vh] max-sm:h-[70vh] h-[84vh]" >
            <div>
            <img src={sec} className="absolute w-full h-full bg-cover bg-center bg-no-repeat object-cover opacity-20" alt="" />
        </div>

        <section className="absolute w-full ">
                        <div className="p-5 flex justify-between items-center max-sm:p-3 max-sm:flex max-sm:ml-3 max-sm:justify-between">

            <div className="">
                <img src={logo} className="max-sm:w-16" alt="" />
            </div>

            <div className=" ">
            <a href="#" className="py-1 px-5 rounded-lg bg-[#ED7C3C] text-white mr-3 ">Sign in</a>
            <a href="#" className="py-1 px-8 max-sm:px-4 rounded-lg border border-[#ed7c3c] text-[#ed7c3c]">Sign up</a>

            </div>
                </div>
            </section>    


        <div className="absolute top-40 p-5 ">

    <h2 className="bg-gradient-to-r from-[#ed7c3c] to-white  pb-3 max-md:text-[30px] max-sm:text-[15px] font-semibold
     bg-clip-text text-transparent text-4xl w-2/3 max-sm:space-y-0">Welcome to Coff: Where Every 
        Sip Tells a Story</h2>
    
    <p className="text-white font-thin w-96 pb-6 max-md:text-[10px] max-sm:w-44">Experience the Finest Brews from Around the World,
         Crafted with Passion and Precision</p>
            <a  href="#" className="py-1 px-8 rounded-lg border border-[#ed7c3c] text-[#ed7c3c] ">Sign up</a>

            </div>    
       
    </nav>
  )
}

export default Nav



{/* <div className="absolute w-full flex justify-between items-center p-5  max-sm:flex">
<div className="">
    <img src={logo} alt="" />
</div>

<div className=" ">
<a href="#" className="py-1 px-5 rounded-lg bg-[#ED7C3C] text-white mr-3 ">Sign in</a>
<a href="#" className="py-1 px-8 rounded-lg border border-[#ed7c3c] text-[#ed7c3c]">Sign up</a>

</div>
</div>    

<div className="absolute top-40 p-5">

    <h2 className="bg-gradient-to-r from-[#ed7c3c] to-white  pb-6 max-md:text-2xl max-sm:text-1xl font-semibold
     bg-clip-text text-transparent text-4xl">Welcome to Coff: Where Every  <br />
        Sip Tells a Story</h2>
    
    <p className="text-white font-thin w-96 pb-6 max-md:text-1xl">Experience the Finest Brews from Around the World,
         Crafted with Passion and Precision</p>
<a href="#" className="py-1 px-8 rounded-lg border border-[#ed7c3c] text-[#ed7c3c] ">Sign up</a>

</div>     */}