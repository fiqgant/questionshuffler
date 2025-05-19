/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(50px, -40px) scale(1.1)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-60px, 30px) scale(1.2)" },
        },
        float3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(80px, 60px) scale(0.9)" },
        },
        float4: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-40px, -70px) scale(1.05)" },
        },
        float5: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(30px, 90px) scale(1.15)" },
        },
      },
      animation: {
        "float-1": "float1 6s ease-in-out infinite",
        "float-2": "float2 8s ease-in-out infinite",
        "float-3": "float3 7s ease-in-out infinite",
        "float-4": "float4 10s ease-in-out infinite",
        "float-5": "float5 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
