/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
	container : {
		center : true,
		padding : "15px",
	},
		screens : {
			sm : '640px',
			md : '768px',
			lg : '960px',
			xl : '1200px'
		},
		fontFamily:{
			primary : "var(--font-jetbrainMono)"
		},
		extend: {
			colors: {
			  accent: "#00ff99",
			  'accent-hover': "#00e187",
			  primary: '#1c1c22', 
			},
  	

  		keyframes: {
			"accordion-down": {
				from: { height : "0"},
				to: {height: "var(--redix-accordion-content-hieght)"},
			},
			"accordion-up": {
				from: {height: "var(--redix-accordion-content-hieght)"} ,
				to: { height : "0"},
			},
		},
		animation: {
	"accordion-down": "accordion-down 0.2s ease-out",
	"accordion-up": "accordion-up 0.2s ease-out"
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
