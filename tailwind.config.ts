import type { Config } from 'tailwindcss'

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      colors: {
        background: "hsl(222.2 84% 4.9%)",
        foreground: "hsl(210 40% 98%)",
        card: "hsl(222.2 84% 4.9%)",
        cardForeground: "hsl(210 40% 98%)",
        primary: {
          DEFAULT: "hsl(217.2 91.2% 59.8%)",
          foreground: "hsl(222.2 47.4% 11.2%)"
        },
        secondary: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)"
        },
        muted: "hsl(210 40% 96.1%)",
        accent: "hsl(210 40% 96.1%)"
      }
    }
  },
  plugins: []
} satisfies Config


