import { useContext } from "react";
import { AuthContext } from "../contexts/FakeAuthContext";

/**
 * The useAuth hook is designed to ensure that it is used within an AuthProvider context in
 * JavaScript.
 */
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be used within an AuthProvider");
  return context;
}

export default useAuth;
