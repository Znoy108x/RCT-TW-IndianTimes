module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif'],
        anim: ['Lora', 'serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}