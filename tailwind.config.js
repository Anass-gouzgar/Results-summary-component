/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-primary-lightRed",
    "bg-primary-orangeyYellow",
    "bg-primary-greenTeal",
    "bg-primary-cobaltBlue",
    "primary-lightRed",
    "primary-orangeyYellow",
    "primary-greenTeal",
    "primary-cobaltBlue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lightRed: "hsl(0, 100%, 67%)",
          orangeyYellow: "hsl(39, 100%, 56%)",
          greenTeal: "hsl(166, 100%, 37%)",
          cobaltBlue: "hsl(234, 85%, 45%)",
        },
        gradient: {
          lightSlateBlue: "hsl(252, 100%, 67%)",
          lightRoyalBlue: "hsl(241, 81%, 54%)",
          violetBlue: "hsla(256, 72%, 46%, 1)",
          persianBlue: "hsla(241, 72%, 46%, 0)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          paleBlue: "hsl(221, 100%, 96%)",
          lightLavender: "hsl(241, 100%, 89%)",
          darkGrayBlue: "hsl(224, 30%, 27%)",
        },
      },
      backgroundImage: {
        "gradient-light-slate-blue":
          "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
        "gradient-violet-blue-circle":
          "radial-gradient(circle, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))",
      },
    },
  },
  plugins: [],
};
