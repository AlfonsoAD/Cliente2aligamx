const SpinnerSplash = () => {
  return (
    <div className="flex h-screen min-h-full items-center justify-center bg-cover bg-gradient-to-r from-header to-blueMenu ...">
      <img
        className="animate-spin-slow"
        width="150"
        height="150"
        src={
          "https://user-images.githubusercontent.com/90345024/200611188-36f932c9-ffba-4a67-a66b-1c1fd0ed1b89.png"
        }
      />
    </div>
  );
};

export default SpinnerSplash;
