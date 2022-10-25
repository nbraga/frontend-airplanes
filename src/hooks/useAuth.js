import { useState, useEffect } from "react";

export const useAuth = () => {
  const user = localStorage.getItem("authenticated");

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (user) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [user]);

  return { auth };
};
