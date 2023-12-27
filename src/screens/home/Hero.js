export default function Hero() {
  return (
    <section className="home-hero h-[calc(100vh_-_86px)] relative">
      <img
        src={require("../../assets/images/home-hero-banner.png")}
        alt="Glamore hero banner"
        className="size-full object-cover object-center"
      />

      <div className="absolute inset-0 text-white">
        <div className="container mx-auto grid grid-cols-2 h-full">
          <div className="relative text-5xl">
            <div className="absolute left-0 top-1/3 gap-8 -translate-y-1/2 flex flex-col text-9xl">
              <span className="italic font-serif">Glamore -</span>
              <span>Flash Sale</span>
            </div>
            <h2 className="text-4xl absolute bottom-1/3 translate-y-1/2">
              Make you look different with that old-fashioned clothes and
              impress others
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 text-9xl">
              <div className="relative">
                <img
                  src={require("../../assets/images/promo-star.svg").default}
                  alt="promo star"
                />
                <div className="absolute top-0 -left-10 flex flex-col overflow-auto">
                  <span className="text-7xl text-nowrap">Starts from</span>
                  <span className="text-9xl">54K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
