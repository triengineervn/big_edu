/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.htmls"];
export const theme = {
  extend: {
    scrollbar: {
      hide: {
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
    },
  },
  screens: {
    mobile: { max: "639px" },
    // => @media (max-width: 639px) { ... }

    tablet: { min: "640px", max: "1023px" },
    // => @media (min-width: 640px and max-width: 1023px) { ... }

    desktop: { min: "1024px" },
    // => @media (min-width: 1024px) { ... }
  },
};
export const plugins = [];
