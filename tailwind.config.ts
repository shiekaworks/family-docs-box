import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(141,202,244,1) 0%, rgba(0,171,233,0.56) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
