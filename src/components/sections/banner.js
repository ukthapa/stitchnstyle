import React, { Component } from 'react'
import bannerIllustrator from "../../images/banner-illustration.svg";

class Banner extends Component {

	componentDidMount() {
		if (typeof window !== "undefined") {
		window.addEventListener("scroll", this.toggleBodyClass);
		this.toggleBodyClass();
		}
	  }

	  componentWillUnmount() {
		if (typeof window !== "undefined"){
			window.removeEventListener("scroll", this.toggleBodyClass);
		}
	  }

	  toggleBodyClass = () => {
		if (window.scrollY < 40) {
		  document.body.classList.remove("stickyHeader");
		} else {
		  document.body.classList.add("stickyHeader");
		}
	};


	render() {
		const bannerHeading = "Welcome to <span class='block sm:inline font-semibold sm:font-medium'>InfoSoft Global</span>"
		const bannerInfo = "<p class='my-2'>InfoSoft Global is a privately owned business incorporated in 2005.</p> <p>Our journey started as a software product company with FusionCharts as our first product that received global acclaim among 28,000 customers.</p> <p class='my-2'>Since then, we've created multiple software ventures, diversified into investments, and have been growing and evolving every day.</p>"
		return (
			<div className="banner py-8 md:py-16" >
				<div className="container mx-auto px-8 md:px-16 pt-8 pb-16 md:py-16 ">
					<div className="flex flex-col md:flex-row justify-center items-center">
						<div className="max-w-2xl  md:mr-10">
							<h1 ref={this.element} className="text-3xl lg:text-4xl my-8 text-gray-800" dangerouslySetInnerHTML={{ __html: bannerHeading }}/>
							<div className="text-gray-700" dangerouslySetInnerHTML={{ __html: bannerInfo }}/>
						</div>
						<div className="flex-grow mt-8"><img className="mx-auto mb-4" src={bannerIllustrator} alt=""/></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Banner



