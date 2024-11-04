import {
  Check,
  CloseCircle,
  CloseSquare,
  Filter,
  HambergerMenu,
  Menu,
  SearchNormal1,
  ShoppingBag,
} from "iconsax-react";
import { useState } from "react";
import { COLOR } from "../../../theme";

export default function ClientNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-background">
      <div className="max-w-screen-sm flex items-center justify-between p-4 text-white mx-auto">
        <SearchNormal1
          variant="Outline"
          color={COLOR.GREY_800}
          className="aspect-square w-5 md:w-6"
        />
        <a className="text-xs md:text-sm text-x_text-heading font-medium font-poppins">
          Powered by <strong>Tukuo</strong>
        </a>
        <div className="inline-flex gap-4">
          <Filter
            variant="Outline"
            color={COLOR.GREY_800}
            onClick={toggleSidebar}
            className="aspect-square w-5 md:w-6"
          />
        </div>
        <div
          className={`fixed md:absolute top-0 right-0 h-full w-64 bg-background p-4 transition-transform transform duration-300 z-50 ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-row justify-between items-center">
            <span className="text-x_text-heading text-xs md:text-sm font-semibold font-poppins">
              Filter Produk
            </span>
            <CloseCircle
              variant="Linear"
              color={COLOR.GREY_800}
              onClick={toggleSidebar}
              className="aspect-square w-5 md:w-6"
            />
          </div>
          <div>
            <div className="px-2 pt-2">
              <span className="font-medium text-x_text-normal text-xs md:text-sm">
                Category
              </span>
              <div className="flex flex-col px-2 mt-1">
                  <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">Pakaian</span>
                  <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">Pakaian</span>
                  <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">Pakaian</span>
                  <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">Pakaian</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
