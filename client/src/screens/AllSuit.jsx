import React, { Component } from 'react'
import axios from 'axios'
import SuitCard from '../components/SuitCard'
import { BASE_URL } from '../globals'

export default class ShowsHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSuits: []
    }
  }

  componentDidMount() {
    this.getAllSuits()
  }

  getAllSuits = async() => {
    try {
    const res = await axios.get(`${BASE_URL}/api/suit`)
    this.setState({ allSuits: res.data.suits})
  } catch (error) {
    throw error
  }
}

render() {

  return(
    <div className="container">
      <h1 className="header">MOBILE SUITS</h1>
        <div className="seriesbox">
          {this.state.allSuits.map((result, index) =>
          <SuitCard
            key={result._id}
            model={result.model}
            mediaUrl={result.media_url}
            onClick={()=> this.props.history.push(`/suit/${result._id}`)}
            suitId={result._id}
          />
        )}
        </div>
    </div>
  )
}
}