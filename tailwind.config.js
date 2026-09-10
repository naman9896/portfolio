const withOpacity = (variable) => ({ opacityValue }) =>
  opacityValue !== undefined
    ? `hsl(var(${variable}) / ${opacityValue})`
    : `hsl(var(${variable}) / 1)`;

module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: withOpacity("--background"),
        foreground: withOpacity("--foreground"),
        card: withOpacity("--card"),
        "card-foreground": withOpacity("--card-foreground"),
        popover: withOpacity("--popover"),
        "popover-foreground": withOpacity("--popover-foreground"),
        muted: withOpacity("--muted"),
        "muted-foreground": withOpacity("--muted-foreground"),
        primary: withOpacity("--primary"),
        "primary-foreground": withOpacity("--primary-foreground"),
        secondary: withOpacity("--secondary"),
        "secondary-foreground": withOpacity("--secondary-foreground"),
        accent: withOpacity("--accent"),
        "accent-foreground": withOpacity("--accent-foreground"),
        destructive: withOpacity("--destructive"),
        "destructive-foreground": withOpacity("--destructive-foreground"),
        border: withOpacity("--border"),
        input: withOpacity("--input"),
        ring: withOpacity("--ring"),
      },
    },
  },
  plugins: [],
};
