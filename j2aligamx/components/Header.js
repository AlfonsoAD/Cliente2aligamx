const Header = () => {
  return (
    <nav className="flex items-center justify-center flex-wrap bg-header h-25">
      <div className="flex flex-nowrap p-2 shadow md:px-2 md:py-2 justify-center">
        <img
          width="90"
          height="90"
          src={
            "https://user-images.githubusercontent.com/90345024/197927557-deb847bc-1cf7-47d8-8f9d-4d11b925734b.png"
          }
        />
      </div>
    </nav>
  );
};

export default Header;
