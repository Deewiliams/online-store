module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
        opacity: {
          '15': '0.15',
          '35': '0.35',
          '65': '0.65',
         }
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


