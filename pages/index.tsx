import Container from "../src/components/container";
import Layout from "../src/components/layout";
import { DEFAULT_SEO } from "../src/lib/constants";
import SEO from "../src/components/seo-tags";

export default function Index() {
  
  return (
    <>
      <Layout>
        <SEO metaData={DEFAULT_SEO} />
        <Container>
         <h1 className="text-center">Home</h1>
        </Container>
      </Layout>
    </>
  );
}
