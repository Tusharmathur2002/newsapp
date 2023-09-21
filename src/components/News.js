import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    render() {
        return (
            <div className='Container'>
                <h2>Top Headlines</h2>
                <div className='row'>
                <div className='col-md-3'>
                <NewsItems title="myTitle" description="Mydesc"/>
                </div>
                <div className='col-md-3'>
                <NewsItems title="myTitle" description="Mydesc"/>
                </div><div className='col-md-3'>
                <NewsItems title="myTitle" description="Mydesc"/>
                </div>
                </div>
            </div>
        )
    }
}

export default News
