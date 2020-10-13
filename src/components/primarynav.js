import React, { Component } from 'react';
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import CompanyLogo from "../images/igpl.svg";

class primarynav extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  condition: false
		}
		this.handleClick = this.handleClick.bind(this)
		this.linkClick = this.linkClick.bind(this)
	}

	handleClick() {
		this.setState(state => ({
			condition: !this.state.condition
		}));
	  }

	linkClick() {
		this.setState(state => ({
			condition: false
		}));
	  }

  render() {
	const navs = [
			{
				label: 'Business Units',
				link: 'business-units'
			},
			{
				label: 'Awards',
				link: 'awards'
			},
			{
				label: 'Directors',
				link: 'directors'
			},
			{
				label: 'Contact us',
				link: 'contact-us'
			}
		];
    return (
	<div className="flex justify-between items-center">
		<Link to="/" className="relative  z-50 transition duration-500 ease-in-out  bg-white py-1 px-2 rounded-full inline-block shadow-md transform scale-75 md:scale-100">
			<img className ="transition duration-500 ease-in-out transform scale-75 md:scale-100" src={CompanyLogo} alt="InfoSoft Global P. Ltd." width="35" height="43"/>
		</Link>



		<nav id="primaryNav" className="active absolute md:relative inset-0" className={ this.state.condition ? "active" : "" }>
			<div className="hamburger-menu md:hidden" onClick={this.handleClick}>
				<div className="hamburger" ></div>
			</div>
			<ul className="shadow-2xl md:shadow-none absolute md:relative right-0 md:right-auto block md:flex  md:flex-row justify-end md:space-x-10 text-sm tracking-wide p-8 md:p-0 bg-white bg-opacity-95 md:bg-transparent mt-10 md:mt-0  w-2/3 md:w-auto h-screen md:h-auto">
				{navs.map((value, index) => {
					return<li key={index} className="my-2 text-xl md:text-base"
					onClick={this.linkClick}>
						<AnchorLink
							to={"/#" + value.link}
							title={value.label}
							partiallyActive={true}
							stripHash
						/>
						</li>
				})}
			</ul>
		</nav>
	</div>
    )
  }
}

export default primarynav
