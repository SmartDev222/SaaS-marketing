import React from "react"
import { Link } from "gatsby"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi and welcome.</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
