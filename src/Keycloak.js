import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: process.env.REACT_APP_KC_HOST + "/auth", // keycloak 18 or older
  //   url: "http://localhost:8888/", // keycloak 19
  realm: process.env.REACT_APP_KC_REALM,
  clientId: process.env.REACT_APP_KC_CLIENT_ID,
});

export default keycloak;
