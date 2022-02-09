import React,{useEffect, useState} from 'react';
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from "./Spinner"

const News = (props) => {

    const [artEle, setartEle] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResultsele, settotalResultsele] = useState(0)

  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const updateNews = async ()=>{
    props.setProgress(10);
    const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(70)
    setartEle(parsedData.articles)
    settotalResultsele(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)  
  }

  useEffect(() =>{
    document.title = `${capitalizeFirstLetter(props.category)} - Times`;
    updateNews()
    // eslint-disable-next-line
  },[])

  const fetchMoreData = async () =>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)
    let data = await fetch(url)
    let parsedData = await data.json()
    setartEle(artEle.concat(parsedData.articles))
    settotalResultsele(parsedData.totalResults)
  }

  return (
    <>
        <h1 className="my-10 text-4xl font-serif text-center">{capitalizeFirstLetter(props.category)} - Times</h1>
        {loading && <Spinner/>}


        <InfiniteScroll dataLength={artEle.length} next={fetchMoreData}
        hasMore={artEle.length !== totalResultsele} loader={<Spinner/>}
        >
          <div className="flex flex-wrap justify-center">
            {artEle.map((article)=>{
              return <NewsItem title={article.title ? article.title : ""} description={article.description ? article.description :""}
                    author = {article.author}
                    imgUrl = {article.urlToImage ? article.urlToImage :"https://images.livemint.com/img/2022/02/08/600x338/Vedanta_1644326076704_1644326076898.jpg"}
                    articleUrl={article.url}
                    date = {article.publishedAt}>
                    </NewsItem> 
            })}
          </div>
        </InfiniteScroll>
    </>
  )
};
export default News;