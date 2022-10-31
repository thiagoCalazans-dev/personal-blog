import { styled } from "..";

export const ProfileCardContainer = styled('div', {
    display: "flex",
    background: "transparent",
    backgroundColor: "$sage2",
    gap: "2rem",
    marginTop: "-5.5rem",
    borderRadius: "10px",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",

    img: {
        height: "9.25rem",
        width: "9.25rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        marginLeft: "2.5rem",
        borderRadius: "8px",
    }
})

export const ProfileContent = styled("aside", {
    width: "100%",
    marginTop: "2.5rem",
    marginBottom: "2rem",
    marginRight: "2rem",
    display: "flex",
    flexDirection: "column",   
   
 
 
    header: {
     display: "flex",
     justifyContent: "space-between",
     alignItems: "flex-start",
    
 
     "> strong": {
         fontWeight: "700",
         fontSize: "1.5rem",
         lineHeight: "1.3",
     }, 
  
    },
 
    p: {     
       lineHeight: "1.6", 
       marginTop: "0.5rem",
       flex: 1,        
     },
 
     footer:  {
     display: "flex",
     gap: "1.5rem",     
     },

     a: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",         
        gap: "0.5rem",
        color: "$violet12",
        fontSize: "0.75rem",
        fontWeight: "bold",
        lineHeight: "1.6",                
        cursor: "pointer",
        borderBottom: "1px solid transparent",
     
     
        "&:hover": {
            color: "$orange11",
            borderBottom: "1px solid $orange11"
        }, 

    } 
})