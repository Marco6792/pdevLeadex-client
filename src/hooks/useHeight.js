import { useState, useEffect } from "react";

//trig animation when scoll to a certain height

const useHeight = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [matches, query]);

  return matches;
};

export default useHeight;