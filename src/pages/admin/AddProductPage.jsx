import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";

const categoryList = [
  {
    name: "Pasabocas",
  },
  {
    name: "Confiteria",
  },
  {
    name: "Galletas",
  },
  {
    name: "Mermeladas",
  },
  {
    name: "Caramelos",
  },
  {
    name: "Ponques",
  },
  {
    name: "Chocolates",
  },
];

const AddProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Add Product Function
  const addProductFunction = async () => {
    if (
      product.title == "" ||
      product.price == "" ||
      product.productImageUrl == "" ||
      product.category == "" ||
      product.description == ""
    ) {
      return toast.error("Todos los datos son requeridos");
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, "product");
      await addDoc(productRef, product);
      toast.success("Producto añadido exitosamente");
      navigate("/admin-dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add product failed");
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-red-50 px-8 py-6 border border-red-100 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-violet-500 ">
              Añadir producto
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              placeholder="Nombre del producto"
              className="bg-red-50 border text-violet-300 border-violet-200 px-2 py-2 w-96 rounded-md outline-none placeholder-red-300"
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              placeholder="Precio del Producto"
              className="bg-red-50 border text-violet-300 border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-violet-300"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value,
                });
              }}
              placeholder="Imagen url del Producto"
              className="bg-red-50 border text-violet-300 border-violet-200 px-2 py-2 w-96 rounded-md outline-none placeholder-violet-300"
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select
              value={product.category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              className="w-full px-1 py-2 text-violet-300 bg-violet-50 border border-violet-200 rounded-md outline-none  "
            >
              <option disabled>Selecciona una categoría de producto</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              name="description"
              placeholder="Descripción del Producto"
              rows="5"
              className=" w-full px-2 py-1 text-violet-300 bg-violet-50 border border-violet-200 rounded-md outline-none placeholder-violet-300 "
            ></textarea>
          </div>

          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              onClick={addProductFunction}
              type="button"
              className="bg-violet-500 hover:bg-violet-600 w-full text-white text-center py-2 font-bold rounded-md "
            >
              Agrégalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
