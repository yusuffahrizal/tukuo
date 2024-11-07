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
import { useEffect, useRef, useState } from "react";
import { COLOR } from "../../../theme";

export default function ClientNavbar() {
  const sidebarRef = useRef(null);
  const searchRef = useRef(null);

  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    if (showSidebar || showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar, showSearch]);

  return (
    <nav className="w-full bg-background">
      <div className="max-w-screen-sm flex items-center justify-between p-4 text-white mx-auto">
        <SearchNormal1
          variant="Outline"
          color={COLOR.GREY_800}
          onClick={toggleSearch}
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
          ref={sidebarRef}
          className={`fixed md:absolute top-0 right-0 h-full w-64 bg-background py-4 pl-4 transition-transform transform duration-300 z-50 ${
            showSidebar
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-row justify-between items-center pr-4">
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
            <div className="p-2 pt-2 pr-4 max-h-screen overflow-y-scroll scroll">
              <span className="font-medium text-x_text-normal text-xs md:text-sm">
                Category
              </span>
              <div className="flex flex-col px-2 mt-1">
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <span className="text-x_text-normal text-xs md:text-sm mt-1 cursor-pointer">
                  Pakaian
                </span>
                <div className="my-8"><span>&nbsp;</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={searchRef}
        className={`absolute ${
          showSearch ? "top-10" : "top-0"
        } max-w-screen-sm w-full transform transition-transform z-50 ${
          showSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-4 bg-blue-200 flex flex-row p-4 rounded-md">
          <input type="text" className="border" />
        </div>
      </div>
    </nav>
  );
}
