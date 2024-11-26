import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "475px",
            },
            colors: {
                neutral: {
                    "100": "#F7F7F7",
                    "200": "#D3D4D6",
                    "300": "#B3B5BA",
                    "400": "#81848E",
                    "500": "#5C5F6B",
                    "600": "#373A47",
                    "700": "#141413",
                    "800": "#000000",
                },
                primary: {
                    "100": "#FFE8F0",
                    DEFAULT: "#EE2B69",
                },
                secondary: {
                    "100": "#FCE2E2",
                    DEFAULT: "#FBE843",
                },
                black: {
                    "100": "#333333",
                    "200": "#141413",
                    "300": "#7D8087",
                    DEFAULT: "#000000",
                },
                white: {
                    "100": "#F7F7F7",
                    DEFAULT: "#FFFFFF",
                },
            },
            fontFamily: {
                inter: ["var(--font-inter)"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                100: "2px 2px 0px 0px rgb(0, 0, 0)",
                200: "2px 2px 0px 2px rgb(0, 0, 0)",
                300: "2px 2px 0px 2px rgb(238, 43, 105)",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
