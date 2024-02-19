import { useForm } from "react-hook-form";
import { IoIosArrowForward } from "react-icons/io";
const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => {
    console.log(data);
  };
  return (
    <div className="h-full bg-gray-50 font-body">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="mb-6 flex items-center text-2xl font-semibold text-gray-900 ">
          DETO
        </div>
        <div className="w-full rounded-lg bg-white shadow dark:border  sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900  md:text-2xl">
              Đăng nhập
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <input
                type="hidden"
                name="_token"
                value="IDf74byPizllmoPcIMuN45migmndFQfdh5nq9dXF"
                autoComplete="off"
              />
              <input type="hidden" name="role" value="admin" />
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  Địa chỉ email
                </label>
                <input
                  type="text"
                  id="name"
                  //   name="email"
                  {...register("email", { required: true, maxLength: 20 })}
                  placeholder=""
                  className={`w-full rounded-md ${errors.email ? "input-error" : ""} placeholder-gray-500`}
                />
                {!!errors.email && (
                  <p className="text-error mt-1">Không được để trống</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="name"
                  //   name="password"
                  {...register("password", { required: true, maxLength: 20 })}
                  placeholder=""
                  className={`w-full rounded-md ${errors.password ? "input-error" : ""} placeholder-gray-500`}
                />
                {!!errors.password && (
                  <p className="text-error mt-1">Không được để trống</p>
                )}
              </div>
              <button
                className=" bg-black hover:bg-primary-800 w-full rounded-lg px-5 py-2.5 text-white "
                type="submit"
              >
                Đăng nhập
              </button>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-primary-600 dark:text-primary-500 text-sm font-normal hover:underline"
                >
                  <span className="flex items-center">
                    Đăng ký
                    <div className="relative top-[1px] ml-1">
                      <IoIosArrowForward />
                    </div>
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
