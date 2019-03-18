import React, {Component} from 'react';
import NewsCard from './NewsCard';
import './news.css';
import '../loader.css'
import _ from 'lodash';
import ReactPaginate from 'react-paginate';


class News extends Component{
  constructor(props) {
    super(props)
    this.mounted = false;
    this.state = {
      news: [],
      currentPage: 0,
      mounted: false,
    }
  }
  
  handlePageClick = (data) => {
    const selected = data.selected;
    this.setState({currentPage: selected})
  }
  componentDidMount(){
     this.mounted = true;
     
     fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
      .then(responce => responce.json())  
      .then(responce => {if(this.mounted === true) this.setState({ news: responce.Data })})
      .catch(err => alert(err));
  }
  componentWillUnmount(){
    this.mounted = false;
  }
  render(){
  const { news } = this.state;
  const valueOfNews = 8;
  const sortedNews = _.chunk(news, valueOfNews);

  return(
    news.length > 1 ?
    <div className="newsPage">
      {sortedNews.length > 1 ? sortedNews[this.state.currentPage].map((coin,i) => <NewsCard key={i} coin={coin}/>) : null}
      <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={sortedNews.length}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active-pagination'}
         
        />
    </div> : <div className="lds-dual-ring"></div>
  )
}
}

export default News;