import CarrouselOptions from "./CarrouselOptions";

const ModalDetail = () => {
    const logoAmerica =
    "https://user-images.githubusercontent.com/90345024/201499006-ad675a3a-dfd7-44bb-8092-a06563131922.png";
  const logoCruzAzul =
    "https://user-images.githubusercontent.com/90345024/201499029-8de7b773-6efa-4289-9c47-79619bc93fd4.png";

    return (
        <div>
            <div className="max-w-2xl mx-auto">
            <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            type="button" 
            data-modal-toggle="default-modal">
            Detalles
            </button>

            <div id="default-modal" data-modal-show="false" aria-hidden="true" className="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center">
                <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
                    <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
                        <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
                            <div className="flex justify-center flex-wrap">
                                <div className="m-12">
                                <img src={logoAmerica} className="h-14 w-14" />
                                </div>
                                <div className="m-12 mr-4 ml-4 w-12 h-14 text-black">
                                <h3>0</h3>
                                </div>
                                <div className="m-12 mr-4 ml-4 w-12 h-14 text-black">
                                <h3>vs</h3>
                                </div>
                                <div className="m-12 mr-4 ml-4 w-12 h-14 text-black">
                                <h3>2</h3>
                                </div>
                                <div className="m-12">
                                <img src={logoCruzAzul} className="h-14 w-14" />
                                </div>
                            </div>
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="default-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            
                            <CarrouselOptions/>

                        </div>

                        <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-toggle="default-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

        <p className="mt-5">This modal element is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official <a className="text-blue-600 hover:underline" href="#" target="_blank">Flowbite Documentation</a>.</p>
        </div>
        <script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js"></script>
    </div>
            
    );
};
  
export default ModalDetail;