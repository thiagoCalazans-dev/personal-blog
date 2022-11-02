import { styled } from ".."

export const PostContainer = styled("main", {
    maxWidth: 864,
    margin: "0 auto",
    article: {
            marginTop: "2.5rem",
        }})


export const TitleCard = styled("div", {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    background: "transparent",
    backgroundColor: "$sage1",
    marginTop: "-5.5rem",
    borderRadius: 10,
    boxShadow: "0px 2px 28px rgba(0, 0, 0, 0.2)",
    header: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "0.75rem",
        lineHeight: "1.6",
        textTransform: "uppercase",
        a: {
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            textDecoration: "none",
            cursor: "pointer",
            borderBottom: "1px solid transparent",
         
            "&:hover": {
                borderBottom: "1px solid $orange10"
            } ,
        },
    },
    h1: {
        marginTop: "1.25rem",
        marginBottom: "0.5rem",
        fontWeight: 700,
        lineHeight: 1.3,
        fontSize: "1.5rem",
       
    },
    footer: {
        display: "flex",
        flex: 1,
        gap: "1.5rem",   
        justifySelf: "flex-end",  
        }})

   


export const TextWithIcon = styled("div", {
display: "flex",
gap: "0.5rem",
alignItems: "center",
})

export const Technologies = styled("div", {
    display: "flex",
    justifyContent: "end",
    flex: 1,
    gap: "0.5rem",
    justifySelf: "end",
    alignSelf: "end",  
     
})

