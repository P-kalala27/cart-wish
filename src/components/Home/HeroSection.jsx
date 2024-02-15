
const HeroSection = ({title, text,img}) => {
  return (
    <section className="flex flex-col w-full bg-black h-auto lg:flex-row">
      <div className="lg:flex lg:flex-row-reverse lg:my-10 lg:w-3/4 lg:mx-auto">
      <div className="justify-center flex-col">
        <img src={img} className=" scale-100 hover:scale-110 transition-all "
         width={500} height={500} alt="iphone image "
        />
      </div>
      <div className="flex flex-col  flex-wrap justify-center items-center text-white">
        <div className="flex flex-col justify-center items-center w-3/4 mx-auto">
          <div className="py-4">
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
          <div className="w-3/4 py-2 flex-col justify-center items-center text-center">
            <p className=" leading-7 pb-4 text-xl">
              {text}
            </p>
            
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
