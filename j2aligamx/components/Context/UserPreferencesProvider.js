import React, { useState, useContext, useEffect } from "react";
import { petitionPreferences } from "../../pages/api/petitionsUser";

var idUser = "";

const preferences = {
  idPreferences: "",
  idFavTeam: "",
  teamName: "",
  logo: "",
  idUserP: "",
};

const userPreferencesContext = React.createContext(preferences);

export const captureId = (id) => {
  idUser = id;
};

export function useUserPreferencesContext() {
  return useContext(userPreferencesContext);
}

const UserPreferencesProvider = ({ children }) => {
  const [userPreferences, setUserPreferences] = useState({
    idPreferences: "",
    idFavTeam: "",
    teamName: "",
    logo: "",
    idUserP: "",
  });

  useEffect(() => {
    dataUser();
  }, []);

  const dataUser = () => {
    petitionPreferences(idUser)
      .then((res) => {
        setUserPreferences({
          idPreferences: res.IdPreferencias,
          idFavTeam: res.idEquipoFavorito,
          teamName: res.NombreEquipo,
          logo: res.LogoEquipo,
          idUserP: res.idUser,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <userPreferencesContext.Provider value={{ userPreferences }}>
      {children}
    </userPreferencesContext.Provider>
  );
};
export default UserPreferencesProvider;
