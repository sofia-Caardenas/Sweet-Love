import Layout from "../../components/layout/Layout";

const ProductInfo = () => {
    return (
        <Layout>
            <section className="py-5 lg:py-16 font-poppins bg-purple-100">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <div className="">
                                <div className="">
                                    <img
                                        className="w-full lg:h-[39em] rounded-lg"
                                        src="../../public/img/products/heart.jpg"
                                        alt="Hersheys Heart"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6">
                                    <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-purple-800 md:text-2xl dark:text-gray-300">
                                        Hersheys Heart
                                    </h2>
                                    <div className="flex flex-wrap items-center mb-6">
                                        <ul className="flex mb-4 mr-2 lg:mb-0">
                                            <li>
                                                <a href="">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="w-4 mr-1 text-yellow-500 dark:text-gray-400 bi bi-star "
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            {/* Add more stars if needed */}
                                        </ul>
                                    </div>
                                    <p className="inline-block text-2xl font-semibold text-purple-800 dark:text-gray-400">
                                        <span>$12,000</span>
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h2 className="mb-2 text-lg font-bold text-purple-800 dark:text-gray-400">
                                        Description :
                                    </h2>
                                    <p>
                                        El Hersheys Heart es un chocolate delicioso y suave, con un corazón
                                        cremoso en el centro. Ideal para regalar o para disfrutar en momentos
                                        especiales. Su sabor único combina la rica dulzura del chocolate con
                                        un relleno cremoso, creando una experiencia inigualable. Perfecto para
                                        aquellos que buscan un capricho dulce y memorable.
                                    </p>
                                </div>

                                <div className="mb-6" />
                                <div className="flex flex-wrap items-center mb-6">
                                    <button
                                        className="w-full px-4 py-3 text-center text-white bg-purple-600 border border-purple-600 hover:bg-purple-700 hover:text-gray-100 rounded-xl"
                                    >
                                        Add to cart
                                    </button>
                                </div>
            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default ProductInfo;
