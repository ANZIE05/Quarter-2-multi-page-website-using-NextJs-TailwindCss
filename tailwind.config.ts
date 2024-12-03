import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#f97316',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        sans: ['Poppins','sans-serif']
      },
      container:{
        center: true,
        padding:{
          default: '1rem',
          sm:'2rem',
          lg:'4rem',
          xl:'5rem',
          '2xl': '6rem',
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
