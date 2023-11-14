import React from 'react'
import Star from './Star';
import GreyStar from './GreyStar';
import MyImage from '../assets/Profile.jpeg'
export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src={MyImage} />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Hi this is Uttkarsh Sharma the Developer this side. Thanks for viewing my mini-project regarding the Theme swtiching.
                        <br />
                        <span>Now you can go back to the website by click me button</span> 
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <Star />
                    <Star />
                    <Star/>
                    <Star/>
                    <GreyStar/>                   
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Open to work</span>
                    <a
                        href="https://uttkarsh-portfolio.netlify.app/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Click me
                    </a>
                </div>
            </div>
        </div>
    );
}
