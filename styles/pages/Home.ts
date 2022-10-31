import { styled } from "..";

export const ContentContainer = styled('main', {
    maxWidth: 864
})

export const PublishedInfos = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "4.5rem",

    label: {
       fontWeight: "700",
        lineHeight: "1.6",
        fontSize: "1.125rem",
    },
    span: {   
        fontSize: "0.875rem",
    },
})

export const SearchInput = styled("input", {
marginTop: "0.75rem",
padding: "0.75rem 1rem",
width: "100%",
backgroundColor: "$sage2",
border: "1px solid transparent",
borderRadius: 6,

"&:focus": {
    border: "1px solid $orange10", 
    backgroundColor: "$sage1",
    outline: "none", 
},

"&::placeholder": {
    color: "$sage10"
}
});

export const PostsContainer = styled("section", {
marginTop: "3rem",
display: "grid",
gridTemplateColumns: "repeat(2, 1fr)",
gap: "2rem",

})
