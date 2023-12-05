// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    //  destinationsList: this.props.destinationsList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachDestination =>
      // eachDestination.name.includes(searchInput.toLowerCase()),
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-Search-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="search-container">
          <input
            className="search-input"
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>

        <ul className="cards-list">
          {searchResults.map(eachPlace => (
            <DestinationItem placeDetails={eachPlace} key={eachPlace.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
