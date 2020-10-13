import React from 'react'
import Divider from '../divider'
import fusionchartslogo from "../../images/fusioncharts.svg";
import chartscomlogo from "../../images/chartscom.svg";
import collabionlogo from "../../images/collabion.svg";
import oomfologo from "../../images/oomfo.svg";

const products = [
	{
		name: 'FusionCharts XT',
		logo: 'fusioncharts',
		content: 'FusionCharts is a data visualization library in JavaScript for use in web and enterprise applications. It offers over 100+ charts and 2000+ maps, which work across desktop and mobile. It was first released in 2002 and since then has been used by over 1.8 Million users and 28,000+ customers in 118 countries. This software division was sold to Idera Corp in March 2020.',
		c2aLabel: 'Explore FusionCharts',
		c2aLink: 'https://www.fusioncharts.com/'
	},
	{
		name: 'Charts.com',
		logo: 'chartscom',
		content: 'Charts.com is currently in early stages of development at InfoSoft Global. Here, we intend to offer visual analytics tools for business users. Currently, Charts.com offers 2 products: <a href="https://muzejs.org" target="_blank" rel="noopener" class="underline text-indigo-600 hover:text-indigo-500">Muze</a> (a visual analytics data visualization library like Tableau Software) and <a href="http://explore.charts.com" target="_blank" rel="noopener" class="underline text-indigo-600 hover:text-indigo-500">Explore</a> (a free tool for analyzing spreadsheet data visually).',
		c2aLabel: 'Explore Charts.com',
		c2aLink: 'https://charts.com/'
	},
	{
		name: 'Collabion',
		logo: 'collabion',
		content: 'Collabion is a dashboard tool for Microsoft SharePoint. It allows business users to visually create charts, grids and filters from their data stored in SharePoint lists, Excel files, databases and more. It comes with a WYSIWYG editor which makes it very easy for any business user to learn. It is currently deployed across 400 enterprise organizations, including the likes of Airbus, World Bank etc.',
		c2aLabel: 'Explore Collabion',
		c2aLink: 'https://www.collabion.com/'
	},
	{
		name: 'oomfo',
		logo: 'oomfo',
		content: 'oomfo is a free PowerPoint add-in to create interactive and animated charts within Microsoft PowerPoint. It offers a wide variety of chart types (including ones that PowerPoint doesn’t offer), deep customization options, smart interactivity and delightful animations. It smartly connects to live Excel and cloud data, without the need to update presentations manually when data changes. It has been downloaded and used by over 200,000 users worldwide.',
		c2aLabel: 'Explore oomfo',
		c2aLink: 'http://oomfo.com/'
	}
];
function softwareList() {
	return (
			<div className="bg-gray-100" id="business-units">
				<div className="container mx-auto px-8 md:px-16 py-16 relative z-10">
					<h2 className="text-center text-4xl font-medium text-gray-800">Business Units</h2>
					<p  className="text-center mb-8">At InfoSoft Global, we've 2 primary business units</p>
					<Divider  type="twoDots"/>
					<h2 className="text-center text-2xl font-medium text-gray-800 mt-6">Software Ventures</h2>
					<p  className="text-center mb-12 mx-auto max-w-lg">We've incubated and scaled multiple software ventures, of which some of the notable ones are below</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-screen-lg mx-auto">
						{products.map((value, index) => {
							return <div className="text-gray-700 bg-white border border-gray-200 rounded shadow-lg py-8 px-8  transition duration-500 ease-in-out transform hover:-translate-y-2 flex flex-col items-center content-around"  key={index}>
									{value.logo === 'fusioncharts' ? (
										<span className="bg-gray-200 text-gray-500 text-xs px-2 py-0 rounded-full absolute badge">Acquired</span>
									): ''}
									{value.logo === 'fusioncharts' ? (
										<div className="img-wrapper"><img className="mx-auto" src={fusionchartslogo} alt={value.name}/></div>
									): ''}
									{value.logo === 'chartscom' ? (
										<div className="img-wrapper"><img className="mx-auto" src={chartscomlogo} alt={value.name}/></div>
									): ''}
									{value.logo === 'collabion' ? (
										<div className="img-wrapper"><img className="mx-auto" src={collabionlogo} alt={value.name}/></div>
									): ''}
									{value.logo === 'oomfo' ? (
										<div className="img-wrapper"><img className="mx-auto" src={oomfologo} alt={value.name}/></div>
									): ''}
								{/* <p className="pt-3  pb-8 text-left">{value.content}</p> */}
								<div className="htmlContainer text-sm my-6" dangerouslySetInnerHTML={{ __html: value.content }}/>
								<div className="flex"><a className="btn btn-orange text-white py-3 px-6 rounded cursor-pointer hover:shadow-md" href={value.c2aLink} rel="noopener noreferrer" target="_blank">{value.c2aLabel}</a></div>
							</div>
						})}
					</div>
					<Divider />
					<h2 className="text-center text-2xl font-medium text-gray-800 my-6">Investments</h2>
					<p  className="text-center mx-auto max-w-lg">We invest in various asset categories including Public Market, Debt Financing Products (ICDs, Venture Debt), Angel investments and Real-estate (both commercial and residential). We’ve invested in over 30 startups across B2B and B2C, in India and the US.</p>
				</div>
			</div>
	)
}

export default softwareList
