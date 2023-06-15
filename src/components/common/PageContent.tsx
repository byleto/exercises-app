import { Container } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";
import React from "react";

export const PageContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <NavigationBar />
      {children}
    </Container>
  );
};
