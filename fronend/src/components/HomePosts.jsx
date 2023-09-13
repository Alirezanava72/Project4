const HomePosts = ({news}) => {
    return (
      <div className="w-full flex mt-8 space-x-5">

        <div className="w-[35%] h-[200px] flex justify-center item-center">
            <img src= {news.photo} alt="" className="h-full w-full object-cover"/>
        </div>
        <div className="flex flex-col w-[65%]">
            <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            {news.title}
                </h1>
            <div className="flex mb-2 text-sm font-semibold text-grey-500 item-center justify-between md:mb-4">
                <p>@{news.username}</p>
                <div className="flex space-x-2">
                    <p className="mt-8">{new Date(news.updatedAt).toString().slice(0,15)}</p>
                    
                    <p className="mt-8">{new Date(news.updatedAt).toString().slice(15,21)}</p>
                </div>
            </div>
            <p className="text-sm md:text-lg">{news.description.slice(0,290)+" ...Read more"}</p>
        </div>
      </div>
    )
  }
  
  export default HomePosts;