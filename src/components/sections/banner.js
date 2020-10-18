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
								<h1 ref={this.element} className="text-xl md:text-2xl lg:text-3xl my-8 text-yellow-400 text-center uppercase tracking-widest banner-header ">{bannerHeading}</h1>
								<div className="font-black text-white text-2xl md:text-4xl lg:text-6xl text-center uppercase banner-subheading">{bannerInfo}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Banner



