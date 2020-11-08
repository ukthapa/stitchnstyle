import React, { Component } from 'react'
import AchievementOne from "../../images/achievement-1.svg";
import AchievementTwo from "../../images/achievement-2.svg";
import AchievementThree from "../../images/achievement-3.svg";



const achievementsList = [
	{
		img: 'achievement-1',
		head: 'Custome Tailoring',
		info: 'We provide all kinds of stitching jobs for ladies\' garments. Specialised in designer Blouses, Kurtis, Lehenga, Pajamas, Churidars, etc.'
	},
	{
		img: 'achievement-2',
		head: 'Alteration',
		info: 'We do all kinds alteration & repair work on your readymade garments and old dresses.'
	},
	{
		img: 'achievement-3',
		head: 'Fabric & Accessories',
		info: 'Wide range of fabric for Blouses and Kurtis. We too have verity of accessories like - buttons, latkans, applique, laces etc. to choose from.'
	}
];

class Achievements extends Component {
	// componentDidMount() {
	// 	const ele = document.querySelector("a[aria-current = 'Awards']");
	// 	this.eventListener(ele);
	// };
	// eventListener(ele) {
	// 	ele.addEventListener('click', this.scrollTOAwards);
	// };
	// scrollTOAwards(e) {
	// 	e.preventDefault();
	// 	const targetEle = document.querySelector("a[title = 'Awards']");
	// 	targetEle.click();

	// };

	render() {
	return (
			<div className="bg-white achievements">
				<div className="container mx-auto px-8 md:px-16 py-16 relative z-10 -mt-12">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-16">
						{achievementsList.map((value, index) => {
							return <div className="text-gray-700 bg-white border border-gray-200 rounded shadow-lg px-6 py-5 transition duration-500 ease-in-out transform hover:-translate-y-2" key={index}>
								{value.img === 'achievement-1' ? (
									<img className="mx-auto mb-4" src={AchievementOne} alt=""/>
								): ''}
								{value.img === 'achievement-2' ? (
									<img className="mx-auto mb-4" src={AchievementTwo} alt=""/>
								): ''}
								{value.img === 'achievement-3' ? (
									<img className="mx-auto mb-4" src={AchievementThree} alt=""/>
								): ''}
								{/* <p>{value.info}</p> */}
								<h2 className="font-semibold text-xl">{value.head}</h2>
								<div ref={this.element} className="htmlContainer text-sm" dangerouslySetInnerHTML={{ __html: value.info }}/>
							</div>
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default Achievements
