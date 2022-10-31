
import { sage, orange,  sageDark, orangeDark,  violet, violetDark } from "@radix-ui/colors"
import * as react from "@stitches/react"

export const {config, styled, css, globalCss, keyframes, getCssText, theme, createTheme} = react.createStitches({
    theme: {
        colors: {
       ...sage,
       ...orange,
       ...violet
        },
    }
    
})

const darkTheme = createTheme({
    colors: {
      ...sageDark,
      ...orangeDark,
      ...violetDark,
    },
  });