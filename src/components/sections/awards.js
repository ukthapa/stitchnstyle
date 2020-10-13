import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Awards = () => {
    const params = {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
		shouldSwiperUpdate: true
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	  },
	  breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 25
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 25
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
	}

	const awards = [
		{
			thumbnail: 'componentsource-2017',
			info: 'ComponentSource Bestselling Publisher Awards 2017'
		},
		{
			thumbnail: 'componentsource-2016',
			info: 'ComponentSource Bestselling Publisher Awards 2016'
		},
		{
			thumbnail: 'cs-product-2014-15',
			info: 'ComponentSource Bestselling Product Awards 2014-15'
		},
		{
			thumbnail: 'cs-publisher-2014-15',
			info: 'ComponentSource Bestselling Publisher Awards 2014-15'
		},
		{
			thumbnail: 'et-bengal-corporate-awards-2014-2015-thumb-2',
			info: 'ET Bengal Corporate Awards - Innovation in Business Model 2014-2015'
		},
		{
			thumbnail: 'cnbc-emerging-india-award-2013-2014-3',
			info: 'CNBC Emerging India Award 2013-2014'
		},
		{
			thumbnail: 'sdtimes-2013-2-2',
			info: 'SD Times Top 100 2013'
		},
		{
			thumbnail: 'cs-product-2012-13-2',
			info: 'ComponentSource Bestselling Product Awards 2012-13'
		},
		{
			thumbnail: 'cs-publisher-2012-13-2',
			info: 'ComponentSource Bestselling Publisher Awards 2012-13'
		},
		{
			thumbnail: 'cs-publisher-2011-12-2',
			info: 'ComponentSource Top 25 Bestselling Product in Japan Award 2011-2012'
		},
		{
			thumbnail: 'cs-publisher-2011-12-2',
			info: 'ComponentSource Top 50 Bestselling Product in Japan Award 2011-2012'
		},
		{
			thumbnail: 'cs-publisher-2011-12-1-2',
			info: 'ComponentSource Bestselling Publisher Awards 2011-12'
		},
		{
			thumbnail: 'csj-product-2011-12-2',
			info: 'ComponentSource Bestselling Product Awards 2011-12'
		},
		{
			thumbnail: 'ifg25-11-3',
			info: 'Allworld Network - India Fast Growth 25 - 2010'
		},
		{
			thumbnail: 'deloitte-asia-2009-2',
			info: 'Deloitte Technology Fast 500 Asia Pacific 2009'
		},
		{
			thumbnail: 'deloitte-india-2009-2',
			info: 'Deloitte Technology Fast 50 India 2009'
		},
		{
			thumbnail: 'nasscom-50-2009-3',
			info: 'NASSCOM Emerge 50 Leaders 2009'
		},
		{
			thumbnail: 'cps-publisher-2009-10-2',
			info: 'ComponentSource Bestselling Publisher Awards 2009-10'
		},
	];

	const data = useStaticQuery(graphql`
		query Images {
			images: allFile(filter: {relativeDirectory: {eq: "awards" }}) {
				nodes {
					id
					name
					childImageSharp {
						fixed {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		}
	`)


    return (

		<div className="bg-white" id="awards">
			<div className="container mx-auto px-8 md:px-16 py-16 relative z-10">
				<h2 className="text-center text-4xl font-medium text-gray-800 mb-8">Awards</h2>
				<p className="text-center mx-auto max-w-lg pb-8">We're proud to have received multiple awards, both globally and locally, for our unique business models, products and innovation.</p>
				<Swiper {...params}>
					{awards.map((value, index) => {
						return <div className="text-gray-700 bg-white border border-gray-200 rounded p-4" key={index}>
							{data.images.nodes.map((image) => {
								let img =""
								if(image.name === value.thumbnail) {
									img = <Img className="mx-auto" key={image.id} fixed={image.childImageSharp.fixed} alt={value.info} />
									return img
								}
								return img
							})}
							<p>{value.info}</p>
						</div>
					})}
				</Swiper>
			</div>
		</div>
    )
  };

  export default Awards;

