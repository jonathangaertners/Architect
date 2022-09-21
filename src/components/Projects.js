import React from 'react'

export default function Projects(props) {
  return (
    <section name="projects" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font md:text-left mb-2 text-gray-900">{props.args.headerTitle}</h1>
                <div className="h-1 m-auto md:m-0 w-20 bg-teal-600 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed md:text-left text-gray-500">{props.args.headerBody}</p>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={props.args.imagePath1} alt="content"/>
                <h3 className="tracking-widest text-teal-600 text-xs font-medium title-font">STORY LESEN</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{props.args.itemTitle1}</h2>
                <p className="leading-relaxed text-base">{props.args.itemBody1}</p>
                </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={props.args.imagePath2} alt="content"/>
                <h3 className="tracking-widest text-teal-600 text-xs font-medium title-font">STORY LESEN</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{props.args.itemTitle2}</h2>
                <p className="leading-relaxed text-base">{props.args.itemBody2}</p>
                </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={props.args.imagePath3} alt="content"/>
                <h3 className="tracking-widest text-teal-600 text-xs font-medium title-font">STORY LESEN</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{props.args.itemTitle3}</h2>
                <p className="leading-relaxed text-base">{props.args.itemBody3}</p>
                </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={props.args.imagePath4} alt="content"/>
                <h3 className="tracking-widest text-teal-600 text-xs font-medium title-font">STORY LESEN</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{props.args.itemTitle4}</h2>
                <p className="leading-relaxed text-base">{props.args.itemBody4}</p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
