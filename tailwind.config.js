/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                success: "#19B500",
                orange_light: "#FFA538",
            },
            fontFamily: {
                "artin-bold": "artin-bold",
                "artin-regular": "artin-regular",
                "artin-light": "artin-light",
                "artin-black": "artin-black",
                "artin-thin": "artin-thin",
                "estedad-bold": "estedad-bold",
                "estedad-medium": "estedad-medium",
                "estedad-exbold": "estedad-exbold",
            },
            aspectRatio: {
                "6/9": "6 / 9",
                "60/90": "60 / 90",
                "600/900": "600 / 900",
                "1200/1800": "1200 / 1800",
            },
            screens: {
                xs: "300px",
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                xxl: "1500px",
            },
        },
    },
    plugins: [],
};
