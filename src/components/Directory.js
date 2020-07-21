import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import SearchEntry from './SearchEntry'
import data from '../directoryData.json'

//const data = require('../directoryData.json');

class Directory extends Component {
	state = {
		organisms: data
	}
	handleNameSearch(name) {
		let temp = data.filter(org => {
			return org.name.indexOf(name) !== -1; //change to in name
		});
		let empty = temp.length == 0;
		this.setState({
			organisms: temp
		})
	}
	handleAnimalSearch(type, colour, size) {
		let temp = data.filter(org => {
			return ((org.subtype == type) && (org.colour == colour) && (org.size == size));
		});
		this.setState({
			organisms: temp
		})
	}
	handlePlantSearch(number, colour, size, type) {
		console.log(number, colour, size, type);
		let temp = data.filter(org => {
			return((org.num_flowers == number) && (org.colour_flowers == colour) && (org.size_flowers == size) &&(org.leaves == type));
		});
		this.setState({
			organisms: temp
		})
	}
	clearSearch = () => {
		this.setState({
			organisms: data
		})
	}
	handleSubmit(e) {
		e.preventDefault();
	}
	render() {
	return (
		<div className="container">
			<h4 className="left">Search the Directory</h4>
			<Form onSubmit={ this.handleSubmit }>
				<Form.Group>
					<Form.Label forHtml="name">Search for an organism's name:</Form.Label>
					<Form.Control type='text' placeholder="Search" className="mr-sm-2" id="name"/>
					<Button className="btn-success" onClick={ () => {this.handleNameSearch(document.getElementById("name").value)} }>Search</Button>
				</Form.Group>

				<h4>OR</h4>

				<h6>Apply Filters:</h6>
				<Accordion>
					<Card>
						<Accordion.Toggle as ={Card.Header} variant="link" eventKey='0'>
						Plant
						</Accordion.Toggle>
						<Accordion.Collapse eventKey='0'>
							<Card.Body>
								<Form.Group>
									<Form.Label forHtml="num_flowers">Number of Flowers:</Form.Label>
									<Form.Control as="select" id="num_flowers">
										<option value="0">None</option>
										<option value="1-5">less than 5</option>
										<option value="5-10">5-10</option>
										<option value="10+">more than 10</option>
									</Form.Control>

									<Form.Label forHtml="colour_flowers">Colour of Flowers:</Form.Label>
									<Form.Control as="select" id="colour_flowers">
										<option value="none">None</option>
										<option value="red">Red</option>
										<option value="orange">Orange</option>
										<option value="yellow">Yellow</option>
										<option value="green">Green</option>
										<option value="blue">Blue</option>
										<option value="purple">Purple</option>
										<option value="pink">Pink</option>
										<option value="brown">Brown</option>
										<option value="black">Black</option>
										<option value="grey">Grey</option>
										<option value="white">White</option>
									</Form.Control>

									<Form.Label forHtml="size_flowers">Size of Flowers:</Form.Label>
									<Form.Control as="select" id="size_flowers">
										<option value="none">None</option>
										<option value="small">Small</option>
										<option value="medium">Medium</option>
										<option value="large">Large</option>
									</Form.Control>

									<Form.Label forHtml="leaves">Type of Leaves:</Form.Label>
									<Form.Control as="select" id="leaves">
										<option value="needles">Needles</option>
										<option value="deciduous">Deciduous</option>
									</Form.Control>

									<Button  className="btn-success" onClick={ () => {this.handlePlantSearch(document.getElementById("num_flowers").value,
									 document.getElementById("colour_flowers").value, document.getElementById("size_flowers").value,
									  document.getElementById("leaves").value)} }>Apply Filters</Button>
								</Form.Group>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Accordion.Toggle as ={Card.Header} variant="link" eventKey='1'>
						Animal
						</Accordion.Toggle>
						<Accordion.Collapse eventKey='1'>
							<Card.Body>
								<Form.Group>
									<Form.Label forHtml="type_animal">Type of Animal:</Form.Label>
									<Form.Control as="select" id="type_animal">
										<option value="bird">Bird</option>
										<option value="fish">Fish</option>
										<option value="insect">Insect</option>
										<option value="mammal">Mammal</option>
										<option value="mammal">Amphibian</option>
									</Form.Control>

									<Form.Label forHtml="colour_animal">Colour of Animal:</Form.Label>
									<Form.Control as="select" id="colour_animal">
										<option value="red">Red</option>
										<option value="orange">Orange</option>
										<option value="yellow">Yellow</option>
										<option value="green">Green</option>
										<option value="blue">Blue</option>
										<option value="purple">Purple</option>
										<option value="pink">Pink</option>
										<option value="brown">Brown</option>
										<option value="black">Black</option>
										<option value="grey">Grey</option>
										<option value="white">White</option>
									</Form.Control>

									<Form.Label forHtml="size_animal">Size of Animal:</Form.Label>
									<Form.Control as="select" id="size_animal">
										<option value="small">Small</option>
										<option value="medium">Medium</option>
										<option value="large">Large</option>
									</Form.Control>

									<Button  className="btn-success" onClick={ () => {this.handleAnimalSearch(document.getElementById("type_animal").value,
									 document.getElementById("colour_animal").value, document.getElementById("size_animal").value)} }>Apply Filters</Button>
								</Form.Group>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Form>

			<Row className="results d-flex justify-content-between">
			<h3>Results</h3>
			<Button className="btn-success" onClick={ this.clearSearch }>Clear Search</Button>
			</Row>

			<SearchEntry organisms={this.state.organisms}/>

			<h5>{ (this.state.organisms.length == 0 ? "Sorry. It looks like that search had no results." : null) }</h5>
		</div>
	)
}
}

export default Directory