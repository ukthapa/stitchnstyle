import React from "react"
import {  graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/sections/contact"


const IndexPage = ( props ) => (
  <Layout>
    <SEO title="Welcome to InfoSoft Global (P) Ltd." />
		<div className="top-sticky-bg">
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

