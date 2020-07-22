import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import data from '../aboutData.json'

class About extends Component {
	state = {
		language: "English",
		text: data[0]
	}
	handleChange = () => {
		let lang = document.getElementById("language");
		if (lang == null) {
			return;
		}
		let newText = null;
		for (let i = 0; i < data.length; i++) {
			if (data[i].language == lang.value) {
				newText = data[i];
			}
			//console.log(data[i].language, lang.value);
		}
		this.setState({
			language: lang.value,
			text: newText
		});
	}
	render() {
		return (
			<div className="container">
				<Row>
					<Col sm={10}>
						<h3 className="text-center">{ this.state.text.title }</h3>
					</Col>
					<Col sm={2}>
						<Form.Group onChange={ this.handleChange }>
						<Form.Label forHtml="language"><img src="https://img.icons8.com/material-outlined/24/000000/language.png"/>  { this.state.text.dropdown_title }</Form.Label>
							<Form.Control as="select" id="language">
								<option value="English">English</option>
								<option value="Norsk">Norsk</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>

				<p>{ this.state.text.para1 }</p>
				<br/>
				<br/>

				<h3>{ this.state.text.FAQ_title }</h3>

				<h4>{ this.state.text.q1_title }</h4>
				<p>{ this.state.text.q1_text }</p><br/>

				<h4>{ this.state.text.q2_title }</h4>
				<p>{ this.state.text.q2_text }</p><br/>

				<h4>{ this.state.text.q3_title }</h4>
				<p>{ this.state.text.q3_text }</p><br/>

				<h4>{ this.state.text.q4_title }</h4>
				<p>{ this.state.text.q4_text }</p><br/>

				<h4>{ this.state.text.q5_title }</h4>
				<p>{ this.state.text.q5_text }</p><br/>

			</div>
		);
	}
}

export default About