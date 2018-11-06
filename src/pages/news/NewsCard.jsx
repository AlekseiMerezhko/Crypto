import React from 'react';



const NewsCard = ({ coin }) => (
  <div className="news-card">
    
      <h4><a href={coin.url}> {coin.title} </a></h4>
      <p>Categories: <span>{coin.categories}</span></p>
      <div className="newsBody">
        {<img src={coin.source_info.img} alt={coin.title} />}
        <p>{coin.body}</p>
      </div>
    
  </div>
);


export default NewsCard;