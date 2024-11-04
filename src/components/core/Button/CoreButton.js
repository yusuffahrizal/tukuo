import { ShoppingBag, ShoppingCart } from "iconsax-react";
import { COLOR } from "../../../theme";

export default function CoreButton({
  title = "",
  className = "",
  onClick = () => {},
  children,
}) {
  return (
    <button className={`bg-color-primary-600 hover:bg-color-secondary-500 text-white py-2 text-xs md:text-sm rounded-lg shadow-sm font-poppins ${className}`}>
      {children ? (
        children
      ) : (
        <div className="space-x-2 items-center inline-flex">
          <span>{title}</span>
        </div>
      )}
    </button>
  );
}
