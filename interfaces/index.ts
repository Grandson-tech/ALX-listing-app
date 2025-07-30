import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Welcome to ALX Listing App
        </h1>

        <div className="flex justify-center mb-10">
          <Button label="Explore Listings" onClick={() => alert('Coming Soon!')} />
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Card
            title="Cozy Apartment"
            description="A modern apartment in the heart of the city."
            imageUrl="/assets/house.jpg"
          />
          <Card
            title="Beach House"
            description="Enjoy the ocean breeze in this cozy beach house."
            imageUrl="/assets/house.jpg"
          />
          <Card
            title="Mountain Retreat"
            description="A peaceful cabin surrounded by nature."
            imageUrl="/assets/house.jpg"
          />
        </div>
      </main>
    </>
  );
}
