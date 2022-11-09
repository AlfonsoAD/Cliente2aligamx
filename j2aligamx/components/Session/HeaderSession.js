const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-center flex-wrap h-25 bg-gradient-to-r from-header to-blueMenu ...">
        <div className="flex flex-nowrap p-2 shadow md:px-2 md:py-2 justify-center">
          <img
            width="90"
            height="90"
            src={
              "https://user-images.githubusercontent.com/90345024/200611188-36f932c9-ffba-4a67-a66b-1c1fd0ed1b89.png"
            }
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
