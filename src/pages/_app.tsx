import type { AppProps } from "next/app";
import { globalStyles } from "../../styles/globals";
import { Container } from "../../styles/components/Container";
import { Header } from "../../styles/components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}
