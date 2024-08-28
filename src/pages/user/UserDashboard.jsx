import Layout from "../../components/layout/Layout";

const products = [
  {
    id: 1,
    name: "Nike Air Force 1 07 LV8",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
    href: "#",
    price: "₹61,999",
    color: "Orange",
    imageAlt: "Nike Air Force 1 07 LV8",
    quantity: 1,
  },
];

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-5 lg:py-8">
        {/* Top  */}
        <div className="top">
          {/* main  */}
          <div className="bg-purple-50 py-5 rounded-xl border border-purple-100">
            {/* image  */}
            <div className="flex justify-center">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src="https://i.pinimg.com/736x/51/48/3e/51483e1023e110df6074cd9796227ea6.jpg"
                alt=""
              />
            </div>
            {/* text  */}
            <div className="">
              <h1 className="text-center text-lg">
                <span className="font-bold text-purple-600">Nombre:</span> {user?.name}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold text-purple-600">Correo electrónico:</span> {user?.email}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold text-purple-600">Fecha:</span> {user?.date}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold text-purple-600">Rol:</span> {user?.role}
              </h1>
            </div>
          </div>
        </div>

        {/* bottom  */}
        <div className="bottom">
          {/* main 1 */}
          <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
            {/* text  */}
            <h2 className="text-2xl lg:text-3xl font-bold text-purple-600">
              Detalles de órden
            </h2>

            {/* main 2 */}
            <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-purple-100 md:flex-row">
              {/* main 3  */}
              <div className="w-full border-r border-purple-100 bg-purple-50 md:max-w-xs">
                {/* left  */}
                <div className="p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-600">
                        Identificación de órden
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        #74557994327
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-600">Fecha</div>
                      <div className="text-sm font-medium text-gray-900">
                        26 de Agosto de 2024
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-600">Monto total</div>
                      <div className="text-sm font-medium text-gray-900">
                        $84,499
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-600">
                        Estado de órden
                      </div>
                      <div className="text-sm font-medium text-green-800">
                        Confirmada
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right  */}
              <div className="flex-1">
                <div className="p-8">
                  <ul className="-my-7 divide-y divide-gray-200">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                      >
                        <div className="flex flex-1 items-stretch">
                          <div className="flex-shrink-0">
                            <img
                              className="h-16 w-16 rounded-full border border-gray-200 object-cover"
                              src={product.imageSrc}
                              alt={product.imageSrc}
                            />
                          </div>

                          <div className="ml-5 flex flex-col justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-bold text-gray-900">
                                {product.name}
                              </p>
                              <p className="mt-1.5 text-sm font-medium text-gray-500">
                                {product.color}
                              </p>
                            </div>

                            <p className="mt-4 text-sm font-medium text-gray-500">
                              x {product.quantity}
                            </p>
                          </div>
                        </div>

                        <div className="ml-auto flex flex-col items-end justify-between">
                          <p className="text-right text-sm font-bold text-gray-900">
                            {product.price}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
