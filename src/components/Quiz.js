import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import data from '../quizData.json'
import QuizQuestion from './QuizQuestion'

class Quiz extends Component {
	state = {
		id: null,
		data: null,
		questionIndex: 0,
		totalCorrect: 0,
		userAnswers: null,
		done: false
	}
	componentDidMount() {
		console.log(this.props);
		let id = this.props.match.params.quiz;
		let quizData = data.filter(quiz => {
			return quiz.id == id;
		})[0];
		console.log(quizData);
		let answers = [];
		if (quizData !== undefined) {
			for (var i = 0; i < quizData.questions.length; i++) {
				answers.push(null);
			}
		}
		this.setState({
			id: id,
			data: quizData,
			userAnswers: answers
		})
	}
	selectAnswer = (answer) => {
		//called by QuizQuestion when somebody clicks one of the answers
		//saves the user's answer in an array
		//when the user finishes the acutal answers and the user answers are compared
		let temp = this.state.userAnswers.filter(f =>{return true;});
		temp[this.state.questionIndex] = answer;
		this.setState({
			userAnswers:temp
		})
		console.log(answer, temp);
	}
	handleNextQuestion = () => {
		let temp = this.state.questionIndex;
		temp = temp + 1;
		if (temp >= this.state.data.questions.length) {
			document.getElementById("nextBtn").disabled = true;
			return;
		} else if (temp == this.state.data.questions.length - 1) {
			document.getElementById("nextBtn").disabled = true;
		}
		document.getElementById("prevBtn").disabled = false;

		this.setState({
			questionIndex: temp
		});
		this.setSelection(temp);
	}
	handlePreviousQuestion = () => {
		let temp = this.state.questionIndex;
		temp = temp - 1;
		if (temp < 0) {
			document.getElementById("prevBtn").disabled = true;
			return;
		} else if (temp == 0) {
			document.getElementById("prevBtn").disabled = true;
		}
		document.getElementById("nextBtn").disabled = false;

		this.setState({
			questionIndex: temp
		});
		this.setSelection(temp);
	}
	setSelection = (index) => {
		let btns = ["btn1", "btn2", "btn3", "btn4"];
		let questions = this.state.data.questions;
		let options = [questions[index].option1, questions[index].option2, questions[index].option3, questions[index].option4];

		if (this.state.userAnswers == null) {
			return;
		}

		console.log(index, options);

		for (let i = 0; i < btns.length; i++) {
			let btn = document.getElementById(btns[i]);
			if (this.state.userAnswers[index] !== options[i]) {
				btn.className = btn.className.replace("btn-secondary", "btn-success");
				//console.log("green");
			} else {
				btn.className = btn.className.replace("btn-success", "btn-secondary");
				//console.log("grey");
			}
		}
	}
	handleDone = () => {
		let correct = 0;
		for (var i = 0; i < this.state.userAnswers.length; i++) {
			if (this.state.userAnswers[i] === this.state.data.questions[i].answer) {
				correct++;
			}
		}
		this.setState({
			done: true,
			totalCorrect: correct
		})
	}
	render() {
		if (this.state.data === undefined) {
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
		if (this.state.done) {
			return (
				<Container>
					<h5>Quiz: {this.state.data !== null ?  this.state.data.name : this.state.id}</h5>

					<div className="quizBox">

						{this.state.totalCorrect/this.state.data.questions.length > 0.5 ? <h3>Congradulations!!!</h3> : <h3>Better luck next time.</h3>}
						<h5>Your Score: {this.state.totalCorrect}/{this.state.data.questions.length}</h5>

						<Button className="button btn-success" href="../quizzes">Try another Quiz</Button>
					</div>
				</Container>
			);
		}
		return (
			<Container>
				<h5>Quiz: {this.state.data !== null ?  this.state.data.name : this.state.id}</h5>

				<div className="quizBox">

					<h4>Question # {this.state.questionIndex + 1}/{ (this.state.data !== null && this.state.data !== undefined) ? this.state.data.questions.length : 0 }</h4>
					<QuizQuestion questionData={ this.state.data !== null ? this.state.data.questions[this.state.questionIndex] : null}
					selectAnswer={ this.selectAnswer }/>

					<Row className="d-flex justify-content-between">
						<Button className= "button btn-success" id="prevBtn" onClick={ this.handlePreviousQuestion }>Previous Question</Button>
						{(this.state.data !== null && this.state.data !== undefined && this.state.questionIndex == this.state.data.questions.length - 1) ?
							<Button className="btn-success" onClick={ this.handleDone }>Submit Quiz</Button> : null}
						<Button className= "button btn-success" id="nextBtn" onClick={ this.handleNextQuestion }>Next Question</Button>
						{this.state.questionIndex == 0 && document.getElementById("prevBtn") != null ? document.getElementById("prevBtn").disabled = true : null}
					</Row>
				</div>
			</Container>
		)
	}
}

export default Quiz