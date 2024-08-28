// category
const category = [
  {
    image: "../../public/img/icons_products/todorico.png",
    name: "Pasabocas",
  },
  {
    image: "../../public/img/icons_products/confiteria.png",
    name: "Confiteria",
  },
  {
    image: "../../public/img/icons_products/galletas.png",
    name: "Galletas",
  },
  {
    image: "../../public/img/icons_products/mermeladas.png",
    name: "Mermeladas",
  },
  {
    image: "../../public/img/icons_products/caramelos.png",
    name: "Caramelos",
  },
  {
    image: "../../public/img/icons_products/ponques.png",
    name: "Ponques",
  },
  {
    image: "../../public/img/icons_products/chocolates.png",
    name: "Chocolates",
  },
];

const Category = () => {
  return (
    <div>
      <div className="flex flex-col mt-5">
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
          {/* main 2  */}
          <div className="flex">
            {/* category  */}
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  {/* Image  */}
                  <div className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-purple-300 transition-all hover:bg-purple-400 cursor-pointer mb-1">
                    <div className="flex justify-center mb-12">
                      {/* Image tag  */}
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  {/* Name Text  */}
                  <h1 className="text-sm lg:text-lg text-center font-medium title-font text-purple-600 first-letter:uppercase">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
