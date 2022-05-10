import { useEffect, useState } from "react";


export function useScrollBar(){
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
  
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible, handleScroll]);


    return { visible };
}