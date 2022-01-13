import Layout from "../Components/Layout";

export default ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
};
