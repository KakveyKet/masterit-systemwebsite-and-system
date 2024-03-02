// tailwind.config.js
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primery1: '#500192',
        disable: '#909090',
        linkcol: '#1877F2',
        accent: '#FFD74A',
        background: '#FDFBFF',
        textbody: '#303030',
        lebeltext: '#909090',
        placehovertext: '#dbdbdbd',
        labeltext2: '#fdfbff'
      },
      backgroundColor: {
        primery1: '#500192',
        primery2: '#61199C',
        disable: '#909090',
        link: '#1877F2',
        accent: '#FFD74A',
        background: '#FDFBFF',
        textbody: '#303030',
        lebeltext: '#909090',
        placehovertext: '#dbdbdbd',
      },
      borderColor: {
        primery1: '#500192',
        disable: '#909090',
        link: '#1877F2',
        borderBody: '#e6e6e6',
        accent: '#FFD74A',
      },
      fontFamily: {
        KhmerMoul: 'Moul',
        NotoSansKhmer: 'Noto Sans Khmer'
      },
      fontSize: {
        'Hero': '45px',
        'Heading1': '35px',
        'heading2': '30px',
        'heading3': '25px',
        'heading4': '20px',
        'body': '18px',
        'link': '18px'
      }
    },
  },
  variants: {
    extend: {},
    plugins: [require("tw-elements/dist/plugin.cjs")]
  },

} 