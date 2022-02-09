import React from 'react';
const Navbar = () => {

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date();
    const monthName = monthNames[d.getMonth()];
  return (
    <>
        <div>
            <div className="flex white space-x-96 relative">
                <div className="flex  space-x-3 text-xl mx-4 absolute bottom-5">
                    <a href="https://github.com/AbHaY108BiShT" target="_blank" rel="noreferrer" className="hover:scale-110 cursor-pointer transition ease-in-out hover:text-orange-600">
                        <i className="fab fa-github-alt"></i>
                    </a>
                    <a href="https://www.instagram.com/og_starlord/?hl=en" target="_blank" rel="noreferrer" className="hover:scale-110 cursor-pointer transition ease-in-out hover:text-orange-600">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCugIZ91q6x0MpXSHB0W2InA" target="_blank" rel="noreferrer" className="hover:scale-110 cursor-pointer transition ease-in-out hover:text-orange-600">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
                <div className="flex flex-col relative left-36">
                    <div className="flex">
                        <img className="w-14 mt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVN6yYONJ6MtE1FoYLRM_IhMqWdTMR0C986Q&usqp=CAU" alt="" />
                        <div className="mt-3">
                            <span className="text-4xl font-serif">The Indian</span><span className="text-4xl font-sans font-bold tracking-wide">Times</span>
                        </div>
                    </div>
                    <h1 className="ml-24 text-sm mb-3 text-gray-800">{monthName}, {date.split("-").reverse().join("-")}</h1>
                </div>
            </div>
            <div className="flex justify-center space-x-7 bg-slate-800 text-white py-2">
                <div className='transition ease-in-out hover:bg-gray-400 hover:text-gray-900 rounded-lg px-2 py-1 tracking-wide  hover:scale-110'>
                    <a href="/" >Home</a>
                </div>
                <div className='transition ease-in-out hover:bg-gray-400 hover:text-gray-900 rounded-lg px-2 py-1 tracking-wide  hover:scale-110'>
                    <a href="/business">Business</a>
                </div>
                <div className='transition ease-in-out hover:bg-gray-400 hover:text-gray-900 rounded-lg px-2 py-1 tracking-wide  hover:scale-110'>
                    <a href="/entertainment">Entertainment</a>
                </div>
                <div className='transition ease-in-out hover:bg-gray-400 hover:text-gray-900 rounded-lg px-2 py-1 tracking-wide  hover:scale-110'>
                    <a href="/general">General</a>
                </div>
                <div className='transition ease-in-out hover:bg-gray-400 hover:text-gray-900 rounded-lg px-2 py-1 tracking-wide  hover:scale-110'>
                    <a href="/health">Health</a>
                </div>
                <div className='transition ease-in-out hover:bg-gray-400 hover:text-gray-900 rounded-lg px-2 py-1 tracking-wide  hover:scale-110'>
                    <a href="/science">Science</a>
                </div>
                <div className='transition ease-in-out hover:bg-gray-400 hover:text-gray-900 rounded-lg px-2 py-1 tracking-wide  hover:scale-110'>
                    <a href="/sports">Sports</a>
                </div>
                <div className='transition ease-in-out hover:bg-gray-400 hover:text-gray-900 rounded-lg px-2 py-1 tracking-wide  hover:scale-110'>
                    <a href="/technology">Technology</a>
                </div>
                <div className='transition ease-in-out hover:bg-gray-400 hover:text-gray-900 rounded-lg px-2 py-1 tracking-wide  hover:scale-110'>
                    <a href="/about" >About</a>
                </div>
            </div>
        </div>
    </>
  )
};
export default Navbar;