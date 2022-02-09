import React from 'react';

const NewsItem = (props) => {
  let {title ,author , imgUrl  , articleUrl , date} = props
  return (
      <>
      <div key={imgUrl} className="border border-gray-300 shadow-3xl w-1/4 mx-2 my-3 p-3 bg-blue-50 rounded-3xl relative">
          <img className="rounded-3xl w-full h-1/3" src={imgUrl?imgUrl:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"} alt="" />
          <div className="mt-2 pb-2 px-2">
              <a href={articleUrl} className="hover:text-blue-800 hover:underline  text-xl font-bold" target="_blank" rel="noreferrer">
                  {title.substr(0,75)}...
              </a>
              <hr className="border-gray-400 mt-3"/>
              <h1 >
                  {author ? author:"Abhay Bisht"} , <span>{date.substr(0,10)}</span>
              </h1>
          </div>
            <a href={articleUrl} className="absolute bottom-0 px-2 py-1 rounded-2xl transition ease-in-out delay-150 bg-blue-200 text-indigo-500 hover:-translate-y-1 hover:scale-110 hover:text-blue-200 
            hover:bg-indigo-500  duration-300 cursor-pointer left-28 mb-3" target="_blank" rel="noreferrer">
                Read More
            </a>
      </div>
      </>
  )
};

export default NewsItem;