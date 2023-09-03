import { useState, useEffect } from "react";

export const checkOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnLineStatus() {
      setIsOnline(true);
    }
    function handleOffLineStatus() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnLineStatus);
    window.addEventListener("offline", handleOffLineStatus);

    return () => {
      window.removeEventListener("online", handleOnLineStatus);
      window.removeEventListener("offline", handleOffLineStatus);
    };
  }, []);

  return isOnline;
}