import mermaid from "mermaid";

const themeVariables = {
  fontFamily: "system-ui",
  fontSize: "14px",
  primaryColor: "#fa465b",
  primaryTextColor: "#f6f6f6",
  primaryBorderColor: "#7c0000",
  lineColor: "#888888",
  secondaryColor: "#092122",
  secondaryTextColor: "#cacaca",
  tertiaryColor: "#163738",
  activationBkgColor: "#fa465b"
};

export default defineNuxtPlugin(() => {
  mermaid.initialize({ startOnLoad: false, theme: "base", themeVariables });
  return {
    provide: {
      mermaid
    }
  };
});