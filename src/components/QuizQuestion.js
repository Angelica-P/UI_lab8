import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class QuizQuestion extends Component {
	state = {
		answer: null
	}
	handleClick(selectAnswer, option, button) {
		let btns = ["btn1", "btn2", "btn3", "btn4"];
		for (let i = 0; i < btns.length; i++) {
			if (btns[i] !== button) {
				document.getElementById(btns[i]).className = document.getElementById(btns[i]).className.replace("btn-secondary", "btn-success");
			} else {
				document.getElementById(button).className = document.getElementById(button).className.replace("btn-success", "btn-secondary");
			}
		}
		selectAnswer(option);
	}
	render() {
		const questionData = this.props.questionData;
		const selectAnswer = this.props.selectAnswer;
		const images = require.context('../images', true);
		if (questionData === null) {
			return (
				<div>
					<h3>We can't find this question. Try reloading the page.</h3>
				</div>
			)
		} else {
			return (
				<Container>
					<h5>{ questionData.question }</h5>

					<img src={images('./' + questionData.image)} alt="" style={{width: '500 px', height: '400px', margin: '15px'}}/>

					<Button id="btn1" onClick={() => { this.handleClick(selectAnswer, questionData.option1, "btn1") }} className="text-left btn-success" value={questionData.option1} block><b>A</b> - { questionData.option1 }</Button>
					<Button id="btn2" onClick={() => { this.handleClick(selectAnswer, questionData.option2, "btn2") }} className="text-left btn-success" value={questionData.option2} block><b>B</b> - { questionData.option2 }</Button>
					<Button id="btn3" onClick={() => { this.handleClick(selectAnswer, questionData.option3, "btn3") }} className="text-left btn-success" value={questionData.option3} block><b>C</b> - { questionData.option3 }</Button>
					<Button id="btn4" onClick={() => { this.handleClick(selectAnswer, questionData.option4, "btn4") }} className="text-left btn-success" value={questionData.option4} block><b>D</b> - { questionData.option4 }</Button>
				</Container>
			)
		}
	}
}

export default QuizQuestion