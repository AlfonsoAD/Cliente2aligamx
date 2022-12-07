//BY CESAR CASTRO SALAZAR 18100157
//Componente que recibe una propiedad con la url del video
const VideoContainer = ({ info }) => {
  //Modificando url para que sea posible mostrarse
  info = info.replace("watch?v=", "embed/");

  return (
    <div>
      <iframe
        className="w-full aspect-video hover:aspect-square"
        controls
        src={info}
      ></iframe>
    </div>
  );
};

export default VideoContainer;
