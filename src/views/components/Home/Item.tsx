import numberFormatter from "../../../utils/numberFormatter";
type Props = {
  itemImg: string;
  itemName: string;
  itemPrice: number;
};
const Item = ({ itemImg, itemName, itemPrice }: Props) => {
  return (
    <main
      className="container_flex w-fit font-body 
    cursor-pointer hover:shadow-2xl transition duration-300"
    >
      <section className="mx-auto w-40 sm:w-auto">
        <img src={itemImg} alt="..." className="object-cover"></img>
        <div className="flex flex-col px-2 py-4 gap-2">
          <p className="truncate max-w-56">{itemName}</p>
          <p className="font-semibold text-sm">{numberFormatter(itemPrice)}</p>
        </div>
      </section>
    </main>
  );
};

export default Item;
