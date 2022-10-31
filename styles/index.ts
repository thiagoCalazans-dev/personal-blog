
import { sage, orange, green, sageDark, orangeDark, greenDark } from "@radix-ui/colors"
import * as react from "@stitches/react"

export const {config, styled, css, globalCss, keyframes, getCssText, theme, createTheme} = react.createStitches({
    theme: {
        colors: {
       ...sage,
       ...orange,
       ...green
        },
        fontSizes: {
          md: "1.125rem",
          lg: "1.25rem",
          xl: "1.5rem",
          '2xl': "2rem",
        }
    }
    
})

const darkTheme = createTheme({
    colors: {
      ...sageDark,
      ...orangeDark,
      ...greenDark,
    },
  });