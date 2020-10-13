import React from 'react'

function divider(props) {
	return (
		<div className="divider mx-auto w-48 text-center">
			<div className="dots"></div>
			<div className={(props.type === 'twoDots') ? 'hidden' : 'dots'}></div>
		</div>
	)
}

export default divider
