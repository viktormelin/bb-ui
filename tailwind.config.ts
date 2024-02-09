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
        'hero-image':
          'url(https://viktormellin.dev/cdn-cgi/imagedelivery/3ecvmLCFkS-FijMWb0qFvQ/2d613ef4-7da6-45a8-bef3-feb58a802400/public)',
        // Use for dark mode in the future?
        // 'hero-image': 'url(https://viktormellin.dev/cdn-cgi/imagedelivery/3ecvmLCFkS-FijMWb0qFvQ/dbab304f-60f4-4a09-f236-127a507b0a00/public)',
      },
    },
  },
  plugins: [],
};
export default config;
