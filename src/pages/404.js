import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
		<div className="top-sticky-bg">
			<div className="bg-white">
				<div className="container mx-auto px-8 md:px-16 py-16 relative z-10">
					<div className="py-16">
						<h1>NOT FOUND</h1>
						<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
					</div>
				</div>
			</div>
		</div>
  </Layout>
)

export default NotFoundPage
