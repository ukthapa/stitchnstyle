import React from 'react';
import pallavImg from "../../images/pallav-nadhani.png";
import kishoreImg from "../../images/kishore-nadhani.png";

import twitter from "../../images/socials/twitter.svg";
import linkedin from "../../images/socials/linkedin.svg";



function founders() {

	const foundersList = [
		{
			name: 'Sabitri',
			// designation: 'CFO / Co-Founder',
			img: 'sabiImg',
			content: `<p>Pallav takes care of the software business vertical and startup investments at InfoSoft Global. </p>
			<p>He started FusionCharts at the age of 17 without any external funding and scaled to 28,000 customers in 118 countries, before selling to Idera Corp (USA). Pallav holds an MS in Computer Science from the University of Edinburgh, UK. He has co-authored multiple books, including one on combining the power of Flash and .NET called 'Flash.NET' in 2002 and has written several technical articles for international journals ever since. He was on the cover of Forbes 30 under 30 in 2014, among many other business journals.</p>
			<p>He loves traveling, poker and food.</p>`,
			// socials: [
			// 	{
			// 		socialname: 'LinkedIn',
			// 		socialLink: 'https://www.linkedin.com/in/pallavn/'
			// 	},
			// 	{
			// 		socialname: 'Twitter',
			// 		socialLink: 'https://twitter.com/pallavn'
			// 	}
			// ]
		},
		{
			name: 'Guljar',
			// designation: 'CFO / Co-Founder',
			img: 'guljarImg',
			content: `<p>Kisor takes care of public investments, debt and real-estate portfolio at InfoSoft Global. </p>
			<p>His 35 years of business experience spans across multiple domains including trading, construction and technology. Prior to InfoSoft Global, he was running another software product company providing accounting solutions to Enterprise customers. He has authored more than 15 books on accounting and other business applications, including a bestseller in India.</p>
			<p>He loves food, cricket and traveling.</p>`
		},
	];


	return (
			<div className="bg-gray-100" id="directors">
				<div className="container mx-auto px-8 md:px-16 py-16 relative z-10">
					<h2 className="text-center text-4xl font-medium text-gray-800 mb-8">Meet our Team</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
						{foundersList.map((value, index) => {
							return <div className="text-gray-700 text-center bg-white border border-gray-200 rounded shadow-lg p-8  transition duration-500 ease-in-out transform hover:-translate-y-2" key={index}>
								{value.img === 'pallavImg' ? (
									<img className='mx-auto mb-3 rounded-full shadow-xs' style={{width: '150px'}} src={pallavImg} alt={value.name}/>
									) : <img className='mx-auto mb-3 rounded-full shadow-xs' style={{width: '150px'}} src={kishoreImg} alt={value.name}/> }

								<h3 className="text-lg font-semibold">{value.name}</h3>
								<div className="htmlContainer text-sm" dangerouslySetInnerHTML={{ __html: value.content }}/>
								{value.socials ? (
										value.socials.map((socialItem, socialIndex) => {
											return <a className="inline-block shadow-lg text-gray-500 mx-2  rounded-full shadow-xs p-2 border border-gray-200" href={socialItem.socialLink} target="_blank"  rel="noopener noreferrer" key={socialItem.socialname}>
												{socialItem.socialname !== 'LinkedIn' ? (
												   <img className='mx-auto opacity-50 hover:opacity-25' style={{width: '20px'}} src={twitter} alt={socialItem.socialname}/>
												): <img className='mx-auto opacity-50 hover:opacity-25' style={{width: '20px'}} src={linkedin} alt={socialItem.socialname}/>}
											</a>
										})
								): "" }
							</div>
						})}
					</div>
				</div>
			</div>
	)
}

export default founders
