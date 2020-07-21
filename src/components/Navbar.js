import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MyNavbar = () => {
	return (
		<Navbar>
			<Navbar.Brand href="" className="brand-logo">In My Backyard</Navbar.Brand>
				<Nav className="mr-auto navbar">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/directory">Directory</Nav.Link>
					<Nav.Link href="/quizzes">Quizzes</Nav.Link>
					<Nav.Link href="/about">About</Nav.Link>
				</Nav>
		</Navbar>
	)
}

export default MyNavbar