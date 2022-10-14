/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tint: "var(--ui-tint)",
        subtle1: "var(--ui-subtle-1)",
        subtle2: "var(--ui-subtle-2)",
        subtle3: "var(--ui-subtle-3)",
        subtle4: "var(--ui-subtle-4)",
        bold1: "var(--ui-bold-1)",
        bold2: "var(--ui-bold-2)",
        bold3: "var(--ui-bold-3)",
        bold4: "var(--ui-bold-4)",
        darken: "var(--ui-darken)",
        loContrast: "var(--ui-lo-contrast)",
        hiContrast: "var(--ui-hi-contrast)",
      },
      fontFamily: {
        sans: "'Poppins', Helvetica, Arial, -apple-system, sans-serif",
      },
      fontSize: {
        "3xs": ["8px", "12px"],
        "2xs": ["10px", "14px"],
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: ({ theme }) => ({
        focus: `0 0 0 3px ${theme("colors.sky.500")}`,
      }),
      keyframes: {
        // Radix Dropdown
        "scale-in": {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
};
