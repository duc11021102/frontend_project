import { Suspense, lazy } from "react";
import { Loading } from "../../containers/UI/Loading";
const Item = lazy(() => import("./Item"));

interface IItem {
  _id: string;
  itemPrice: number;
  categoryCode: number;
  subCategoryCode: number;
  brandCode: number;
  discountType: number;
  inventoryCode: number;
  itemName: string;
  itemSKU: string;
  itemImage: string;
  description: string;
  created_At: string;
  updated_At: string;
}

type Props = {
  title: string;
  data: Array<IItem>;
  isPending: boolean;
};
const ItemList = ({ title, data }: Props) => {
  const items = data?.slice(0, 12);
  return (
    <main className="font-body mt-16 mb-8 section_margin">
      <h1 className="text_title mb-4">{title}</h1>
      <Suspense
        fallback={
          <div className="w-full flex justify-center items-center text-xl">
            <Loading />
          </div>
        }
      >
        <section className="container_grid4 gap-3 sm:gap-5">
          {items?.map((item) => (
            <Item
              itemImg={item.itemImage}
              itemName={item.itemName}
              itemPrice={item.itemPrice}
              key={item._id}
            />
          ))}
        </section>
      </Suspense>
    </main>
  );
};

export default ItemList;
