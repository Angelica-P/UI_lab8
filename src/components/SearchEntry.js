import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class SearchEntry extends Component {
	render() {
		//console.log(this.props);
		const organisms = this.props.organisms;

		const images = require.context('../images', true);
						
		return (
			<div className="d-flex flex-wrap">
				{organisms.map(organism => { return (
					<div className="searchResult">
						<img src={images('./' + organism.image)} alt="" className="resultImage" style={{width: '250px', height: '200px'}}/>
						<h4>{(organism.name.split(" ").map( name => {
								//capitalize the name
								return name[0].toUpperCase().concat("", name.slice(1, name.length))
							}) ).join(" ")}</h4> 
						<Button className="btn-success" href={'/'+organism.id}>View</Button>
					</div>
				)})}
			</div>
		)
	}
}

export default SearchEntry