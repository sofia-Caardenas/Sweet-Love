import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
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

const UpdateProductPage = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProductFunction } = context;

  // navigate
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Get Single Product Function
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      //   console.log(product.data())
      const product = productTemp.data();
      setProduct({
        title: product?.title,
        price: product?.price,
        productImageUrl: product?.productImageUrl,
        category: product?.category,
        description: product?.description,
        quantity: product?.quantity,
        time: product?.time,
        date: product?.date,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", id), product);
      toast.success("Product Updated successfully");
      getAllProductFunction();
      setLoading(false);
      navigate("/admin-dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProductFunction();
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="login_Form bg-red-50 px-8 py-6 border border-red-100 rounded-xl shadow-md">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold text-violet-500 ">
              Actualizar producto
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
              className="bg-red-50 border text-violet-300 border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-violet-300"
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
              placeholder="Precio del producto "
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
              placeholder="Imagen url del producto "
              className="bg-red-50 border text-violet-300 border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-violet-300"
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
              className="bg-red-50 border text-violet-300 border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-violet-300"
            >
              <option disabled>Selecciona la categoría del producto</option>
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
              placeholder="Descripción del producto"
              rows="5"
              className="bg-red-50 border text-violet-300 border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-violet-300"
            ></textarea>
          </div>

          {/* Update Product Button  */}
          <div className="mb-3">
            <button
              onClick={updateProduct}
              type="button"
              className="bg-red-50 border text-violet-300 border-red-200 px-2 py-2 w-96 rounded-md outline-none placeholder-violet-300"
            >
              Actualízalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductPage;
