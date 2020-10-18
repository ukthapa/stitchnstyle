import React, { Component } from 'react';
import Divider from '../divider'

class Contact extends Component {
	render() {
		const contactInfo = [
			{
				city: 'Kolkata',
				tagline: 'The city of Joy',
				desc: 'The original home to our founders, Kolkata was our first office and still acts as the headquarters.',
				mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.8856577676565!2d88.38903051544938!3d22.69530008511983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dc91eded31f%3A0x193ea87097cf874b!2sStitch%20%26%20Style%20-%20Ladies%20Tailor!5e0!3m2!1sen!2sin!4v1602700110264!5m2!1sen!2sin"',
				companyName: 'Stitch & Style - Ladies Tailor',
				address: 'Sidharth Tower, Road No. 1,',
				address2: 'H.B. Town, Sodepur,',
				state: 'West Bengal',
				country: 'India',
				pin: '700110'
			}
		];
		return (
				<div className="bg-white" id="contact-us">
					<div className="container mx-auto px-8 md:px-16 py-16">
						<h2 className="text-center text-4xl font-medium text-gray-800">Contact Us</h2>
						<Divider />
						<h3 className="text-center text-xl font-medium text-gray-800 py-3">Looking to visit us?</h3>
						<div className="grid grid-cols-1  gap-16 py-8 max-w-screen-md mx-auto">
							{contactInfo.map((value, index) => {
								return  <div className="text-gray-700 bg-white border border-gray-200 rounded shadow-md p-10 py-6 transition duration-500 ease-in-out transform hover:-translate-y-2" key={index}>
											<h3 className="my-4 text-xl font-semibold" itemProp="name">{value.companyName}</h3>
											<iframe
												src={value.mapUrl}
												width="100%"
												height="200"
												frameBorder="0"
												allowFullScreen
												title="Office Location"
											/>
											<address className="not-italic mt-2" itemScope="" itemType="http://schema.org/Organization">

												<div itemProp="address" className="text-md"
													itemScope=""
													itemType="http://schema.org/PostalAddress"
												>
													<div itemProp="streetAddress">
														{value.address}
													</div>
													<div itemProp="addressLocality">
														{value.address2}
													</div>
													<div itemProp="addressRegion">
													    <span itemProp="city"> {value.city} </span>
														<span itemProp="postalCode"> - {value.pin}, </span>
														<span itemProp="addressState"> {value.state},</span>
                                       					<span itemProp="addressCountry"> {value.country}.</span>
													</div>
												</div>

											</address>
										</div>
							})}
						</div>
						<Divider />
						<h3 className="text-center text-xl font-medium text-gray-800 py-3">For Quick Contact</h3>
						<p className="text-center"><a className=" text-2xl text-indigo-600 hover:text-indigo-500" href="tel:9831307971">9831307971</a></p>
					</div>
				</div>
		)
	}
}



export default Contact
