import React, { Component } from 'react'
import bannerLogo from "../../images/stitch-style-logo.png";

class Banner extends Component {

	render() {
		const bannerHeading = "Ladies Tailoring & Boutique"
		const bannerInfo = "Tailor The Trend"
		return (
			<div className="banner py-8 md:py-16">
				<div className="container mx-auto px-3 md:px-16 pt-8 pb-16 md:py-16 ">
					<div className="flex flex-col justify-center items-center">
						<div className="flex-grow mt-8">
							<img className="banner-logo w-40 md:w-64 mb-4" src={bannerLogo} alt=""/>
							<div className="max-w-4xl">
								<h1 ref={this.element} className="sm:max-w-md lg:max-w-xl mx-auto text-lg md:text-2xl lg:text-3xl my-4 md:my-6  text-yellow-400 text-center uppercase tracking-widest banner-header ">{bannerHeading}</h1>
								<div className="font-black text-white text-3xl md:text-4xl lg:text-7xl xl:text-8xl text-center uppercase banner-subheading">{bannerInfo}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Banner



