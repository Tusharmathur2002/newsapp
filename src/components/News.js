import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }
    async componentDidMount() {
        // fetching data from the API
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=58ff87b9591c471bae09bc72398fced0&page=1&pageSize=20";
        let data = await fetch(url);
        //json coverted to parsed data
        let parsedData = await data.json()
        console.log(parsedData);
        //now the getting data from the API is equal to articles so that on changing API the component data will also changed
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }
    //for the next and prev. page
    handleprevclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=58ff87b9591c471bae09bc72398fced0&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handlenextclick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=58ff87b9591c471bae09bc72398fced0&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2 className='text-center'>Top Headlines</h2>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-3' key={element.url}>
                            {/* here we are using ternary operator so that if value is null it can return default */}
                            <NewsItems title={element ? element.title.slice(0, 26) : ""}
                                description={element ? element.description : ""}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr; previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
