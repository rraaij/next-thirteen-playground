import "./globals.css";
import React from "react";
import NavLink from "./nav-link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("rendering");
  return (
    <html lang="en">
      <head>
        <title>Next Thirteen</title>
        <meta
          name="description"
          content="Playground for the Next 13 framework"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/movies"}>Movies</NavLink>
        </header>
        {children}
      </body>
    </html>
  );
}
