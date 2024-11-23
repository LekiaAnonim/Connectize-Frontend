const Header = () => {
  return (
    <>
      <section className="relative">
        <img
          src="images/dangote.png"
          alt="{company} hero"
          className="w-full min-h-64 aspect-auto"
        />
        <img
          src="/images/dangotelogo.png"
          alt="company logo"
          className="absolute left-[7%] md:left-[3%] bottom-10 w-[90px] lg:w-[120px]"
        />
      </section>
    </>
  );
};

export default Header;
