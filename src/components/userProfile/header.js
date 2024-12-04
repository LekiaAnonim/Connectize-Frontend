const Header = ({ company }) => {
  return (
    <>
      <section className="relative">
        <img
          src={company.banner || "images/dangote.png"}
          alt={`${company.company_name}'s banner`}
          className="w-full min-h-64 aspect-auto"
        />
        <img
          src={company.logo || "/images/dangotelogo.png"}
          alt="company logo"
          className="absolute left-[7%] md:left-[3%] bottom-10 w-[90px] lg:w-[120px]"
        />
      </section>
    </>
  );
};

export default Header;
