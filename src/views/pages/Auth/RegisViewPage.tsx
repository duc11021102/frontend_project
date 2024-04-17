import FormRegis from "../../components/Auth/FormRegis";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTitle } from "../../../hooks/useTitle";
import { useNavigate } from "react-router-dom";
import { toastSuccess } from "../../containers/UI/Toast";
import { IFormRegisterValidate } from "../../../interface/auth";
import { registerApi } from "../../../api/registerApi";
const RegisViewPage = () => {
  //STORE
  useTitle("Register");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const registerSuccess = t("toast.registersuccess");

  //QUERY
  const { mutate, isPending } = useMutation({
    mutationFn: registerApi,
    onSuccess: () => {
      navigate("/login");
      toastSuccess(registerSuccess);
    },
  });

  const onSubmitRegisHandler = (formData: IFormRegisterValidate) => {
    const { username, email, password } = formData;
    console.log({ username, email, password });
    mutate({ username, email, password });
  };

  return (
    <>
      <FormRegis isPending={isPending} onSubmitRegis={onSubmitRegisHandler} />
    </>
  );
};
export default RegisViewPage;
