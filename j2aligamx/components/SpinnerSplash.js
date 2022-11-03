const SpinnerSplash = () => {
  return (
    <div className="flex h-screen min-h-full items-center justify-center bg-cover bg-header">
      <div className="bg-header">
        <img
          className="animate-spin-slow"
          width="150"
          height="150"
          src={
            "https://user-images.githubusercontent.com/90345024/197927557-deb847bc-1cf7-47d8-8f9d-4d11b925734b.png"
          }
        />
      </div>
    </div>
  );
};

export default SpinnerSplash;
