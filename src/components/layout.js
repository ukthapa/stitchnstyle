/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
			<main>{children}</main>
			<footer className="overflow-hidden">
				<div className="container mx-auto px-8 md:px-16 pt-16 pb-10 relative z-10 ">
					<p className="text-white">&copy; {new Date().getFullYear()}, {` `} Stitch &amp; Style  <span class="developer-link">Design &amp; Developed by <a href="https://www.ukthapa.com" target="_blank" rel="noreferrer">ukthapa.com</a></span></p>
				</div>
			</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
