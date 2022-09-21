import React from 'react'
import {useRef,useEffect,useState}  from "react"

export default function SplitBoxImgAndText(props) {
    console.log(props)

    //FADEIN 
    const [intersection1,setIntersection1]=useState(false)
    const [intersection2,setIntersection2]=useState(false)
    const [intersection3,setIntersection3]=useState(false)
    const myRef1=useRef()
    const myRef2=useRef()
    useEffect(()=>{
        const observer1 = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            
            {entry.isIntersecting && setIntersection1(true)} 

        })
        const observer2 = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            
            {entry.isIntersecting && setIntersection2(true)} 

        })
        const observer3 = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            
            {entry.isIntersecting && setIntersection3(true)} 
            

        },{
            threshold:0.5
        })
        observer1.observe(myRef1.current)
        observer2.observe(myRef2.current)
        observer3.observe(myRef1.current)
      })
    //FADIN END

  return (
    <section name={props.args.name}  className={` w-full  bg-${props.args.bgColor} flex ${props.args.reverse ? "md:flex-row-reverse" :"md:flex-row"} my-5 md:my-10 flex-col-reverse pb-[40px] justify-center items-center`}>
        
        <div ref={myRef2} className={` ${intersection2 ? "fadeinNoMove":"invisible" } md:bg-transparent  w-full md:w-3/5 h-full  z-10`}>
            <img alt="self-Logo w-1/4 md:w-1/2" src={props.args.imagePath}/>
        </div>
        <div ref={myRef1} className={` ${intersection1 ? (props.args.reverse ? "fadeinLeft" : "fadeinRight") : "invisible" } w-full md:w-2/5 h-full px-5 md:px-10 mb-10 md:mb-0 text-left`}>
            <h2 className="text-2xl sm:text-5xl xl:text-[60px] lg:text-[40px] md:text-[30px] md:text-left text-center ">{props.args.headerText}</h2>
            <div className={` ${intersection3 && "underline-animation-scroll"} mt-2`}></div>
            <p className=" text-m sm:text-l lg:text-xl  mt-4 md:text-left text-center">
            {props.args.bodyText}
            </p>
            {props.args.buttonText &&
            
                <button className='solidButton px-8 py-3 mt-5 ml-0'>{props.args.buttonText}</button>
            
            }
        </div>
  
    </section>
     )
}