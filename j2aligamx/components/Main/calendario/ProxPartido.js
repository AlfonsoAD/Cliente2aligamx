const ProxPartido = () => {
    const logoAmerica =
      "https://user-images.githubusercontent.com/90345024/201499006-ad675a3a-dfd7-44bb-8092-a06563131922.png";
    const logoCruzAzul =
      "https://user-images.githubusercontent.com/90345024/201499029-8de7b773-6efa-4289-9c47-79619bc93fd4.png";
  
    return (
      <div>
        <h2>A jornada a elegir</h2>
        <div className="flex justify-center flex-wrap">
          <div className="m-12">
            <img src={logoAmerica} className="h-14 w-14" />
          </div>
          <div className="m-12">
            <img src={logoCruzAzul} className="h-14 w-14" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mr-8 ml-4 w-12 h-14 text-black text-center">
            <h3>0</h3>
          </div>
          <div className="mr-4 ml-4 w-12 h-14 text-black">
            <h3>vs</h3>
          </div>
          <div className="mr-4 ml-8 w-12 h-14 text-black">
            <h3>0 </h3>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-24 w-24">
            <p>por definir</p>
            <p>Fecha ya establecida o por definir</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProxPartido;
  