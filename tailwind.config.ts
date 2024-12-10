import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      content: {
        line: 'url(/line.svg)',
        joining: 'url(/landing/partners/joining.png)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        linear: 'linear-gradient(95deg, #4263EB 18.87%, #7048E8 94.77%)',
        linear2: 'linear-gradient(91deg, #4262EB 0%, #21368A 94.33%)',
        linear3: 'linear-gradient(91deg, #4262EB 0%, #919CFF 94.33%)',
      },
      colors: {
        indigo_50: '#EDF2FF',
        indigo_100: '#DBE4FF',
        indigo_300: '#91A7FF',
        indigo_500: '#5C7CFA',
        indigo_600: '#4C6EF5',
        indigo_400: '#748FFC',
        indigo_800: '#3B5BDB',
        indigo_700: '#4263EB',
        indigo_900: '#364FC7',

        gray_50: '#F8F9FA',
        gray_500: '#ADB5BD',
        gray_600: '#868E96',
        gray_700: '#495057',
        gray_900: '#212529',
      },
    },
  },
  plugins: [],
};
export default config;
