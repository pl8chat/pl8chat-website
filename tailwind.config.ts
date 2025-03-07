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
        'darkGreen': '#004C3D',
        'lightGreen': '#D2E7E1',
        'darkerGreen': '#06402B',
        'tGreen': '#E0FEE6',
				'pl8Green': '#58ff89',
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
