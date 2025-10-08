/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#217D82",
        mainLayer:"#217d829e",
        gold: "#C5A363",
        gray: "#D0D9DC",
      },
      fontSize: {
        xxxl: "clamp(1.25rem, 4vw, 2.5rem)", // Large headers
        xxl: "clamp(1rem, 3.5vw, 2rem)", // Subheaders
        xl: "clamp(0.875rem, 2.5vw, 1.5rem)", // Section titles
        lg: "clamp(0.75rem, 2vw, 0.875rem)", // Large text
        base: "clamp(calc(0.75rem * 0.94), calc(2vw * 0.94), calc(0.875rem * 0.94))", // Base is 85% of lg        
        sm: "clamp(0.375rem, 0.875vw, 0.375rem)", // Small text
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
