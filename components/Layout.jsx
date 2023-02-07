import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Magpollo - E-Strategy, Design & Engineering</title>
        <meta
          name="description"
          content="Magpollo is an organization that specializes in strategizing and engineering solutions for the web."
        />
        <meta
          name="keywords"
          content="Web Design, Web Development, Blockchain, SEO, API Integration, Social Media Marketing, Branding, E-commerce, CMS, Software Development"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
