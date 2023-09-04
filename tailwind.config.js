/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "from": "rgba(241, 196, 15, 1) 20%",
        "to": "rgba(243, 172, 18, 1) 100%"
      },
      screens:{
        "xms": "450px",
        "xxms": "290px",
        "mmd": "1000px"
      },
 
    },
  },
  
  plugins: [
    
    require("tailwind-scrollbar-hide"),

    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);
      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
        `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),
  ],
}