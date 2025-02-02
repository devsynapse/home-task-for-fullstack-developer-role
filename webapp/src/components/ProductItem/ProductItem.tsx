import { ProductItemProps } from "../../components/interfaces";

const ProductItem = (props: ProductItemProps) => {
  return (
    <div className="flex flex-row justify-between w-full bg-neutral-300 rounded p-6">
      <span>#{props.ProductID}</span>
      <span>{props.ProductName}</span>
      <img src={props.ProductPhotoURL} alt={props.ProductName} className="object-cover h-24 w-24"/>
    </div>
  );
};

export default ProductItem;