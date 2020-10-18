import React from "react"
import BackgroundImage from "gatsby-background-image"
import {  graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../components/sections/banner"
import Achievements from "../components/sections/achievements"
import Business from "../components/sections/business"
import Founders from "../components/sections/founders"
import Contact from "../components/sections/contact"
import Awards from "../components/sections/awards"


const IndexPage = ( props ) => (
  <Layout>
    <SEO title="Welcome to InfoSoft Global (P) Ltd." />
		<div className="top-sticky-bg">
			<BackgroundImage
				fluid={ props.data.indexImage.childImageSharp.fluid }
				className="banner-bg"
			>
				<Banner />
				<div className="overlay-bg"></div>
			</BackgroundImage>
				<Achievements />
				<Business />
				<Awards />
				<Founders />
				<Contact />
		</div>
  </Layout>
)

export default IndexPage

export const pageQuery= graphql`
	query {
		indexImage: file(relativePath: { eq: "stitch-style-bg.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1800) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

