/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        incognito: ["var(--incognito)"],
        inter: ["var(--inter)"],
      },
      colors: {
        "primary-color": "#33E092",
        "secondary-color": "#0CCE6B",
        "tertiary-color": "#16a34a",
        "primary-bg": "rgba(39, 39, 43, 0.4)",
        "secondary-bg": "rgba(250, 250, 250, 0.4)",
        "sa-bg-white":"#f1f0ee",
        "sa-bg-black":"#100F15",
        "sa-bg-green":"#1cff42",
      },
      boxShadow: {
        "line-light": "rgba(17, 17, 26, 0.1) 0px 1px 0px",
        "line-dark": "rgb(29, 29, 32) 0px 1px 0px",
      },
      gridTemplateColumns: {
        custom: "1.2fr 1fr",
      },
      backgroundImage: {
        noise:
          "url('https://res.cloudinary.com/samuelamoah/image/upload/v1697976914/Samuel%20Amoah/igvooopdjw4oq4f90iuo.png')",
      },
      backgroundPosition: {
        zero: "0 0",
      },
    },
  },
  plugins: [],
};
