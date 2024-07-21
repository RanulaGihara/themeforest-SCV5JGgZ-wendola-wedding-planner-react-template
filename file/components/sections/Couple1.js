import Link from "next/link";
const Couple1 = () => {
  return (
    <>
      <section className="couple-section pt-0">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
              <div className="couple-block col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="page-our-story">
                        <img src="images/resource/couple-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="couple-frame"></div>
                    <div className="icon-border"></div>
                    <div className="icon-flowers-2"></div>
                  </div>
                  <div className="content-box">
                    <span className="designation">The Groom</span>
                    <h3 className="name">
                      <Link href="page-our-story">Ranula Gihara</Link>
                    </h3>
                    <div className="text">
                      My name is Thomas, and I'm filled with joy and excitement
                      to be marrying the love of my life. I feel overwhelmed
                      with gratitude for the love and support that we've
                      received from our family and friends.
                    </div>
                    <ul className="social-icon-two">
                      <li>
                        <Link href="#">
                          <i className="icon fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="icon fab fa-google"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="icon fab fa-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="couple-block style-two col-lg-6 col-md-12 col-sm-12 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="page-our-story">
                        <img src="images/resource/couple-2.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="couple-frame"></div>
                    <div className="icon-border"></div>
                    <div className="icon-flowers-2"></div>
                  </div>
                  <div className="content-box">
                    <span className="designation">The Bride</span>
                    <h3 className="name">
                      <Link href="page-our-story">Nethmi Chavindya</Link>
                    </h3>
                    <div className="text">
                      My name is Thomas, and I'm filled with joy and excitement
                      to be marrying the love of my life. I feel overwhelmed
                      with gratitude for the love and support that we've
                      received from our family and friends.
                    </div>
                    <ul className="social-icon-two">
                      <li>
                        <Link href="#">
                          <i className="icon fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="icon fab fa-google"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="icon fab fa-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Couple1;
