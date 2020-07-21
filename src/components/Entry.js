import React, { Component } from 'react'
import data from '../directoryData.json'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

class Entry extends Component {
	state = {
		id: null,
		organism: null
	}
	componentDidMount() {
		//console.log(this.props);
		let id = this.props.match.params.entry;
		let org = data.filter(org => {
			console.log("filter");
			console.log(org, org.id == id);
			return org.id == id;
		});
		//console.log(org[0]);
		this.setState({
			id: id,
			organism: org[0]
		});
		//console.log(this.state);
	}
	render() {
		console.log(this.state);

		const images = require.context('../images', true);

		if (this.state.id !== 'about' && this.state.id !== 'directory' 
			&& this.state.id !== 'quizzes') {
			if (this.state.organism !== undefined && this.state.organism !== null && this.state.organism.type == "animal") {
				return (
				<div className="container">
					<Button className="btn-success" href="/directory">Back to Search</Button>
					<div className="displayedEntry">
						<Row>
							<Col>
								<img src={images('./' + this.state.organism.image)} alt="" className="resultImage" style={{width: '500px'}}/>
							</Col>
							<Col>
								<h3>{(this.state.organism.name.split(" ").map( name => {
									return name[0].toUpperCase().concat("", name.slice(1, name.length))
								}) ).join(" ")}</h3>
								<h5>Category: {this.state.organism.subtype}</h5>
								<h5>Colour: {this.state.organism.colour}</h5>
								<h5>Size: {this.state.organism.size} </h5>
							</Col>
						</Row>
						<Row>
							<p><span style={{fontSize: '2em'}}>{this.state.organism.article[0]}</span> {this.state.organism.article.slice(1, this.state.organism.article.length)}</p>
						</Row>
					</div>
				</div>
				)
			} else if (this.state.organism !== undefined && this.state.organism !== null) {
				return (
					<div className="container">
						<Button className="btn-success" href="/directory">Back to Search</Button>
						<div className="displayedEntry">
							<Row>
								<Col>
									<img src={images('./' + this.state.organism.image)} alt="" className="resultImage" style={{width: '500px'}}/>
								</Col>
								<Col>
									<h3>{(this.state.organism.name.split(" ").map( name => {
										return name[0].toUpperCase().concat("", name.slice(1, name.length))
									}) ).join(" ")}</h3>
									<h5>Leaves: {this.state.organism.leaves}</h5>
									<h5>Number of Flowers: {this.state.organism.num_flowers}</h5>
									<h5>Colour of Flowers: {this.state.organism.colour_flowers}</h5>
									<h5>Size of FLowers: {this.state.organism.size_flowers}</h5>
								</Col>
							</Row>
							<Row>
								<p><span style={{fontSize: '2em'}}>{this.state.organism.article[0]}</span> {this.state.organism.article.slice(1, this.state.organism.article.length)}</p>
							</Row>
						</div>
					</div>
				)
			} else {
				return (
					<div>
					<h2>Oops...</h2>
					<p>Looks like we can't find that page. Here's what may have happened:</p>
					<ul>
						<li>we moved the page</li>
						<li>we removed the page</li>
						<li>there's an error in the URL</li>
					</ul>
					<p>Try double checking the URL.</p>
					<p>Otherwise, head to our <Link to="/">home page</Link> and try finding the page from there.</p>
					</div>
				);
			}
		} else {
			return null;
		}
	}
}

export default Entry