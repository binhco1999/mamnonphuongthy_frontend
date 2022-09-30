/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'mnpt-back': "url('/src/resources/mnpt.jpg')",
            },
        },
    },
    plugins: [],
};
