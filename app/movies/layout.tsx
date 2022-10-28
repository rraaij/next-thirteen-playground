import React, { use } from "react";
import Link from "next/link";

const getCharacters = async () => {
  console.log(">> GONNA FETCH 'EM!!");
  // let res = await fetch("http://localhost:4000");
  let res = await fetch("https://rickandmortyapi.com/api/character");
  return res.json();
};

const Layout = ({ children }: { children: any }) => {
  let characters = use(getCharacters());
  return (
    <div style={{ display: "flex" }}>
      <ul style={{ paddingRight: "10px", fontSize: "small" }}>
        {characters.results.map((character: any) => (
          <li key={character.id}>
            <Link href={`/movies/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
