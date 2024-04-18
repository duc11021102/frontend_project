import { BsArrowUpSquare } from "react-icons/bs";
const ScrollToTop = () => {
  const handlerToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  console.log(window.scrollY);
  return (
    <>
      {/* {window.scrollY > 20 && ( */}
      <BsArrowUpSquare
        onClick={handlerToTop}
        className="cursor-pointer text-3xl fixed right-5 bottom-24 text-green-500"
      />
      {/* )} */}
    </>
  );
};

export default ScrollToTop;
