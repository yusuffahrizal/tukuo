import {
  ArrowRight2,
  Building4,
  InfoCircle,
  People,
  Personalcard,
  ShoppingBag,
} from "iconsax-react";
import { ClientCardList, ClientNavbar } from "../../components/clients";
import { CoreButton } from "../../components/core";
import { useEffect, useState } from "react";
import { COLOR } from "../../theme";

export default function PageClientHome() {
  const [showCart, setShowCart] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollEnd, setScrollEnd] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);

      setIsScrolling(true);
      setScrollEnd(false);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setScrollEnd(true);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    if (isScrolling) {
      setShowCart(false);
    }

    if (!isScrolling && scrollEnd) {
      setShowCart(true);
    }
  }, [isScrolling, scrollEnd]);

  return (
    <>
      <ClientNavbar />
      <section>
        <div className="relative">
          <img
            src="/sample/happy-waiter-serving-food-group-cheerful-friends-pub.jpg"
            className="w-full max-h-32 md:max-h-40 object-cover content-center"
          />
          <a
            className="absolute -bottom-3 right-3 bg-background rounded-full inline-flex items-end space-x-2 px-2 text-xs md:text-sm font-poppins"
            href="#"
          >
            <span>About</span>
            <Building4
              variant="Bulk"
              color={COLOR.GREY_500}
              className="aspect-square w-5"
            />
          </a>
        </div>
        <div className="p-3 shadow-md bg-background">
          <h1 className="font-poppins font-medium text-sm md:text-base text-x_text-heading">
            Nasi Goreng Enak
          </h1>
          <p className="text-xs md:text-sm text-x_text-secondary mt-2 line-clamp-3">
            Sint laboris nostrud sit proident tempor aliquip voluptate ipsum
            mollit enim do dolore. Aute voluptate est nulla occaecat laborum
            enim ullamco. Lorem sunt eiusmod irure cupidatat consequat mollit.
            Quis incididunt tempor eiusmod velit enim irure dolore dolor.
            Officia ad eu deserunt consectetur. Nulla aute ipsum veniam
            reprehenderit qui et. Laboris laboris mollit proident incididunt
            aliquip proident pariatur tempor eiusmod commodo eiusmod ea qui.
            Lorem id commodo reprehenderit officia.
          </p>
          <div className="flex flex-row justify-between mt-4 items-center border-b pb-2">
            <div className="inline-flex items-center">
              <img
                src="/icons/pickup.png"
                className="h-4 aspect-square mr-[6px]"
                alt="delivery"
              />
              <p className="text-xs text-x_text-normal font-poppins">
                Pickup di Toko <span className="font-medium">(3 Km)</span>
              </p>
            </div>
            <div className="inline-flex items-center cursor-pointer">
              <span className="text-xs text-x_text-normal font-medium mr-[1px]">
                Ubah
              </span>
              <ArrowRight2
                variant=""
                color={COLOR.GREY_600}
                className="h-3 aspect-square"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="p-4 mt-2">
        <div className="space-y-4">
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
          <ClientCardList />
        </div>
      </div>
      <div
        className={`fixed bottom-2 w-full max-w-screen-sm px-2 transition-transform duration-200 ${
          showCart ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <CoreButton className="w-full shadow-lg" title="Keranjang">
          <div className="flex flex-row justify-between px-4 items-center">
            <span className="text-xs md:text-sm text-background font-medium">1 Item</span>
            <div className="flex flex-row space-x-2 items-center">
              <span className="line-through text-xs md:text-sm">Rp 40,000</span>
              <span className="text-xs md:text-sm font-medium">Rp 60,000</span>
              <ShoppingBag variant="Broken" className="aspect-square w-4 md:w-5" />
            </div>
          </div>
        </CoreButton>
      </div>
    </>
  );
}
