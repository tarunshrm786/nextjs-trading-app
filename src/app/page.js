import Head from 'next/head'; // Importing the Head component for setting the HTML head
import Header from '../components/Header'; // Import your Header component
import Footer from '../components/Footer'; // Import your Footer component
import HomeBanner from '../components/HomeBanner'; // Import your HomeBanner component
import Laptop from '../components/laptop'; // Import your HomeBanner component

export default function Home() {
  return (
    <>
      <Head>
        <title>Partrima</title>
        <meta name="description" content="A simple trading application" />
      </Head>
      <Header /> {/* Include the Header component here */}
      <main>
    <HomeBanner />
    <Laptop />
      </main>
      <Footer /> 
    </>
  );
}
