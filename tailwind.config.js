module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        gap: {
          '100px': '100px',
          '40px': '40px',
        },
        rounded: {
          'lg': '14px',
          'xl': '20px',
        },
        me: {
          '40px': '40px',
        },
        width: {
          '4/5': '80%',  // Adding custom width for 80%
        },
        backgroundColor: {
          green: '#B9FF66',  // Custom background color
        },
      },
    },
    plugins: [],
  }