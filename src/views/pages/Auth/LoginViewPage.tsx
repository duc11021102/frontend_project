import FormLogin from "../../components/Auth/FormLogin";
import { IFormLogin } from "../../../interface/auth";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../../api/loginApi";
import { useNavigate } from "react-router-dom";
import { toastSuccessLogin } from "../../containers/UI/Toast";
const LoginViewPage = () => {
  //STORE
  const navigate = useNavigate();
  //QUERY
  const { mutate } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/home");
      toastSuccessLogin();
    },
  });

  const onSubmitLoginHandler = (formData: IFormLogin) => {
    mutate(formData);
    console.log(formData);
  };
  return (
    <>
      <FormLogin onSubmitLogin={onSubmitLoginHandler} />
    </>
  );
};

export default LoginViewPage;
