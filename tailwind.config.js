/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	fontfamily: {
		primary: "var(--font-jettbrainMono)",
	},
  	extend: {
  		colors: {
  			primary:"#1c1c22"
  		},
		accent:{
			DEFUALT: "#00ff99",
			hover:"#00e187"
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
		
  	}
  },
  
  plugins: [require("tailwindcss-animate")],
};
