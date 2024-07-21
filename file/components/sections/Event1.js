import Link from "next/link"
const Event1 = () => {
    return (
        <>
            <section className="event-section">
                <div className="anim-icons full-width">
                    <div className="icon-flowers-3 bounce-y"></div>
                    <div className="icon-shape-1 bounce-y"></div>
                    <span className="icon-circle zoom-two"></span>
                    <span className="float-text">Wendola</span>
                </div>
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">Welcome to this beautiful location</span>
                        <h2>Official Ceremony</h2>
                    </div>
                    <div className="row">
                    
                        <div className="event-block col-lg-4 col-md-12 col-sm-12 wow fadeInLeft">
                            <div className="inner-box">
                                <figure className="image overlay-anim"><Link href="images/resource/event-1.jpg" className="lightbox-image"><img src="images/resource/event-1.jpg" alt="Image"/></Link></figure>
                                <div className="text">Today, we celebrate the love and commitment of this wonderful couple.</div>
                                <Link href="page-events" className="theme-btn btn-style-one"><span className="btn-title">View Map</span></Link>
                            </div>
                        </div>

                        <div className="event-info-block col-lg-8 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="text">From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for the joyous occassion. As we stand here today, surrounded by the beauty of this park, we are reminded of the enduring power of the love.</div>
                                    <div className="event-time"><i className="icon flaticon-alarm"></i> 10:30 am in the quare villa</div>
                                </div>
                                <figure className="image overlay-anim"><Link href="images/resource/event-2.jpg" className="lightbox-image"><img src="images/resource/event-2.jpg" alt="Image"/></Link></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Event1