import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IFormRegisterValidate } from "../../../interface/auth";
import { Loading } from "../../containers/UI/Loading";
import useCapsLock from "../../../hooks/useCapsLock";
import { IoIosWarning } from "react-icons/io";
interface Props {
  isPending: boolean;
  onSubmitRegis: (data: IFormRegisterValidate) => void;
}

const FormRegis = ({ onSubmitRegis, isPending }: Props) => {
  //STATE
  const isCapsLock = useCapsLock();
  //FORM HANDLER
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegisterValidate>();
  // LOGIN FUNCTION
  const onSubmit = (data: IFormRegisterValidate) => {
    onSubmitRegis(data);
    // console.log(data);
  };
  return (
    <main className="h-full bg-gray-50 font-body">
      <section className="mx-auto flex flex-col items-center justify-center px-6 py-8 h-screen">
        <div className="w-full rounded-lg bg-white shadow dark:border  sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900  md:text-2xl">
              Đăng ký
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  Tên người dùng
                </label>
                <input
                  type="text"
                  id="username"
                  {...register("username", {
                    required: true,
                    maxLength: 40,
                    minLength: 3,
                  })}
                  placeholder=""
                  className={`w-full rounded-md ${errors.username ? "input-error" : ""} placeholder-gray-500`}
                />
                {!!errors.username && (
                  <p className="text-error text-sm text-red-500 mt-1">
                    Tên người dùng không hợp lệ.
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  Địa chỉ email
                </label>
                <input
                  type="text"
                  id="email"
                  {...register("email", {
                    required: true,
                    maxLength: 40,
                    minLength: 6,
                  })}
                  placeholder=""
                  className={`w-full rounded-md ${errors.email ? "input-error" : ""} placeholder-gray-500`}
                />
                {!!errors.email && (
                  <p className="text-error text-sm text-red-500 mt-1">
                    Email không hợp lệ.
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="password"
                  //   name="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                  })}
                  placeholder=""
                  className={`w-full rounded-md ${errors.password ? "input-error" : ""} placeholder-gray-500`}
                />
                {!!errors.password && (
                  <p className="text-error text-sm text-red-500 mt-1">
                    Mật khẩu không hợp lệ.
                  </p>
                )}
                {isCapsLock && (
                  <p className="text-error flex items-center text-sm gap-1 text-gray-900 mt-2">
                    Đang bật Caps Lock
                    <span>
                      <IoIosWarning className="text-xl text-yellow-300" />
                    </span>
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="rePassword"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Nhập lại mật khẩu
                </label>
                <input
                  type="password"
                  id="rePassword"
                  {...register("rePassword", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    validate: (val: string) => {
                      if (watch("password") != val) {
                        return "Mật khẩu nhập lại không khớp!";
                      }
                    },
                  })}
                  placeholder=""
                  className={`w-full rounded-md ${errors.rePassword ? "input-error" : ""} placeholder-gray-500`}
                />
                {!!errors.rePassword && (
                  <p className="text-error text-sm text-red-500 mt-1">
                    Mật khẩu nhập lại không hợp lệ.
                  </p>
                )}
              </div>
              <button
                disabled={isPending}
                className="flex justify-center items-center bg-black w-full rounded-lg px-5 py-2.5 text-white min-h-11 mt-2"
                type="submit"
              >
                {isPending ? <Loading /> : "Đăng ký"}
              </button>
            </form>
            <div className="flex justify-start">
              <NavLink
                to="/login"
                className="text-primary-600 dark:text-primary-500 text-sm font-normal hover:underline"
              >
                <span className="flex items-center text-sm font-medium text-gray-900">
                  <div className="relative top-[1px]">
                    <IoIosArrowBack />
                  </div>
                  Đăng nhập
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default FormRegis;
