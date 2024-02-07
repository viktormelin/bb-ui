import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    height: {
      screen: '100dvh',
    },
    extend: {
      colors: {
        'brand-purple-light': '#6E34BF',
        'brand-purple-normal': '#42208C',
        'brand-purple-dark': '#2B1E59',
        'brand-purple-darker': '#201740',
        'brand-green': '#4EA66D',
      },
      backgroundImage: {
        'hero-image': 'url(/images/12637456_5026621.jpg)',
      },
    },
  },
  plugins: [],
};
export default config;
