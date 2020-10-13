import React, { Component } from 'react';
import Divider from '../divider'

class Contact extends Component {
	render() {
		const contactInfo = [
			{
				city: 'Kolkata',
				tagline: 'The city of Joy',
				desc: 'The original home to our founders, Kolkata was our first office and still acts as the headquarters.',
				mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3683.277630107008!2d88.411326!3d22.6061055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f72ab0f51f%3A0xca3b8b0e83e56264!2s17%2C%20Bangur%20Ave%2C%20Block%20B%2C%20Block%20D%2C%20Bangur%2C%20Lake%20Town%2C%20Kolkata%2C%20West%20Bengal%20700055!5e0!3m2!1sen!2sin!4v1590741520635!5m2!1sen!2sin',
				companyName: 'InfoSoft Global Pvt Ltd.',
				address: '17, Bangur Ave',
				address2: 'Block D, Bangur',
				address3: 'Lake Town,',
				state: 'West Bengal',
				country: 'India',
				pin: '700055'
			},

			{
				city: 'Bengaluru',
				tagline: 'Our very own Silicon Valley',
				desc: 'Located in the heart of Koramangala, and surrounded by big companies, great talent, and like-minded startups.',
				mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.574604065726!2d77.61183801482157!3d12.935040190879896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e057cb567%3A0x84d4b41d41036107!2sInnov8%20Coworking%20Koramangala!5e0!3m2!1sen!2sin!4v1592934001298!5m2!1sen!2sin',
				companyName: 'InfoSoft Global Pvt Ltd.',
				address: 'Innov8 Coworking Koramangala',
				address2: 'Opposite to State bank of India, Koramangala Industrial Layout,',
				address3: 'No 3, 20th Main Rd, 7th Block, Koramangala',
				state: 'Karnataka',
				country: 'India',
				pin: '560034'
			}
		];
		return (
				<div className="bg-white" id="contact-us">
					<div className="container mx-auto px-8 md:px-16 py-16">
						<h2 className="text-center text-4xl font-medium text-gray-800">Contact Us</h2>
						<Divider />
						<h3 className="text-center text-xl font-medium text-gray-800 py-3">Looking to visit us?</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-8 max-w-screen-lg mx-auto">
							{contactInfo.map((value, index) => {
								return  <div className="text-gray-700 bg-white border border-gray-200 rounded shadow-md p-10 py-6 transition duration-500 ease-in-out transform hover:-translate-y-2" key={index}>
											<h3 className="mb-2 text-lg"><span className="font-semibold">{value.city} </span> <span className="text-gray-600"> - {value.tagline}</span></h3>
											<p className="text-sm mb-4">{value.desc}</p>
											<iframe
												src={value.mapUrl}
												width="100%"
												height="150"
												frameBorder="0"
												allowFullScreen
												title="Office Location"
											/>
											<address className="not-italic" itemScope="" itemType="http://schema.org/Organization">
												<h3 className="my-4 font-semibold" itemProp="name">{value.companyName}</h3>
												<div itemProp="address" className="text-sm"
													itemScope=""
													itemType="http://schema.org/PostalAddress"
												>
													<div itemProp="streetAddress">
														{value.address}
													</div>
													<div itemProp="addressLocality">
														{value.address2} <br />
														{value.address3}
													</div>
													<div itemProp="addressRegion">
														{value.city}
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
						<h3 className="text-center text-xl font-medium text-gray-800 py-3">Write to us at</h3>
						<p className="text-center"><a className=" text-2xl text-indigo-600 hover:text-indigo-500" href="mailto:hello@infosoftglobal.com">hello@infosoftglobal.com</a></p>
					</div>
				</div>
		)
	}
}



export default Contact
