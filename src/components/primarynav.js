import React, { Component } from 'react';
import { Link } from "gatsby";
// import { AnchorLink } from "gatsby-plugin-anchor-links";
import CompanyLogo from "../images/stitch-style-logo.png";

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

	componentDidMount() {
	if (typeof window !== "undefined") {
	window.addEventListener("scroll", this.toggleBodyClass);
	// this.toggleBodyClass();
	}
	}

	componentWillUnmount() {
	if (typeof window !== "undefined"){
		window.removeEventListener("scroll", this.toggleBodyClass);
	}
	}


	toggleBodyClass = () => {
		if (window.scrollY < 200) {
		  document.body.classList.remove("stickyHeader");
		} else {
		  document.body.classList.add("stickyHeader");
		}
	};

  render() {
	const navs = [
			{
				label: 'Home',
				link: '/'
			},
			{
				label: 'Services',
				link: '/services'
			},
			{
				label: 'Showcase',
				link: '/showcase'
			},
			{
				label: 'About Us',
				link: '/about-us'
			},
			{
				label: 'Contact us',
				link: '/contact-us'
			}
		];
    return (
	<div className="flex justify-between items-center">
		<Link to="/" className="relative  z-50 transition duration-500 ease-in-out  py-1 px-2 inline-block transform scale-75 md:scale-100">
			<img id="stitch-and-style-logo" className ="transition duration-500 ease-in-out transform scale-75 md:scale-150" src={CompanyLogo} alt="InfoSoft Global P. Ltd." width="35" height="43"/>
		</Link>



		<nav id="primaryNav" className= { this.state.condition ? "active" : "" }>
			<a href="https://wa.me/919831307971" className="link" target="_blank" rel="noreferrer"><i class="icon icon-whatsapp"></i><span className="sr-only">Whatsapp</span></a>
			<a href="tel:9831307971" className="link" rel="noreferrer"><i class="icon icon-phone"></i><span className="sr-only">9831307971</span></a>
			<div className="hamburger-menu" onClick={this.handleClick} onKeyDown={this.handleClick}>
				<div className="hamburger" ></div>
			</div>
			<ul className="shadow-2xl  absolute  right-0  block  justify-end  text-sm tracking-wide p-8 bg-white bg-opacity-95  mt-2   w-3/4  md:w-2/4  lg:w-1/4  h-screen ">
				{navs.map((value, index) => {
					return<li key={index} className="my-2 text-xl md:text-base"
					onClick={this.linkClick} onKeyDown={this.linkClick}>
						<Link
							to={value.link}
							partiallyActive={true}
							activeClassName="active"
						>{value.label}</Link>
						</li>
				})}
			</ul>
		</nav>
	</div>
    )
  }
}

export default primarynav
