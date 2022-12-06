//BY JESÚS ALFONSO ANDRADE DOMINGUEZ 18100149
import { unregister } from "./Interceptor";

//Preferencias de usuario
//Peticiones respecto a preferencias de usuario
const urlApi = "http://localhost:4000";

var tokenAuth = "";
const accessKey = (token) => {
  if (token != "" && token != null && token != undefined) {
    tokenAuth = token;
  }
};

//Agregar y actualizar preferencias de usuario
const postPostPreferences = async (idUser, idTeam, nameTeam, logoTeam) => {
  const res = await fetch(`${urlApi}/preferencias-usuarios`, {
    method: "POST",
    body: JSON.stringify({
      idEquipoFavorito: idTeam,
      NombreEquipo: nameTeam,
      LogoEquipo: logoTeam,
      idUser: idUser,
    }),
    headers: {
      Authorization: `Bearer ${tokenAuth}`,
      "content-Type": "application/JSON",
    },
  });
  if (res.status != 200) {
    throw new Error("Algo ha salido mal");
  }

  const resJson = await res.json();
  return resJson;
};

//Consultar preferencias de usuario
const getPreferences = async (id) => {
  try {
    const res = await fetch(`${urlApi}/preferencias-usuarios/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenAuth}`,
        "content-Type": "application/JSON",
      },
    });
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    throw new Error(`Algo ha salido mal ${err}`);
  }
};

export { postPostPreferences, getPreferences, accessKey };
