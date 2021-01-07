import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
	render() {
		return (
			<div class='dropdown'>
				<button class='dropbtn'>Menu</button>
				<div class='dropdown-content'>
					<a href='#'>Home</a>
					<a href='#'>Projects</a>
					<a href='#'>About Me</a>
					<a href='#'>Contact</a>
				</div>
			</div>
		);
	}
}

export default Header;
