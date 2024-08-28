import { useNavigate } from "react-router-dom";

// productData
const productData = [
  {
    id: 1,
    image: "../../public/img/products/heart.jpg",
    title: "Hersheys Heart",
    desc: "Chocolates en forma de corazón, ideal para regalar o disfrutar.",
    price: 12000,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 2,
    image: "../../public/img/products/monedas.jpg",
    title: "Monedas de Dulce",
    desc: "Monedas de dulce con sabor a frutas, perfectas para un toque divertido.",
    price: 9000,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 3,
    image: "../../public/img/products/lenguas.jpg",
    title: "Lenguas Ácidas",
    desc: "Tiras de dulce ácido para una explosión de sabor y diversión.",
    price: 7000,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 4,
    image: "../../public/img/products/doritos.jpg",
    title: "Doritos",
    desc: "Paquete de Doritos para disfrutar en cualquier momento.",
    price: 11500,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 5,
    image: "../../public/img/products/kitkat.jpg",
    title: "KitKat",
    desc: "Barritas de chocolate KitKat, el snack perfecto para un break.",
    price: 5500,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 6,
    image: "../../public/img/products/biscolata.jpg",
    title: "Biscolata",
    desc: "Galletas rellenas de chocolate, ideales para una merienda.",
    price: 6800,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 7,
    image: "../../public/img/products/trident.jpg",
    title: "Trident",
    desc: "Chicles Trident en sabor fresco y duradero.",
    price: 4000,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 8,
    image: "../../public/img/products/halls.jpg",
    title: "Halls",
    desc: "Mentitas Halls, ideales para refrescar el aliento.",
    price: 5000,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
];

const HomePageProductCard = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-10">
      {/* Heading  */}
      <div className="">
        <h1 className="text-center mb-5 text-2xl font-semibold text-purple-700">
          Los más vendidos
        </h1>
      </div>

      {/* main  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {productData.map((item, index) => {
              const { image, title, price } = item;
              return (
                <div key={index} className="p-4 w-full md:w-1/4">
                  <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                    <img
                      onClick={() => navigate("/productinfo")}
                      className="lg:h-80 h-96 w-full"
                      src={image}
                      alt={title}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                        MiDulceOnline
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-800 mb-3">
                        {title}
                      </h1>
                      <h1 className="title-font text-lg font-medium text-gray-800 mb-3">
                        ${price}
                      </h1>

                      <div className="flex justify-center">
                        <button className="bg-purple-600 hover:bg-purple-700 w-full text-white py-2 rounded-lg font-bold">
                          Añadir al carrito
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageProductCard;
