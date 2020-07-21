import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import forest from '../images/walking_in_the_forest.jpg'
import river from '../images/st_lawrence.jpg'
import pond from '../images/pond.jpg'

const Home = () => {
	return (
		<div>
			<div className="d-flex flex-wrap flex-column align-content-around justify-content-center"
		      style={{
		         backgroundImage: `url(${pond})`,
		         backgroundRepeat: 'no-repeat', 
		         backgroundPosition: 'center', 
		         backgroundSize: 'cover', 
		         backgroundAttachment: 'fixed', 
		         height: '600px',
		         color: 'white'
		      }}>
			<h1 className="text-center display-1">In My Backyard</h1>
			</div>

			<Container>
			<h3 className="text-left">Featured: Monarch Butterfly</h3>
			<div class="embed-responsive embed-responsive-16by9">
			<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Rko78QktS9A"> </iframe>
			</div>

			<h5 className="text-left">Previously:</h5>
			<Row>
				<Col>
					<div class="embed-responsive embed-responsive-16by9">
					<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1zRGzlWqce4"></iframe>
					</div>
					<p>Polar Bear</p>
				</Col>
				<Col>
					<div class="embed-responsive embed-responsive-16by9">
					<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/dgwQ1DHepOw"></iframe>
					</div>
					<p>Poison Ivy</p>
				</Col>
				<Col>
					<div class="embed-responsive embed-responsive-16by9">
					<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8iEwRF_dLo0"></iframe>
					</div>
					<p>Apple Trees</p>
				</Col>
				<Col>
					<div class="embed-responsive embed-responsive-16by9">
					<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/N1f2ma3ijfE"></iframe>
					</div>
					<p>Leopard Frog</p>
				</Col>
				<Col>
					<div class="embed-responsive embed-responsive-16by9">
					<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/59_wBH2hSBQ"></iframe>
					</div>
					<p>Moose</p>
				</Col>
			</Row>
			</Container>


			<div className="d-flex flex-wrap flex-column align-content-around justify-content-center"
		      style={{
		         backgroundImage: `url(${forest})`,
		         backgroundRepeat: 'no-repeat', 
		         backgroundPosition: 'center', 
		         backgroundSize: 'cover', 
		         backgroundAttachment: 'fixed', 
		         height: '600px',
		         color: 'white'
		      }}>

				<h2 className="display-2">Search the Directory</h2>
				<Button className="align-self-center btn-success" href="/directory">Go ></Button>
			</div>

			<div styles={{height: '50px'}}> .
			</div>

			<div className="d-flex flex-wrap flex-column align-content-around justify-content-center"
		      style={{
		         backgroundImage: `url(${river})`,
		         backgroundRepeat: 'no-repeat', 
		         backgroundPosition: 'center', 
		         backgroundSize: 'cover', 
		         backgroundAttachment: 'fixed', 
		         height: '600px',
		         color: 'white'
		      }}>
				<h2 className="text-center display-2">Do You Know Them All?</h2>
				<h4 className="text-center display-4">Test Yourself</h4>
				<Button href="/quizzes" className="align-self-center btn-success">Start Quiz ></Button>
			</div>
		</div>
	)
}

export default Home