import Banner from "../../containers/Layout/Banner";
import Br from "../../containers/Layout/Br";
import { useTitle } from "../../../hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
import { getItemsByCategoryApi } from "../../../api/getItemsByCategoryApi";
import { Suspense, lazy } from "react";
import Followus from "../../containers/Layout/Followus";
import { useTranslation } from "react-i18next";
const ItemList = lazy(() => import("../../components/Home/ItemList"));
const HomeViewPage = () => {
  //USE QUERY
  //get items by category
  const { data: dataType1, isPending: pendingType1 } = useQuery({
    queryKey: ["itemsByCategory", { type: 1, page: 0 }],
    queryFn: getItemsByCategoryApi,
    staleTime: 1000 * 60,
  });
  const { data: dataType2, isPending: pendingType2 } = useQuery({
    queryKey: ["itemsByCategory", { type: 2, page: 0 }],
    queryFn: getItemsByCategoryApi,
    staleTime: 1000 * 60,
  });
  const { data: dataType3, isPending: pendingType3 } = useQuery({
    queryKey: ["itemsByCategory", { type: 3, page: 0 }],
    queryFn: getItemsByCategoryApi,
    staleTime: 1000 * 60,
  });
  //STORE
  useTitle("QuayBongDa");
  const { t } = useTranslation();
  return (
    <main className="font-body">
      <Banner />
      <Suspense>
        <ItemList
          isPending={pendingType1}
          title={t("home.homeTitlePlayer")}
          data={dataType1?.data}
        />
        <Br />
        <ItemList
          isPending={pendingType2}
          title={t("home.homeTitleFan")}
          data={dataType2?.data}
        />

        <Br />
        <ItemList
          isPending={pendingType3}
          title={t("home.homeTitleClassic")}
          data={dataType3?.data}
        />
      </Suspense>
      <section className="w-full container_flex">
        <button
          className="m-5 px-5 lg:px-16 xl:px-20  py-2 border
         border-black rounded-sm text_section
          hover:text-green-500 hover:border-green-500
          transition duration-300 "
        >
          {t("home.homeButtonMore")}
        </button>
      </section>
      <Followus />
    </main>
  );
};
export default HomeViewPage;
