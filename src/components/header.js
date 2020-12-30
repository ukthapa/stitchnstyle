
import PropTypes from "prop-types"
import React from "react"
import PrimaryNAV from "./primarynav.js"


const Header = ({ siteTitle }) => (
  <header className="fixed w-full transition-shadow duration-500 ease-in-out z-50">
    <div className="container mx-auto px-2  md:px-16 md:py-3">
			<PrimaryNAV />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Testing`,
}

export default Header
