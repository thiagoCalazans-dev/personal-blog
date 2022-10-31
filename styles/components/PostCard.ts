import Link from "next/link";
import { styled } from "..";


export const PostCardContainer = styled(Link, {
display: "flex",
flexDirection: "column",
justifyContent: "space-between",  
color: "$violet12",
textDecoration: "none",
padding: "1.5rem",
height: "16.25rem",
backgroundColor: "$sage1",
border: "1px solid transparent",
borderRadius: 10,
maxWidth: "26rem",
overflow: "hidden",
boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",

    


"&:hover": {
    border: "1px solid $orange10",  
},

header: {
    display: "flex",
    gap: "1rem",
    justifyContent: "space-between",

    strong:  {
        fontSize: "1.25rem",
        fontWeight: "700",
        lineHeight: "1.6",
        maxHeight: "4rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },

    span: {       
        fontSize: "0.875rem",
        lineHeight: "1.6",
        whiteSpace: "nowrap",
    }
},
  


p: {
    maxHeight: "7rem",    
    lineHeight: "1.6",  
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": "4",
    flex: 1,
   

}
})

export const Technologies = styled("div", {
    display: "flex",
    gap: "0.5rem",
    alignSelf: "end",   
})


