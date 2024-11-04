export default function ClientCardList() {
  return (
    <div className="p-2 inline-flex w-full rounded-lg space-x-2 shadow-md hover:shadow-lg relative cursor-pointer bg-background">
      <img
        src="/sample/chicken-fajita-chicken-fillet-fried-with-bell-pepper-lavash-with-bread-slices-white-plate.jpg"
        className="max-w-24 md:max-w-30 aspect-square rounded-2xl object-cover content-center"
        alt="food"
      />
      <div className="">
        <div className="border-b pb-2">
          <h2 className="text-xs md:text-sm font-semibold text-x_text-normal break-all line-clamp-1 max-w-40 md:max-w-96">
            Nasi Goreng Sangat Enak
          </h2>
          <p className="line-clamp-2 text-vxs md:text-xs mt-1 text-x_text-label">
            LoremLabore mollit consequat exercitation nostrud sit cillum nisi
            sunt fugiat ut culpa qui qui. Culpa occaecat fugiat aliqua ad
            ullamco ea nisi. Sunt nostrud consequat adipisicing non. Qui dolore
            qui magna magna nostrud cupidatat. Ipsum nisi ea officia in ea ut do
            id irure qui irure. Laborum in dolore dolore nisi ad ea officia
            veniam elit. Labore elit exercitation sunt nostrud voluptate fugiat
            tempor incididunt aliquip non est voluptate. Amet ea sunt do
            pariatur et deserunt dolor adipisicing anim laboris ut Lorem. Aute
            enim qui laborum Lorem excepteur quis minim nisi laborum. Consequat
            sunt laboris aute proident commodo tempor. Incididunt consectetur
            ipsum eu consequat ad labore amet eiusmod mollit commodo duis.
          </p>
        </div>
        <p className="text-xs md:text-sm text-x_text-normal font-medium mt-2 font-poppins">
          <span className="text-x_text-label text-vxs md:text-xs line-through mr-1">
            Rp 40,000
          </span>
          Rp 20,000
        </p>
      </div>
      <div className="absolute top-0 right-0 py-1 px-1 md:px-3 bg-color-error-500 rounded-tr-lg rounded-bl-lg">
        <p className="text-vvxs md:text-vxs text-background font-medium font-poppins">
          50% OFF
        </p>
      </div>
    </div>
  );
}
