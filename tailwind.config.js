/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // https://tailwindcss.com/docs/content-configuration for more info
    './api/**/*.php', // Adjust this to include all PHP files in your project
    './*.php', // If you have any PHP files in the root directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

