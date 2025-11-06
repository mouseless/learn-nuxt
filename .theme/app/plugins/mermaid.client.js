import mermaid from "mermaid";

const getCSSVariable = variable => {
  if(typeof document !== "undefined") {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  }
  return "";
};

const themeVariables = {
  fontFamily: "system-ui",
  fontSize: "14px",
  primaryColor: getCSSVariable("--color-primary"),
  primaryTextColor: getCSSVariable("--color-primary-text"),
  primaryBorderColor:  getCSSVariable("--color-primary-border"),
  lineColor: getCSSVariable("--color-primary-line"),
  secondaryColor: getCSSVariable("--color-secondary"),
  secondaryTextColor: getCSSVariable("--color-secondary-text"),
  tertiaryColor: getCSSVariable("--color-tertiary"),
  activationBkgColor: getCSSVariable("--color-primary")
};

export default defineNuxtPlugin(() => {
  mermaid.initialize({ startOnLoad: false, theme: "base", themeVariables });
  return {
    provide: {
      mermaid
    }
  };
});