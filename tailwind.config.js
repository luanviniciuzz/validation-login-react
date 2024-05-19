/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background_placeholder: '#F1F1F1',
        background_placeholder_profile: '#F4F4F4',
        outro: '#FAFAFA',
        white: '#FFFFFF',
        whitecardprofile: '#FDFDFD',
        whitebackgroundprofile: '#F1F5F9',
        blueb2bit: '#02274F',
        bluehover: '#034388',
        yellowb2bit: '#FDCF00',
        error: '#e74c3c',
        black:'#262626',
      },
      fontWeight: {
        bold: '700',
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

