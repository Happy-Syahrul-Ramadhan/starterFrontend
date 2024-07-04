import SEO from "../../src/components/seo-tags";
import Container from "../../src/components/container";
import Layout from "../../src/components/layout";
import { ALL_ARTICLES_PAGE_SEO } from "../../src/lib/constants";

const About = () => {
  return (
    <>
    <SEO metaData={ALL_ARTICLES_PAGE_SEO} />
      <Layout>
        <Container>
          <h1 className="text-center text-4xl font-bold my-10">About</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-10 mb-32">
           
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default About