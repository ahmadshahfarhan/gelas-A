const Navbar = () => {
  return (
    <>
      <div className="w-full bg-transparent py-4 px-12 top-3 left-0 right-0 z-50 absolute">
        <div className=" flex items-center justify-between">
          <h1 className="base-white-text title-font text-4xl">GELAS A</h1>
          <ul className=" flex items-center gap-11 base-white-text text-md">
            <li>Home</li>
            <li>About Us</li>
            <li>Testimoni</li>
            <li>Produk</li>
          </ul>
          <button className=" text-black font-semibold text-[15px] base-white-bg py-2 px-5 rounded-4xl">Order Now</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
