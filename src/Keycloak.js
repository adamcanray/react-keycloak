import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://192.168.81.170:8888/auth", // keycloak 18 or older
  //   url: "http://localhost:8888/", // keycloak 19
  realm: "keycloak-react-auth",
  clientId: "react-auth",
});

export default keycloak;
