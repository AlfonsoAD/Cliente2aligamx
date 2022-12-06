import React from "react";
import Image from "next/image";
import MatchContainer from "../MatchContainer";
import { useUserContext } from "../../Context/UserProvider";
import { useUserPreferencesContext } from "../../Context/UserPreferencesProvider";

const CardProfileUser = () => {
  const { user } = useUserContext();
  const { userPreferences } = useUserPreferencesContext();
  const { userName, userEmail } = user;
  const { teamName, logo } = userPreferences;

  const IMG_USER_URL =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-700 to-blue-900 ...">
        <div className="a-box">
          <h1 className="text-2xl font-bold m-5 text-black">
            Datos del usuario
          </h1>
          <div className="img-container">
            <div className="img-inner">
              <div className="inner-skew">
                <Image
                  src={logo == "" ? IMG_USER_URL : logo}
                  height="320"
                  width="310"
                />
              </div>
            </div>
          </div>
          <div className="text-container">
            <h1 className="text-2xl font-semibold">
              {userName == " " ? "Sin información" : userName}
            </h1>
            <div>
              Email asociado: {userEmail == " " ? "Sin información" : userEmail}
            </div>
            <div>
              Equipo favorito: {teamName == " " ? " Sin información" : teamName}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProfileUser;
