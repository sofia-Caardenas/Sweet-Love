import { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Trash } from "lucide-react";

const CartPage = () => {
  // Inicializa el estado del carrito con los productos especificados
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "../../public/img/products/heart.jpg",
      title: "Chocolate HERSHEYS en forma de corazón x 30un",
      desc: "Deliciosos chocolates en forma de corazón de Hersheys, ideales para regalar o disfrutar en cualquier momento.",
      price: 10700,
      quantity: 1,
    },
    {
      id: 2,
      image: "../../public/img/products/biscolata.jpg",
      title: "Galletas rellenas de chocolate BISCOLATA x 12un",
      desc: "Galletas rellenas de chocolate para darle un toque dulce y divertido a tu lonchera.",
      price: 6400,
      quantity: 1,
    },
    // Otros productos...
  ]);

  // Estado para mostrar el mensaje de confirmación
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Función para aumentar la cantidad de un producto
  const handleIncreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Función para disminuir la cantidad de un producto
  const handleDecreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Función para eliminar un producto del carrito
  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Función para manejar el proceso de compra
  const handleCheckout = () => {
    const user = JSON.parse(localStorage.getItem("users"));
    if (user) {
      setShowConfirmation(true);
      // Aquí podrías agregar una lógica para redirigir al usuario después de la confirmación
      // setTimeout(() => window.location.href = '/somepage', 3000);
    } else {
      alert('Por favor, inicie sesión para proceder con la compra.');
      // Redirige a la página de inicio de sesión si no está logueado
      window.location.href = '/login';
    }
  };

  // Calcular el precio total
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-brown-900 sm:text-4xl">
            Carrito de compras
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items en tu carrito de compras
              </h2>
              <ul role="list" className="divide-y divide-brown-200">
                {cartItems.map((product) => (
                  <div key={product.id} className="">
                    <li className="flex py-6 sm:py-6 ">
                      <div className="flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <a
                                  href="#"
                                  className="font-semibold text-brown-900"
                                >
                                  {product.title}
                                </a>
                              </h3>
                            </div>
                            <div className="mt-1 flex text-sm">
                              <p className="text-sm text-brown-500">
                                {product.desc}
                              </p>
                            </div>
                            <div className="mt-1 flex items-end">
                              <p className="text-sm font-medium text-brown-900">
                                {product.price} COP
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <div className="mb-2 flex">
                      <div className="min-w-24 flex">
                        <button
                          type="button"
                          className="h-7 w-7 text-brown-700"
                          onClick={() => handleDecreaseQuantity(product.id)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="mx-1 h-7 w-9 rounded-md border text-center border-brown-300"
                          value={product.quantity}
                          readOnly
                        />
                        <button
                          type="button"
                          className="flex h-7 w-7 items-center justify-center text-brown-700"
                          onClick={() => handleIncreaseQuantity(product.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="ml-6 flex text-sm">
                        <button
                          type="button"
                          className="flex items-center space-x-1 px-2 py-1 pl-0"
                          onClick={() => handleRemoveItem(product.id)}
                        >
                          <Trash size={12} className="text-red-500" />
                          <span className="text-xs font-medium text-red-500">
                            Quitar
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </section>
            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className=" border-b border-brown-200 px-4 py-3 text-lg font-medium text-brown-900 sm:p-4"
              >
                Detalles de precio
              </h2>
              <div>
                <dl className="space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-brown-800">Precio total</dt>
                    <dd className="text-sm font-medium text-brown-900">
                      {totalPrice} COP
                    </dd>
                  </div>
                  <div className="px-2 pb-4 font-medium text-purple-700">
                    <div className="flex gap-4 mb-6">
                      <button
                        type="button"
                        onClick={handleCheckout}
                        className="w-full px-4 py-3 text-center text-purple-600 bg-brown-500 border border-transparent dark:border-brown-700 hover:border-brown-500 hover:text-brown-700 hover:bg-brown-100 rounded-xl"
                      >
                        Compra ahora
                      </button>
                    </div>
                  </div>
                </dl>
              </div>
            </section>
          </form>
        </div>
        {showConfirmation && <ConfirmationMessage />}
      </div>
    </Layout>
  );
};

const ConfirmationMessage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-semibold mb-4">¡Compra Confirmada!</h2>
        <p className="mb-4">¡Gracias por tu compra! Tu pedido ha sido confirmado.</p>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default CartPage;
