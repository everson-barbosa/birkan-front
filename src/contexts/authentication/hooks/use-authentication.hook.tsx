import { useContext } from "react";
import { AuthenticationContext } from "../authentication.context";

export const useAuthentication = () => useContext(AuthenticationContext)