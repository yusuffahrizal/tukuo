import { CloseCircle, Filter, SearchNormal1 } from "iconsax-react";
import { useEffect, useRef, useState } from "react";
import { COLOR } from "../../../theme";
import { CoreButton } from "../../core";

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
        <a
          className="text-xs md:text-sm text-x_text-heading font-medium font-poppins"
          href="#"
        >
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
          className={`fixed md:absolute top-0 right-0 h-full w-64 bg-background py-4 pl-4 transition-transform transform duration-300 z-10 ${
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
                <div className="my-8">
                  <span>&nbsp;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={searchRef}
        className={`absolute ${
          showSearch ? "top-16" : "top-0"
        } max-w-screen-sm w-full transform transition-transform z-10 ${
          showSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-4 bg-background flex flex-row p-4 rounded-md gap-2">
          <input
            type="text"
            className="border w-full focus:border-primary focus:ring-1 focus:outline-none text-x_text-normal p-2 rounded-lg text-sm basis-4/5"
          />
          <CoreButton className="basis-1/5" onClick={() => {}}>
            Cari
          </CoreButton>
        </div>
      </div>
    </nav>
  );
}
