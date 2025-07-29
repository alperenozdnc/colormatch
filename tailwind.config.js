import * as NativeWindPreset from "nativewind/preset";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [NativeWindPreset],
    theme: {
        extend: {},
    },
    plugins: [],
}
