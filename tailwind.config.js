/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
  'primary':'#FF3838',
  'secondary':'#6E3D83',
  'notification-1':'#D2FFCE',
  'notification-2':'#2BB93B',
  'notification-3':'#FFE8CE',
  'notification-4':'#FFA338',
  'notification-5':'#FFCECE',
  'notification-6':'#FF3838',
  'other-1':'#F7F7F7',
  'other-2':'#EFEFEF',
  'other-3':'#EDF0F1',
  'other-4':'#E1E1E1',
  'other-5':'#707070',
  'other-6':'#000000',
},
fontFamily:{
'urbanist': ['Urbanist','sans-serif'],
},
fontSize:{
  'extra':'2rem',
},
    },
  },
  plugins: [],
}
