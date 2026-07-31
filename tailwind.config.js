const withOpacity = (variable) => ({ opacityValue }) =>
  opacityValue !== undefined
    ? `hsl(var(${variable}) / ${opacityValue})`
    : `hsl(var(${variable}) / 1)`;

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: withOpacity("--background"),
        foreground: withOpacity("--foreground"),
        card: withOpacity("--card"),
        "card-foreground": withOpacity("--card-foreground"),
        muted: withOpacity("--muted"),
        "muted-foreground": withOpacity("--muted-foreground"),
        primary: withOpacity("--primary"),
        "primary-foreground": withOpacity("--primary-foreground"),
        border: withOpacity("--border"),
      },
    },
  },
  plugins: [],
};
