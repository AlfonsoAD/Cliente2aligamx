//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//react,next
import React from "react";
import Image from "next/image";
//Utilities
import { teamsLogo } from "../../utilities/teamsInfo";

const TeamsFooter = () => {
  return (
    <div className="flex flex-nowrap 100wv justify-center mt-6">
      {teamsLogo.map((value, index) => {
        return (
          <div key={index} className="inline-block m-2 pb-2">
            <a href={value.page}>
              <Image
                src={value.logo}
                className="hover:animate-bounce"
                height="38"
                width="38"
                alt={`Logo de ${value.name}`}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default TeamsFooter;
