import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a> 
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems
