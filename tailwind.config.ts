import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|dropdown|pagination|select|table|ripple|spinner|menu|divider|popover|listbox|scroll-shadow|checkbox|spacer).js',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)'],
      },
      fontSize: {
        base: '14px',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(90deg, rgba(141,202,244,1) 0%, rgba(0,171,233,0.56) 100%)',
      },
      screens: {
        xs: { max: '400px' },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
