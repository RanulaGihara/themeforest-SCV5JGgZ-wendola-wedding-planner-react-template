import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, }) {
  return (
  <>
  <header className={`main-header header-style-one ${isSearch ? "moblie-search-active" : ""}`}>
    
    <div className="auto-container">
      <div className="main-box">
        <div className="logo"><Link href="/"><img src="/images/logo.png" alt="" title="Wendola"/></Link></div>

        <div className="nav-outer">    
          <nav className="nav main-menu">
            <Menu />
          </nav>
          <div className="outer-box">
            <ul className="social-icon-one">
              <li><Link href="#"><i className="icon fab fa-facebook"></i></Link></li>
              <li><Link href="#"><i className="icon fab fa-google-plus-g"></i></Link></li>
              <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
            </ul>
            
            <button className="ui-btn ui-btn toggle-hidden-bar" onClick={handleMobileMenu}>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </button>

            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars"></span></div>
          </div>
        </div>
      </div>
    </div>
    {/* Mobile Menu  */}
    <div className="mobile-menu">
      <div className="menu-backdrop" onClick={handleMobileMenu} />

      <nav className="menu-box">
        <div className="upper-box">
          <div className="nav-logo"><Link href="/"><img src="/images/logo.png" alt=""  /></Link></div>
          <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
        </div>
        <MobileMenu />
        <ul className="contact-list-one light">
          <li>
            {/* Contact Info Box */}
            <div className="contact-info-box">
              <i className="icon lnr-icon-phone-handset" />
              <span className="title">Call Now</span>
              <Link href="/tel:+92880098670">+92 (8800) - 98670</Link>
            </div>
          </li>
          <li>
            {/* Contact Info Box */}
            <div className="contact-info-box">
              <span className="icon lnr-icon-envelope1" />
              <span className="title">Send Email</span>
              <Link href="/mailto:help@company.com">help@company.com</Link>
            </div>
          </li>
          <li>
            {/* Contact Info Box */}
            <div className="contact-info-box">
              <span className="icon lnr-icon-clock" />
              <span className="title">Send Email</span>
              Mon - Sat 8:00 - 6:30, Sunday - CLOSED
            </div>
          </li>
        </ul>
        <ul className="social-links">
          <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
          <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
          <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
          <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
        </ul>
      </nav>
    </div>{/* End Mobile Menu */}
    {/* Header Search */}
    <div className="search-popup">
      <span className="search-back-drop" onClick={handleSearch} />
      <button className="close-search" onClick={handleSearch}><span className="fa fa-times" /></button>
      <div className="search-inner">
        <form method="post" action="">
          <div className="form-group">
            <input type="search" name="search-field" placeholder="Search..." required />
            <button type="submit"><i className="fa fa-search" /></button>
          </div>
        </form>
      </div>
    </div>
    {/* End Header Search */}
    {/* Sticky Header  */}
    <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
      <div className="auto-container">
        <div className="inner-container">
          {/*Logo*/}
          <div className="logo">
            <Link href="/" ><img src="/images/logo-4.png" alt=""  /></Link>
          </div>
          {/*Right Col*/}
          <div className="nav-outer">
            {/* Main Menu */}
            <nav className="main-menu">
              <div className="navbar-collapse show collapse clearfix">
                <Menu />
              </div>
            </nav>{/* Main Menu End*/}
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
          </div>
        </div>
      </div>
    </div>{/* End Sticky Menu */}
  </header>

  </>
  )
}
