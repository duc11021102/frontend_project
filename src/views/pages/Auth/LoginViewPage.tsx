import FormLogin from "../../components/Auth/FormLogin";
import { IFormLogin } from "../../../interface/auth";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../../api/loginApi";
import { useNavigate } from "react-router-dom";
import { toastSuccess } from "../../containers/UI/Toast";
import { useTranslation } from "react-i18next";
import { useTitle } from "../../../hooks/useTitle";
const LoginViewPage = () => {
  //STORE
  const navigate = useNavigate();
  const { t } = useTranslation();
  const loginSuccess = t("toast.loginsuccess");
  useTitle("Login");
  //QUERY
  const { mutate, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/home");
      toastSuccess(loginSuccess);
    },
  });

  const onSubmitLoginHandler = (formData: IFormLogin) => {
    mutate(formData);
  };
  return (
    <>
      <FormLogin isPending={isPending} onSubmitLogin={onSubmitLoginHandler} />
    </>
  );
};

export default LoginViewPage;
