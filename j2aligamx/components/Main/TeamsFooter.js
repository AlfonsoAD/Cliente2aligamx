import React from "react";
import { teamsLogo } from "../../utilities/teamsInfo";

const TeamsFooter = () => {
  return (
    <div className="flex flex-nowrap 100wv justify-center">
      {teamsLogo.map((value, index) => {
        return (
          <div key={index} className="inline-block m-2 pb-2">
            <a href={value.page}>
              <img src={value.logo} height="38" width="38" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default TeamsFooter;
