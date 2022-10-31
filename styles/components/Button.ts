import { styled } from "..";

export const Button = styled('button', {
    backgroundColor: '$orange4',
    color: '$orange11',
    borderColor: '$orange7',
    '&:hover': {
      backgroundColor: '$orange5',
      borderColor: '$orange8',
    },
  });