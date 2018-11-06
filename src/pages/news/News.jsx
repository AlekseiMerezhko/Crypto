import React, {Component} from 'react';
import NewsCard from './NewsCard';
import './news.css';

class News extends Component{
  state = {
    news: []
  }
  componentDidMount(){
    this.setState({news: this.props.news})
  }
  render(){
  const { news } = this.state;
  return(
    <div className="newsPage">
      {news.map((coin,i) => <NewsCard key={i} coin={coin}/>)}
    </div>
  )
}
}

export default News;