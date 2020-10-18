import React, { Component } from 'react'
import bannerLogo from "../../images/stitch-style-logo.png";

class Banner extends Component {

	render() {
		const bannerHeading = "Ladies Tailoring & Boutique"
		const bannerInfo = "Tailor The Trend"
		return (
			<div className="banner py-8 md:py-16">
				<div className="container mx-auto px-8 md:px-16 pt-8 pb-16 md:py-16 ">
					<div className="flex flex-col justify-center items-center">
						<div className="flex-grow mt-8">
							<img className="banner-logo mb-4" src={bannerLogo} alt=""/>
							<div className="max-w-2xl  md:mr-10">
								<h1 ref={this.element} className="text-3xl lg:text-4xl my-8 text-gray-800 text-center uppercase" dangerouslySetInnerHTML={{ __html: bannerHeading }}/>
								<div className="text-gray-700 text-4xl lg:text-6xl text-center uppercase" dangerouslySetInnerHTML={{ __html: bannerInfo }}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Banner



