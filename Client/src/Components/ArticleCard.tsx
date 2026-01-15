
export const ArticleCard = (articleProps: any, userProps:any) => {
  return (
    <div key={articleProps._id} className="flex flex-col">
      <div> { articleProps._id && userProps._id ? (
        <>
          <img src={articleProps.picture}/>
          <h3>{userProps.name}</h3>
          <h3>{articleProps.name}</h3>
          <h3>{articleProps.productType}</h3>
          <h3>{articleProps.price}</h3>
          
        </>
      ) : ""
      }  
      </div>
    </div>
  )
}