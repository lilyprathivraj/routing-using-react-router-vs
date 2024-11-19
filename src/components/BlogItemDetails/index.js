import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component{
  state = {
    blogData: {},
    isLoading: true,
  }
  componentDidMount(){
    this.getBlogItemData()
  }
  getBlogItemData = async () => {
    const response = await fetch("https://apis.ccbp.in/blogs/1")
    const data = await response.json()
    const updatedData = {
      id:data.id,
      title:data.title,
      imageUrl:data.image_url,
      avatarUrl:data.avatar_url,
      author:data.author,
      topic:data.topic,
    }
    this.setState({
      blogData: updatedData,
      isLoading: false,
    })
  }
  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const { title, imageUrl, content, avatarUrl, author} = blogData
    return (
        <div className="blog-info">
          <h2 className="blog-details-title">{title}</h2>

          <div className="author-details">
            <img className="author-pic" src={avatarUrl} alt={author} />
            <p className="details-author-name">{author}</p>
          </div>

          <img className="blog-image" src={imageUrl} alt={title} />
          <p className="blog-content">{content}</p>
        </div>
    )
  }

  render(){
    console.log(this.props)
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails