import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import birds from '../images/birds_birds_birds.jpg'
import grass from '../images/the_grass_under_your_feet.jpg'
import fish from '../images/fish_of_the_st_lawrence.jpg'

const Quizzes = () => {
	return (
		<div className="container">
			<h4 className="center">Quizzes Page</h4>

			<Row>
				<Col>
					<Card>
						<Card.Img variant="top" src={birds} />
						<Card.Body>
							<Card.Title>Birds!Birds!Birds!</Card.Title>
							<Button className="btn-success" href="/quizzes/1">Start</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={grass} />
						<Card.Body>
							<Card.Title>The Grass Under Your Feet</Card.Title>
							<Button className="btn-success" href="/quizzes/2">Start</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant="top" src={fish} />
						<Card.Body>
							<Card.Title>Fishes of the St. Lawerance</Card.Title>
							<Button className="btn-success" href="/quizzes/1">Start</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default Quizzes