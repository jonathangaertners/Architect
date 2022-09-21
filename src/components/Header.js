import React from 'react'

export default function Header(props) {
  return (
    <div className={`relativ`} name="home">
      <div className='bg-black'>
        <img className={`object-cover min-h-screen opacity-[80%]`} src={props.args.imagePath} alt="Hero Image" />
      </div>
        <div className={`bottom-[10%] w-3/4  left-8 absolute text-white text-left`}>
            <h2 className={`xl:text-7xl md:text-4xl  sm:text-2xl text-5xl `}>{props.args.headerText}</h2>
            <p className={`hidden sm:inline-block xl:text-4xl text-2xl sm:text-lg`}>{props.args.bodyText}</p>
            <div className={`flex mt-3`}>
              {props.args.buttonText1 &&
                <button className='inline-flex  text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg' >{props.args.buttonText1}</button>
              }
              {props.args.buttonText2 &&
                <button className='buttonSecond ml-4 inline-flex text-gray-100  border-2 border-gray-100 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:text-gray-700 rounded text-lg'>{props.args.buttonText2}</button>
              }
              

            </div>
        </div>
    </div>
  )
}
