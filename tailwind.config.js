module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                esse: {
                    100: "hsl(238, 40%, 52%)",
                },
                red: {
                    200: "hsl(358, 79%, 66%)",
                },
                blue: {
                    100: "hsl(239, 57%, 85%)",
                },
                red: {
                    100: "hsl(357, 100%, 86%)",
                },
                //
                blue: {
                    400: "hsl(212, 24%, 26%)",
                },
                blue: {
                    300: "hsl(211, 10%, 45%)",
                },
                gray: {
                    200: "hsl(223, 19%, 93%)",
                },
                gray: {
                    100: "hsl(228, 33%, 97%)",
                },
                white: {
                    500: "hsl(0, 0%, 100%)",
                },
            },
            width: {
                100: "730px",
                98: "640px",
                18: "72px",
            },
            height: {
                42: "168px",
                26: "102px",
            },
            top: {
                100: "26px",
            },
            textColor: {
                500: "hsl(238, 40%, 52%)",
                300: "hsl(211, 10%, 45%)",
                400: "hsl(212, 24%, 26%)",
                100: "hsl(239, 57%, 85%)",
                200: "hsl(223, 19%, 93%)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};