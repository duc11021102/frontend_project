import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// LOGIN SUCCESS
export const toastSuccessLogin = () => {
  return toast.success("Đăng nhập thành công!", {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

// LOGOUT SUCCESS
export const toastSuccessLogout = () => {
  return toast.success("Đăng xuất thành công!", {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
