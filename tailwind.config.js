/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', '"Cascadia Mono"', '"Segoe UI Mono"', '"Roboto Mono"', '"Oxygen Mono"', '"Ubuntu Monospace"', '"Source Code Pro"', '"Fira Mono"', '"Droid Sans Mono"', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
};
