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
    console.log(isShow);
  }, 3000);
  }
  if(!isOnline) {
    setTimeout(() => {
      setIsShow('hide')
      console.log(isShow);
    }, 3000);
    }
  
  return (
    <>

      <Bounce bottom>
        <div
          className={`${
            isOnline ? "text-green-400" : "text-red-400"
          } fixed bottom-3 left-2/4 px-2 shadow-lg right-2/4 ${isShow ==='hide' ? 'hidden': isShow === 'show' ? "fixed" : ""}`}
        >
          {isOnline ? "online" : "offline"}
        </div>
      </Bounce>

    </>
  );
};

export default OnlineCheck;
