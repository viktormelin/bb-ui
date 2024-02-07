import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full flex items-center justify-evenly">
      <Link className="p-3 text-xs uppercase tracking-tigth" href="/contact">
        Contact Us
      </Link>
      <Link className="p-3 text-xs uppercase tracking-tigth" href="/contact">
        Privacy & Terms
      </Link>
    </footer>
  );
};

export default Footer;
