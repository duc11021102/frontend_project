import FormLogin from "../../components/Auth/FormLogin";
import { IFormLogin } from "../../../interface/auth";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../../api/loginApi";
import { useNavigate } from "react-router-dom";
import { toastSuccess } from "../../containers/UI/Toast";
import { useTranslation } from "react-i18next";
const LoginViewPage = () => {
  //STORE
  const navigate = useNavigate();
  const { t } = useTranslation();
  const loginSuccess = t("toast.loginsuccess");
  //QUERY
  const { mutate } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/home");
      toastSuccess(loginSuccess);
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
