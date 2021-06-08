module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                Dancing: ['Dancing'],
                Limelight: ['Limelight'],
                Lobster: ['Lobster'],
                Noto: ['Noto'],
                Roboto: ['Roboto'],
                ZCOOL: ['ZCOOL'],
            },
            backgroundImage: (theme) => ({
                'bg1': "url('/1.jpeg')",
                'bg2': "url('/2.jpg')",
                'bg3': "url('/3.jpg')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
