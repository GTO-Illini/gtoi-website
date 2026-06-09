import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        felt:     '#13294B',
        'felt-2': '#1f3d70',
        'felt-3': '#0c1c38',
        orange:   '#E84A27',
        bg:       '#ecedf1',
        'bg-2':   '#e0e2e8',
        paper:    '#f6f7fa',
        ink:      '#0a0e18',
        'ink-2':  '#222632',
        muted:    '#6a6f7c',
        joker:    '#E84A27',
        ace:      '#A78033',
        king:     '#13294B',
        queen:    '#8E5A72',
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
