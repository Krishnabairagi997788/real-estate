import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-w6ncwz3db6fkw2hx.us.auth0.com"
     clientId="sY7FncZs9ZoqYULPRZz9an5iUdXKZEzD"
     authorizationParams={{
      redirect_uri: "https://full-stack-real-estate-youtube-lyart.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
