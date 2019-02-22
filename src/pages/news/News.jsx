import React, {Component} from 'react';
import NewsCard from './NewsCard';
import './news.css';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';


class News extends Component{
  state = {
    news: [],
    currentPage: 0
  }
  handlePageClick = (data) => {
    const selected = data.selected;
    this.setState({currentPage: selected})
    console.log(data);
    console.log(this.state)
  }
  componentDidMount(){
    this.setState({news: this.props.news})
  }
  render(){
  const { news } = this.state;
  const valueOfNews = 8;
  const sortedNews = _.chunk(news, valueOfNews);
  console.log(sortedNews);

  return(
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
    </div>
  )
}
}

export default News;