import { secFooter } from "../constant"


const Footer = () => {
  return (
    <section className="mt-20">
        <div className=" w-full h-40 bg-[#26190F] flex flex-col max-sm:h-96 text-center">
            
            <div className="flex justify-evenly items-center p-7 max-sm:flex-col sm:flex-row">
                {
                    secFooter.map((sec, index)=>(
                        <div className=" text-white items-center pb-4 text-center" key={index}>
                        <h1>{sec.text}</h1>
                        <p className="text-[13px] text-[#707070] font-light">{sec.desc}</p>
                        <p className="text-[13px] text-[#707070] font-light">{sec.page}</p>
                        <img src={sec.imgess} className="max-w-xs mx-auto" alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Footer

// import { secFooter } from "../constant"

// const Footer = () => {
//   return (
//     <section className="mt-20">
//         <div className="w-full h-40 bg-[#26190F] flex flex-col max-sm:h-80 text-center">

//             <div className="flex justify-evenly items-center p-7 flex-col sm:flex-row">
//                 {
//                     secFooter.map((sec, index) => (
//                         <div className="text-white items-center pb-4 text-center" key={index}>
//                             <h1>{sec.text}</h1>
//                             <p className="text-[13px] text-[#707070] font-light">{sec.desc}</p>
//                             <p className="text-[13px] text-[#707070] font-light">{sec.page}</p>
//                             <img src={sec.imgess} alt="" className="max-w-xs mx-auto"/>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Footer
