// import Banner from "../../containers/Layout/Banner";
import Carousel from "../../components/Home/Carousel";
import Br from "../../containers/Layout/Br";
import { useTitle } from "../../../hooks/useTitle";
import { useQuery } from "@tanstack/react-query";
import { getItemsByCategoryApi } from "../../../api/getItemsByCategoryApi";
import { Suspense, lazy } from "react";
// import Followus from "../../containers/Layout/Followus";
import { useTranslation } from "react-i18next";
import useViewport from "../../../hooks/useViewport";
import { NavLink } from "react-router-dom";
const ItemList = lazy(() => import("../../components/Home/ItemList"));
const HomeViewPage = () => {
  //USE QUERY
  //get items by category
  const { data: dataType1, isPending: pendingType1 } = useQuery({
    queryKey: ["itemsByCategory", { type: 1, page: 0 }],
    queryFn: getItemsByCategoryApi,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  const { data: dataType2, isPending: pendingType2 } = useQuery({
    queryKey: ["itemsByCategory", { type: 2, page: 0 }],
    queryFn: getItemsByCategoryApi,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  const { data: dataType3, isPending: pendingType3 } = useQuery({
    queryKey: ["itemsByCategory", { type: 3, page: 0 }],
    queryFn: getItemsByCategoryApi,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  //STORE
  useTitle("QuayBongDa");
  const { t } = useTranslation();
  const viewPort = useViewport();
  console.log(viewPort);
  return (
    <main className="font-body">
      {/* <Banner /> */}
      <Carousel />
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
        <NavLink
          to="/collections"
          className="m-5 px-5 lg:px-16 xl:px-20  py-2 border
         border-black rounded-sm text_section
          hover:text-green-500 hover:border-green-500
          transition duration-300 "
        >
          {t("home.homeButtonMore")}
        </NavLink>
      </section>
      {/* <Followus /> */}
    </main>
  );
};
export default HomeViewPage;
