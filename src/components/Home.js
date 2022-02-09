import React from 'react';
const Home = () => {
  return <>
   <div className="w-full h-[100vh] overflow-hidden">
            <div className="flex justify-center mt-12 text-gray-800 ">
              <span className="text-7xl font-serif">The Indian</span><span className="ml-3 text-7xl font-sans font-bold tracking-wide">Times</span>
            </div>
            <div className="flex  w-full mt-10 bg-blue-100 ">
              <div className="flex flex-col w-1/2 ">
                <h1 className="text-gray-800 font-inter text-6xl font-bold ml-10 mt-10">The super fast<br/>news providing<br/>website </h1>
                <div className="mx-16 mt-12">
                    <a href="/business" className="px-12 py-3 rounded-3xl transition ease-in-out hover:scale-110  delay-150 bg-blue-700  text-white hover:-translate-y-1  hover:text-blue-700  hover:bg-white  duration-300 cursor-pointer left-28 mb-3">
                        Read News
                    </a>
                </div>
              </div>
              <div className="w-1/2">
                <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_mp6wwkvx.json"  background="transparent"  speed="1"  style={{width: "500px",height: "500px"}}  loop  autoplay></lottie-player>
              </div>
            <div/>
        </div>
        </div>
  </>
};
export default Home;
