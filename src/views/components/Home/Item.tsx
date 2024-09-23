import numberFormatter from "../../../utils/numberFormatter";
import mockup from "../../../assets/img/mockup.jpg";
// import classes from "./Item.module.css";
type Props = {
  itemImg: string;
  itemName: string;
  itemPrice: number;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Item = ({ itemImg, itemName, itemPrice }: Props) => {
  return (
    <main
      className=" container_flex font-body 
    cursor-pointer hover:shadow-2xl transition duration-300"
    >
      <section>
        <img src={mockup} alt="..."></img>
        <div className="flex flex-col px-2 py-4 gap-2">
          <p className="truncate max-w-56">{itemName}</p>
          <p className="font-semibold text-sm">{numberFormatter(itemPrice)}</p>
        </div>
      </section>
    </main>
  );
};

export default Item;
