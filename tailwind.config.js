module.exports = {
  content: ["./src/**/*.js", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        vDgrey: "hsl(0, 0%, 17%)",
        dGrey: "hsl(0, 0%, 59%)",
      },
      animation: {
        resize: "resize 600ms ease-in-out",
      },
      keyframes: {
        resize: {
          "0%": {
            transform: "scale(0.9)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  variants: {
    extends: {
      opacity: ["hover"],
    },
  },
  plugins: [],
};
