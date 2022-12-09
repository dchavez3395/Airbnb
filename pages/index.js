import Head from "next/head";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import SmCard from "../components/SmCard";
import MidCard from "../components/MidCard";
import LgCard from "../components/LgCard";
import Footer from "../components/Footer";


const Home = ( {exploreData, cardData} ) => {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <link
          rel="icon"
          href="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Airbnb-256.png"
        />
      </Head>
      <Header />
      <HeroBanner />

      <main className="px-8 mx-auto justify-center 2xl:px-[20%] lg:px-12 xl:px-16 max-x-7xl">
        <section className="pt-6">
          <h2 className="font-bold text-4xl pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-4">
              {exploreData?.map(({img, distance, location}) => (
                <SmCard key={img} img={img} distance={distance} location={location} />
              ))}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-4xl font-bold">Live Anywhere</h2>
          <div className="overflow-scroll flex space-x-3 p-3 -ml-3 scrollbar-hide justify-">
            {cardData?.map(({img, title}) => (
              <MidCard key={img} img={img} title={title} /> 
            ))}
          </div>
        </section>

        <LgCard  img='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440' title='The Great Outdoors' description='Wishlist by AidBnb' buttonText='Get Inspired'/>
      </main>

      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps(){
  const exploreData = await fetch("https://www.jsonkeeper.com/b/0NRN").then((res) => res.json());
  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then((res) => res.json())

  return {
    props: {exploreData,cardData
    },
  };
}
