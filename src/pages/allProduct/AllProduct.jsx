import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";

const productData = [
  {
    id: 1,
    image: "../../public/img/products/heart.jpg",
    title: "Chocolate HERSHEYS en forma de corazón x 30un",
    desc: "Deliciosos chocolates en forma de corazón de Hersheys, ideales para regalar o disfrutar en cualquier momento.",
    price: 10700,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 2,
    image: "../../public/img/products/biscolata.jpg",
    title: "Galletas rellenas de chocolate BISCOLATA x 12un",
    desc: "Galletas rellenas de chocolate para darle un toque dulce y divertido a tu lonchera.",
    price: 6400,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 3,
    image: "../../public/img/products/kitkat.jpg",
    title: "Chocolates KITKAT con avellana x 6un",
    desc: "Chocolates KitKat con avellana, combinando dos chocolates para una experiencia única y deliciosa.",
    price: 4700,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 4,
    image: "../../public/img/products/halls.jpg",
    title: "Mentas HALLS x 90g",
    desc: "Mentitas Halls para un frescor instantáneo, perfectas para cualquier ocasión.",
    price: 26200,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 5,
    image: "../../public/img/products/doritos.jpg",
    title: "Paquete de Doritos x 1",
    desc: "Paquete de Doritos, el snack ideal para disfrutar en cualquier momento del día.",
    price: 9500,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 6,
    image: "../../public/img/products/lenguas.jpg",
    title: "Tiras de dulce ácido LENGUAS x 280g",
    desc: "Tiras de dulce ácido, perfectas para quienes buscan un sabor intenso y divertido.",
    price: 11600,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 7,
    image: "../../public/img/products/trident.jpg",
    title: "Chicles TRIDENT x 300g",
    desc: "Chicles Trident en sabor mousse de limón, sin grasas trans ni colorantes artificiales.",
    price: 8000,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
  {
    id: 8,
    image: "../../public/img/products/monedas.jpg",
    title: "Monedas de dulce x 18un",
    desc: "Monedas de dulce con sabor clásico, ideales para regalar o disfrutar en cualquier ocasión.",
    price: 7400,
    trendingProductName: "Ofrecido",
    quantity: 10,
  },
];

const AllProduct = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="py-8">
        {/* Heading  */}
        <div className="">
          <h1 className=" text-center mb-5 text-2xl font-semibold">
            Todos los productos
          </h1>
        </div>

        {/* main  */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 lg:px-0 py-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {productData.map((item, index) => {
                const { image, title, price } = item;
                return (
                  <div key={index} className="p-4 w-full md:w-1/4">
                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                      <img
                        onClick={() => navigate("/productinfo")}
                        className="lg:h-80  h-96 w-full"
                        src={image}
                        alt={title}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          MiDulceOnline
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {title}
                        </h1>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          ${price}
                        </h1>

                        <div className="flex justify-center ">
                          <button className=" bg-violet-500 hover:bg-violet-700 w-full text-white py-[4px] rounded-lg font-bold">
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
    </Layout>
  );
};

export default AllProduct;