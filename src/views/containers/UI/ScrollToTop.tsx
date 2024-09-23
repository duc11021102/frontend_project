import { useState, useEffect } from "react";
import { BsArrowUpSquare } from "react-icons/bs";
const ScrollToTop = () => {
  const [isVisible, setIsvisible] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsvisible(true);
      } else {
        setIsvisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handlerToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <BsArrowUpSquare
          onClick={handlerToTop}
          className="cursor-pointer text-3xl fixed right-5 bottom-24 text-black"
        />
      )}
    </>
  );
};

export default ScrollToTop;
