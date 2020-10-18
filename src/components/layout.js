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
      <div>
        <main>{children}</main>
        <footer className="overflow-hidden">
					<div className="container mx-auto px-8 md:px-16 pt-16 pb-10 relative z-10 ">
          	<p className="text-white">&copy; {new Date().getFullYear()}, {` `} Stitch &amp; Style  | Design &amp; Developed by <a href="https://www.ukthapa.com" target="_blank">ukthapa.com</a></p>
					</div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
