import { UniformContext } from "@uniformdev/context-react";
import type { UniformAppProps } from "@uniformdev/context-next";
import { createUniformContext } from "../lib/uniformContext";
import "../styles/globals.css";

const clientContext = createUniformContext();

function UniformContextApp({
  Component,
  pageProps,
  serverUniformContext,
}: UniformAppProps) {
  return (
    <UniformContext
      context={serverUniformContext ?? clientContext}
      outputType="edge"
    >
      <Component {...pageProps} />
    </UniformContext>
  );
}

export default UniformContextApp;
