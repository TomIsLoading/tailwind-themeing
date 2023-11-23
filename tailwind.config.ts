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
        background: "rgba(var(--background), <alpha-value>)",
        border: "rgba(var(--border), <alpha-value>)",
        card: "rgba(var(--card), <alpha-value>)",
        "copy-primary": "rgba(var(--copy-primary), <alpha-value>)",
        "copy-secondary": "rgba(var(--copy-secondary), <alpha-value>)",
        cta: "rgba(var(--cta), <alpha-value>)",
        "cta-active": "rgba(var(--cta-active), <alpha-value>)",
        "cta-text": "rgba(var(--cta-text), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
