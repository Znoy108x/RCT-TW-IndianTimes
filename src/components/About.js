import React from "react";
import "./card.css";
import Footer from "./Footer"

const About = () => {
  return (
    <>
    <div className="overflow-hidden relative">
      <a href="/business" className="px-12 py-3 rounded-3xl transition ease-in-out hover:scale-110  delay-150 bg-[#2c3e50]  text-white hover:-translate-y-1  hover:text-black  hover:bg-[#bdc3c7]  duration-300 cursor-pointer  absolute right-20 top-2" target="_blank" rel="noreferrer">
            Read News
        </a>
      
    <h1 className="font-anim text-center text-8xl  relative top-14 text-gray-800">
        About
      </h1>

      <div className="flex mx-20 bg-gray-200">
        <div className="w-1/2 relative  left-64 top-20">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_FYx0Ph.json"
            background="transparent"
            speed="1"
            style={{ width: "400px", height: "400px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
        <div class="eb-lora bg-gray-200">
          <p class="eb-lora-p">
            <span class="eb-lora-fl">H</span>ere is Abhay Bisht,This is my first
            react and tailwind css project .
          </p>
          <p class="eb-lora-p">
            Don't judge me on the basis of styling and simplicity . i'll work on
            that part<br></br>
          <span>~ 9-02-2022 ~</span>
          </p>
        </div>
      </div>


      <h1 className="font-anim text-7xl text-center mt-10 z-50  relative top-9 font-bold tracking-widest">
        Skills
      </h1>

      <div className="flex flex-col w-[100vw] bg-gray-100">

        <div className="flex   w-[100vw] relative py-10">
          <div className="ml-24">
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_ngzwzxib.json"  background="transparent"  speed="1"  style={{width: "500px", height: "500px"}}  loop  autoplay></lottie-player>
          </div>
          <div className="mx-44 my-28">
            <span className="text-5xl font-anim font-bold text-gray-700">Web Development</span>
            <ul className="relative left-20 mt-10">
              <li className="my-3 text-2xl font-sans text-gray-600 hover:scale-110 cursor-pointer transition ease-in-out hover:text-orange-600 hover:font-anim">React.js</li>
              <li className="my-3 text-2xl font-sans text-gray-600 hover:scale-110 cursor-pointer transition ease-in-out hover:text-orange-600 hover:font-anim">Node.js</li>
              <li className="my-3 text-2xl font-sans text-gray-600 hover:scale-110 cursor-pointer transition ease-in-out hover:text-orange-600 hover:font-anim">Tailwind.css</li>
              <li className="my-3 text-2xl font-sans text-gray-600 hover:scale-110 cursor-pointer transition ease-in-out hover:text-orange-600 hover:font-anim">MERN Stack</li>
            </ul>
          </div>
        </div>

        <div className="flex relative py-10">
          <div className="mx-40 my-28 flex flex-col">
            <span className="text-5xl font-anim font-bold text-gray-700">Other Skills</span>
            <span className="hover:scale-110 cursor-pointer transition ease-in-out my-4 text-2xl font-sans text-gray-600 hover:text-orange-600 hover:font-anim">Data Science</span>
            <span className="w-[150px] h-1 bg-red-400 block"></span>
            <span className="hover:scale-110 cursor-pointer transition ease-in-out ml-10 my-4 text-2xl font-sans text-gray-600 hover:text-orange-600 hover:font-anim">Python</span>
            <span className="ml-10 w-[150px] h-1 bg-green-400 block"></span>
            <span className="hover:scale-110 cursor-pointer transition ease-in-out ml-20 my-4 text-2xl font-sans text-gray-600 hover:text-orange-600 hover:font-anim">C++</span>
            <span className="ml-20 w-[150px] h-1 bg-blue-400 block"></span>
          </div>
          <div className="ml-28">
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_fcfjwiyb.json"  background="transparent"  speed="1"  style={{width: "500px",height: "500px"}}  loop  autoplay></lottie-player>
          </div>
        </div>

        
        <div>
        </div>
        <div>
        </div>
      </div>
      
      <section className="w-[100vw] h-screen">
      <div className="relative">
              <h1 className="absolute font-anim -top-14 left-48  z-10  text-8xl  font-bold ">
                  Contact Me 
                </h1>

                <div className="relative left-10 container h-screen bg-gray-200 flex justify-center items-center  flex-wrap font-inter w-screen shadow-inner">
                  <div
                    className="card group relative w-[320px] h-[440px] shadow-2xl 
                      rounded-2xl m-7"
                  >
                    <div className="box group-hover:shadow-2xl absolute top-[20px] left-[20px] right-[20px] bottom-[20px] bg-gray-100 rounded-2xl flex items-center justify-center transition">
                      <div className="content-card text-center p-5">
                        <h1 className="absolute top-[-10px] right-[30px] text-[8em] text-gray-200 font-bold transition pointer-events-none">
                          01
                        </h1>
                        <h2 className="text-[1.8em] text-[#777] z-10 transition pointer-events-none mt-8">
                          Git Hub
                        </h2>
                        <p className="text-[1em] text-gray-400  z-10 transition">
                          Make sure to follow me on Git Hub
                        </p>
                        <a href="https://github.com/AbHaY108BiShT">Git Hub</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card relative w-[320px] h-[440px] shadow-2xl 
                      rounded-2xl m-7"
                  >
                    <div className="box absolute top-[20px] left-[20px] right-[20px] bottom-[20px] bg-gray-100 rounded-2xl flex items-center justify-center transition">
                      <div className="content-card text-center p-5">
                        <h1 className="absolute top-[-10px] right-[30px] text-[8em] text-gray-200 font-bold transition pointer-events-none">
                          02
                        </h1>
                        <h2 className="text-[1.8em] text-[#777] z-10 transition pointer-events-none mt-8">
                          Instagram
                        </h2>
                        <p className="text-[1em] text-gray-400  z-10 transition">
                          Make sure to follow me on Instagram
                        </p>
                        <a href="https://www.instagram.com/og_starlord/?hl=en">
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card relative w-[320px] h-[440px] shadow-2xl 
                      rounded-2xl m-7"
                  >
                    <div className="box absolute top-[20px] left-[20px] right-[20px] bottom-[20px] bg-gray-100 rounded-2xl flex items-center justify-center transition">
                      <div className="content-card text-center p-5">
                        <h1 className="absolute top-[-10px] right-[30px] text-[8em] text-gray-200 font-bold transition pointer-events-none">
                          03
                        </h1>
                        <h2 className="text-[1.8em] text-[#777] z-10 transition pointer-events-none mt-8">
                          LinkedIn
                        </h2>
                        <p className="text-[1em] text-gray-400  z-10 transition">
                          Make sure to follow me on LinkedIn
                        </p>
                        <a href="https://www.youtube.com/channel/UCugIZ91q6x0MpXSHB0W2InA">
                          Linkedin
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
      </section>
    </div>
     <Footer/>
      
     
    </>
  );
};
export default About;