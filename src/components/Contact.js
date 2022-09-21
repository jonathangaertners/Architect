import React from 'react'

export default function Contact(props) {
  return (
    <section name="contact" className="text-gray-600 body-font relative mt-[140px] ">
        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0 iframe" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=zumroockstra%C3%9Fe%201%20m%C3%BCnster+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6"> 
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESSE</h2>
                <p className="mt-1">{props.args.adress}</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-teal-600 leading-relaxed">{props.args.email}</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">TELEFONNUMMER</h2>
                <p className="leading-relaxed">{props.args.phonenumber}</p>
                </div>
            </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Kontakt</h2>
            <p className="leading-relaxed mb-5 text-gray-600">{props.args.contactText}</p>
            <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label for="message" className="leading-7 text-sm text-gray-600">Nachricht</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Senden</button>
            <p className="text-xs text-gray-500 mt-3"></p>
            </div>
        </div>
        </section>
  )
}
