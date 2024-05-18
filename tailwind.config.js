/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background_placeholder: '#F1F1F1',
        outro: '#FAFAFA',
        white: '#FFFFFF',
        whitecardprofile: '#FDFDFD',
        whitebackgroundprofile: '#F1F5F9',
        blueb2bit: '#02274F',
        yellowb2bit: '#FDCF00',
        black:'#262626',
      },
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

