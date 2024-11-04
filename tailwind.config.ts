import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'lightGreen': '#E0FEE6',
        'darkGreen': '#004C3D',
        'darkerGreen': '#06402B',
        'tGreen': '#E0FEE6',
        'offBlack': '#363636',
        'lightGrey': '#F3F4F2',
      },
      fontSize: {
        small: '0.875rem'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
export default config;
