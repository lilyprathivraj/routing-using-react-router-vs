import {Component} from 'react'
import BlogItem from '../BlogItem'
import ClipLoader from "react-spinners/ClipLoader";

import './index.css'

class BlogsList extends Component {
  state = {
    blogsData: [],
    isLoading: true,
  }

  componentDidMount(){
    this.getBlogsData()
  }

  getBlogsData= async () => {
    const response = await fetch("https://apis.ccbp.in/blogs")
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id:eachItem.id,
      title:eachItem.title,
      imageUrl:eachItem.image_url,
      avatarUrl:eachItem.avatar_url,
      author:eachItem.author,
      topic:eachItem.topic,
    }))
    this.setState({
      blogsData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="blog-list-container">{
        isLoading?<ClipLoader height={50} width={50} color="green" />:blogsData.map(item => (
          <BlogItem blogData={item} key={item.id} />
        ))
      }</div>
    )
  }
}

export default BlogsList
