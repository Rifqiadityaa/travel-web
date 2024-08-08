import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["var(--font-unbounded)"],
        albertSans: ["var(--font-albert-sans)"],
        thesignature: ["var(--font-thesignature)"],
      },
    },
  },
  plugins: [],
};
export default config;
