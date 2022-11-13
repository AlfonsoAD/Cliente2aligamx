const FooterMain = () => {
  return (
    <div className=" bg-blueMenu">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3"> J2A LIGA MX </h3>
          <p>Todo sobre la Liga BBVA MX</p>
          <div className="flex justify-center my-10">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
              <img
                src="https://user-images.githubusercontent.com/90345024/201531111-cfc7e1a9-a4c3-4250-b2cf-d4f3752a348c.png"
                className="w-14 h-10"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Visita</p>
                <p className="text-sm md:text-base"> J2A LIGA MX</p>
              </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
              <img
                src="https://user-images.githubusercontent.com/90345024/201531355-c7207a2d-a368-400f-9b40-3077c7d9fb47.png"
                className="w-10 h-8"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Siguenos</p>
                <p className="text-sm md:text-base">J2ALMX</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            {" "}
            &copy; J2A LIGA MX, 2022.{" "}
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2">Acerca de nosotros</span>
            <span className="px-2 border-l">Contáctanos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
