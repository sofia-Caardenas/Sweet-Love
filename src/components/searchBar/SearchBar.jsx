import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

// Search Data
const searchData = [
  {
    name: "Chocolatinas",
    image: "../../public/img/icons_products/chocolates.png",
  },
  {
    name: "Confiteria y dulces",
    image: "../../public/img/icons_products/confiteria.png",
  },
  {
    name: "Dulces típicos",
    image: "../../public/img/icons_products/caramelos.png",
  },
  {
    name: "Galletas",
    image: "../../public/img/icons_products/galletas.png",
  },
  {
    name: "Pasabocas",
    image: "../../public/img/icons_products/pasabocas.png",
  },
  {
    name: "Tortas y ponques",
    image: "../../public/img/icons_products/ponques.png",
  },
  {
    name: "Mermeladas",
    image: "../../public/img/icons_products/mermeladas.png",
  },
];

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const filterSearchData = searchData
    .filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 8);
  const clearSearch = () => setSearch("");
  return (
    <div className="">
      <div className="input flex justify-center relative">
        <input
          type="text"
          value={search}
          placeholder="Busca tu producto aquí..."
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#e6d6ff] placeholder-[#bfbfbf] rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-[#333] pr-10"
        />
        <div className="absolute right-2 top-2">
          {search ? (
            <AiOutlineClose
              className="text-[#f7b7a3] text-2xl cursor-pointer"
              onClick={clearSearch}
            />
          ) : (
            <CiSearch className="text-[#f7b7a3] text-2xl" />
          )}
        </div>
      </div>
      <div className="flex justify-center">
        {search && (
          <div
            className="block absolute bg-[#f3f0f8] w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2 border border-[#dcdcdc]"
          >
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => (
                  <div key={index} className="py-2 px-2">
                    <div className="flex items-center gap-2">
                      <img className="w-10" src={item.image} alt={item.name} />
                      {item.name}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="flex justify-center">
                <img
                  className="w-50 rounded-lg"
                  src="../public/searchBar/404.png"
                  alt="Sin resultados"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
