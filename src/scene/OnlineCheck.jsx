import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";

const OnlineCheck = () => {

  const [isOnline, setIsOnline] = useState(true);
  const [isShow, setIsShow] = useState('show');

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
  }, [isOnline]);

  if(isOnline) {
  setTimeout(() => {
    setIsShow('hide')
  }, 3000);
  }
  if(!isOnline) {
    setTimeout(() => {
      setIsShow('hide')
    }, 3000);
    }
  
  return (
    <>

      <Bounce bottom>
        <div
          className={`${
            isOnline ? "text-green-400" : "text-red-400"
          } tree  w-fit shadow-lg  ${isShow ==='hide' ? 'hidden': isShow === 'show' ? "fixed  z-50" : ""}`}
        >
          {isOnline ? "online" : "offline"}
        </div>
      </Bounce>

    </>
  );
};

export default OnlineCheck;
