import Image from "next/image";

const Header = () => {
  const IMG_URL =
    "https://user-images.githubusercontent.com/90345024/200611188-36f932c9-ffba-4a67-a66b-1c1fd0ed1b89.png";

  return (
    <div>
      <nav className="flex items-center justify-center flex-wrap h-18 bg-gradient-to-r from-header to-blueMenu ...">
        <div className="flex flex-nowrap p-2 shadow md:px-2 md:py-2 justify-center">
          <img width="60" height="60" src={IMG_URL} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
