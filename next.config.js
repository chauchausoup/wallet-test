module.exports = {
  // Other Next.js configuration...
  // ...

  // Enable PostCSS
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      // Add any other PostCSS plugins you may be using
    ],
  },
};
