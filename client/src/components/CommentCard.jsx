import React, { Component } from 'react'
import '../screens/CommentBoard'
import axios from 'axios'
import {BASE_URL} from '../globals'

export default class CommentCard extends Component {

  deleteComment = async () => {
   console.log('firing') 
   try{
      const res = await axios.delete(`${BASE_URL}/comment/delete/${this.props.commentId}`)   
      console.log(res.data)

    }catch (error) {
      throw error
    }
  }


  render() {
    const {name, comment, image} = this.props 
    console.log(this.props)

    return (
      <div className="commentCard">
        <h3>{name}</h3>
        <p>{comment}</p>
        <img src={image} alt="gif"className="suitIcon"></img>
        <br/>
        <br/>
        <button 
          onClick={()=> this.deleteComment()}
          className="delete-btn">delete        
        </button>

      </div>
    )
  }
}