import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Página não encontrada</h1>
    <p>Você acabou de pegar uma rota que não existe ... a tristeza.</p>
  </Layout>
)

export default NotFoundPage
