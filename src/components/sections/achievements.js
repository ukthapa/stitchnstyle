import React, { Component } from 'react'
import AchievementOne from "../../images/achievement-1.svg";
import AchievementTwo from "../../images/achievement-2.svg";
import AchievementThree from "../../images/achievement-3.svg";
import AchievementFour from "../../images/achievement-4.svg";



const achievementsList = [
	{
		img: 'achievement-1',
		info: 'Our products have been used by 2 Million users and 30,000 customers in 150+ countries, including over 85% of Fortune 500 companies.'
	},
	{
		img: 'achievement-2',
		info: 'We\'ve offices in Bangalore & Kolkata, where we\'ve had the honor of working with 600+ employees in our journey since inception.'
	},
	{
		img: 'achievement-3',
		info: 'We\'ve received multiple <a aria-current="Awards" class="underline text-indigo-600 hover:text-indigo-500" href="/#awards">awards</a> and coverage in <a href="https://www.forbesindia.com/article/30-under-30/pallav-nadhani-making-data-look-pretty/37209/1" target="_blank" rel="noreferrer noopener" class="underline text-indigo-600 hover:text-indigo-500">Forbes</a>, <a href="https://www.entrepreneur.com/article/295019" target="_blank" rel="noreferrer noopener" class="underline text-indigo-600 hover:text-indigo-500">Entrepreneur</a>, <a href="https://www.outlookbusiness.com/specials/entrepreneurs-under_30/fusioncharts-2333" target="_blank" rel="noreferrer noopener" class="underline text-indigo-600 hover:text-indigo-500">Business Outlook</a>, <a href="https://www.businesstoday.in/magazine/cover-story/best-advice-i-ever-got-fusioncharts-ceo-pallav-nadhani/story/187486.html" target="_blank" rel="noreferrer noopener" class="underline text-indigo-600 hover:text-indigo-500">Business Today</a>, <a href="http://www.marwar.com/the-accidental-entrepreneur/" target="_blank" rel="noreferrer noopener" class="underline text-indigo-600 hover:text-indigo-500">Marwar India</a>, ET etc.'
	},
	{
		img: 'achievement-4',
		info: 'We believe in sustainable growth and have been bootstrapped (customer funded) and profitable every year since our inception.'
	}
];

class Achievements extends Component {
	componentDidMount() {
		const ele = document.querySelector("a[aria-current = 'Awards']");
		this.eventListener(ele);
	};
	eventListener(ele) {
		ele.addEventListener('click', this.scrollTOAwards);
	};
	scrollTOAwards(e) {
		e.preventDefault();
		const targetEle = document.querySelector("a[title = 'Awards']");
		targetEle.click();

	};

	render() {
	return (
			<div className="bg-white achievements">
				<div className="container mx-auto px-8 md:px-16 py-16 relative z-10 -mt-12">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 -mt-16">
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
								{value.img === 'achievement-4' ? (
									<img className="mx-auto mb-4" src={AchievementFour} alt=""/>
								): ''}
								{/* <p>{value.info}</p> */}
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
