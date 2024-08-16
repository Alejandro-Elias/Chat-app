/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "violet": "hsl(276, 100%, 81%)",
        "moderateViolet": "hsl(276, 55%, 52%)",
        "darkViolet": "hsl(271, 15%, 43%)",
        "grayBlue": "hsl(206, 6%, 79%)",
        "veryDarkBlue": "hsl(271, 36%, 24%)",
        "grayViolet": "hsl(270, 7%, 64%)",
        "gradientMagenta": "hsl(293, 100%, 63%)",
        "gradientViolet": "hsl(264, 100%, 61%)",
        "lightGrayViolet":"hsl(270, 20%, 96%)",
        "veryDarkDesaturatedViolet":"hsl(271, 36%, 24%)",
        "veryLightMagenta":"hsl(289, 100%, 72%)"
      }
    },
  },
  plugins: [],
}

/* npx tailwindcss -i ./input.css -o ./output.css --watch */