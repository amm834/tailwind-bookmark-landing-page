module.exports = {
    mode:'jit',
    content: [
        './public/index.html',
        './src/**/*.{html,js}'
    ],
    theme: {
        extend: {
            colors: {
                'bookmark-purple': '#5267D4',
                'bookmark-red': '#FA5959',
                'bookmark-blue': '#242A45',
                'bookmark-grey': '#9194A2',
                'bookmark-white': '#f7f7f7',
            },
        },
        container: {
            center: true,
            padding: '2rem',
        },
    },
    plugins: [],
}
