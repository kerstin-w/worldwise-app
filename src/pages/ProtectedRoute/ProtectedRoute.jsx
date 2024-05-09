import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

/**
 * The `ProtectedRoute` component ensures that only authenticated users can access
 * certain routes by redirecting them to the login page if they are not authenticated.
 * @returns The `children` prop is being returned from the `ProtectedRoute` component.
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
