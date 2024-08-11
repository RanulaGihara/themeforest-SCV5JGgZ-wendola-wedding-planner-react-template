import Link from "next/link"

export default function Footer1() {
	return (
	<>
	<footer className="main-footer footer-style-one">
		<div className="bg bg-pattern-3"></div>
		<div className="footer-upper">
			<div className="auto-container">
				<div className="outer-box">
					{/* <div className="upper-left">
						<div className="logo"><img src="images/logo.png" alt="Logo" title="Wendola"/></div>
					</div> */}
					<div className="upper-center">
						<div className="text">"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres." </div>
					</div>
					{/* <div className="upper-right">
						<ul className="social-icon-one">
							<li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
							<li><Link href="#"><i className="fab fa-google"></i></Link></li>
							<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
						</ul>
					</div> */}
				</div>
			</div>
		</div>
		<div className="widgets-section">
			<div className="auto-container">
				<div className="row">
					<div className="footer-column col-xl-4 col-lg-4 col-md-5 col-sm-12">
						<div className="footer-widget contact-widget">
							<h6 className="widget-title">Contact Us</h6>
							<div className="widget-content">
								<ul className="contact-list light">
									<li><i className="icon far fa-envelope"></i><Link href="#">nera.us4ever@gmail.com</Link></li>
									<li><i className="icon far fa-mobile"></i><Link href="#">+(94) 719340435</Link></li>
									<li><i className="icon far fa-map-marker-alt"></i><Link href="#">Matara,Sri Lanka</Link></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <div className="footer-column col-xl-8 col-lg-8 col-md-7 col-sm-12">
						<div className="footer-widget newsletter-widget">
							<h6 className="widget-title">Sign up to Our Newsletter</h6>
							<div className="widgets-content">
								<div className="text">Receive fresh blog content and invites to our webinars.</div>
								<div className="newsletter-form-one">
									<form method="post" action="#">
										<div className="form-group">
											<input type="email" name="email" className="email" placeholder="Enter your email...." required/>
											<button type="button" className="theme-btn btn-style-one hover-light"><span className="btn-title">Subscribe</span></button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
		<div className="footer-bottom">
			<div className="auto-container">
				<div className="copyright-text">Copyright © Ranula Gamage . All rights reserved.</div>
			</div>
		</div>
	</footer>

	</>
	)
}
