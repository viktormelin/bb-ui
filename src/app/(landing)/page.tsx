import FeatureList from '@/components/FeatureList';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="p-4 md:max-w-2xl">
      <section className="h-screen w-full flex flex-col items-center justify-center">
        <header>
          <h1 className="text-4xl font-medium tracking-tight mb-4">
            Effortless Expense Management
          </h1>
        </header>
        <p className="text-lg text-gray-200">
          Say goodbye to the hassle of tracking group expenses! Billbuddies is
          here to take the pain out of splitting bills. Whether it&apos;s rent
          with roommates, a dinner with friends, or shared vacation costs,
          Billbuddies makes it simple.
        </p>
        <Link href="/authenticate" className="w-full">
          <Button className="mt-16">Get Started today</Button>
        </Link>
      </section>
      <section className="min-h-screen w-full flex flex-col items-center">
        <header className="mb-4">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Features Designed with You in Mind
          </h2>
          <FeatureList />
        </header>
      </section>
    </main>
  );
};

export default HomePage;
