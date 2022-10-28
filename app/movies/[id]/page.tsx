import React, { use } from "react";
import Image from "next/image";

const getCharacter = async (id: number) => {
  let res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return res.json();
};

const Page = ({ params }: { params: any }) => {
  let character = use(getCharacter(params.id));
  return (
    <>
      <h1>{character.name}</h1>
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
    </>
  );
};

export default Page;
