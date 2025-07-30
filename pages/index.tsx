import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Logo from '../components/common/Logo';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="min-h-screen bg-gray-100 p-6">
        <div className="flex justify-center mb-8">
          <Logo size="lg" />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome to ALX Listing App
        </h1>

        <div className="flex justify-center mb-10">
          <Button label="Explore Listings" onClick={() => alert('Coming Soon!')} />
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Card
            title="Cozy Apartment"
            description="A modern apartment in the heart of the city."
            imageUrl="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
          />
          <Card
            title="Beach House"
            description="Enjoy the ocean breeze in this cozy beach house."
            imageUrl="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
          />
          <Card
            title="Mountain Retreat"
            description="A peaceful cabin surrounded by nature."
            imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
          />
        </div>
      </main>
    </>
  );
}
