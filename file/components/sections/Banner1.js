const Banner1 = () => {
  return (
    <>
      <section className="banner-section">
        <div
          className="bg bg-pattern-1 wow fadeIn"
          data-wow-delay="1500ms"
        ></div>
        <div className="auto-container">
          <div className="row">
            <div className="content-box">
              <div className="date wow fadeInUp">
                December 23, 2023 - — Matara Sri Lanka
              </div>
              <div className="name wow fadeInUp" data-wow-delay="300ms">
                Nethmi<span className="icon-heart"></span>Ranula
              </div>
              <div className="text wow fadeInUp" data-wow-delay="600ms">
                We would love to meet up and chat about how we can <br /> make
                your dram wedding happen!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner1;
