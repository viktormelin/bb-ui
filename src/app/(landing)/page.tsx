import FeatureList from '@/components/FeatureList';
import Button from '@/components/ui/Button';

const HomePage = () => {
  return (
    <main className="text-white p-4">
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
        <Button className="mt-16 ">Get Started today</Button>
      </section>
      <section className="min-h-screen w-full flex flex-col items-center">
        <header className="mb-4">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Features Designed with You in Mind
          </h2>
          <FeatureList />
        </header>
      </section>
      <footer className="mt-16 w-full flex flex-col items-center">
        <a
          className="py-3 px-3 text-sm uppercase tracking-tigth"
          href="/contact"
        >
          Contact Us
        </a>
        <a
          className="py-3 px-3 text-sm uppercase tracking-tigth"
          href="/contact"
        >
          Privacy Policy & Terms of Service
        </a>
      </footer>
    </main>
  );
};

export default HomePage;
