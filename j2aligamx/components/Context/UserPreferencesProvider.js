//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
//react
import React, { useState, useContext, useEffect } from "react";
//Libreria de mensajes
import Swal from "sweetalert2";
//Api
import useFetch from "../../pages/api/fetchRefresh";
//Contexto
import { useUserContext } from "./UserProvider";

const preferences = {
  idPreferences: "",
  idFavTeam: "",
  teamName: "",
  logo: "",
  idUserP: "",
};

const userPreferencesContext = React.createContext(preferences);

export function useUserPreferencesContext() {
  return useContext(userPreferencesContext);
}

const UserPreferencesProvider = ({ children }) => {
  const { callFetch } = useFetch();
  const { user } = useUserContext();
  const { userId } = user;

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

  const dataUser = async () => {
    const res = await callFetch(`/preferencias-usuarios/`, 1);
    setUserPreferences({
      idPreferences: res?.IdPreferencias == null ? "" : res.IdPreferencias,
      idFavTeam: res?.idEquipoFavorito == null ? "" : res.idEquipoFavorito,
      teamName: res?.NombreEquipo == null ? "" : res.NombreEquipo,
      logo: res?.LogoEquipo == null ? "" : res.LogoEquipo,
      idUserP: res?.idUser == null ? "" : res.idUser,
    });
  };

  return (
    <userPreferencesContext.Provider value={{ userPreferences }}>
      {children}
    </userPreferencesContext.Provider>
  );
};
export default UserPreferencesProvider;
