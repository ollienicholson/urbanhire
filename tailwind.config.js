/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{php,html,js}', // Include all PHP, HTML, and JS files in the root directory
    './**/*.{php,html,js}', // Include all PHP, HTML, and JS files in subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

