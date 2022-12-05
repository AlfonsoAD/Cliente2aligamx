const VideoContainer = ({ info }) => {
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
