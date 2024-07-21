import Link from "next/link";

export default function Menu() {

  return (
  <>
  <ul className="navigation">
    <li className="current dropdown"><Link href="/">Home</Link>
      <ul>
        <li><Link href="/">Home page 01</Link></li>
        <li><Link href="/index-2">Home page 02</Link></li>
        <li><Link href="/index-3">Home page 03</Link></li>
        <li><Link href="/index-4">Home page 04</Link></li>
        <li><Link href="/index-5">Home page 05</Link></li>
        <li className="dropdown"> <Link href="#">Invitation</Link>
          <ul>
            <li><Link href="index-invitation">Style One</Link></li>
            <li><Link href="index-invitation2">Style Two</Link></li>
            <li><Link href="index-invitation3">Style Three</Link></li>
            <li><Link href="index-invitation4">Style Four</Link></li>
          </ul>
          <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
        </li>
      </ul>
    </li>
    <li className="dropdown"><Link href="#">About</Link>
      <ul>
        <li><Link href="page-about">About</Link></li>
        <li><Link href="page-rsvp">RSVP</Link></li>
        <li><Link href="page-gift">Gift</Link></li>
        <li><Link href="page-gallery">Gallery</Link></li>
        <li><Link href="page-bride-and-groom">Bride &amp; Groom</Link></li>
        <li><Link href="page-our-story">Our Story</Link></li>
        <li><Link href="page-our-timeline">Our Timeline</Link></li>
      </ul>
      <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
    </li>
    <li className="dropdown"> <Link href="#">Pages</Link>
      <ul>
        <li className="dropdown"> <Link href="#">Events</Link>
          <ul>
            <li><Link href="page-events">Events</Link></li>
            <li><Link href="page-event-details">Events Details</Link></li>
          </ul>
          <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
        </li>
        <li className="dropdown"> <Link href="#">Team</Link>
          <ul>
            <li><Link href="page-team">Team List</Link></li>
            <li><Link href="page-team-details">Team Details</Link></li>
          </ul>
          <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
        </li>
        <li><Link href="page-pricing">Pricing</Link></li>
        <li><Link href="page-testimonial">Testimonial</Link></li>
        <li><Link href="page-faq">FAQ</Link></li>
        <li><Link href="page-error">Page 404</Link></li>
      </ul>
      <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
    </li>
    <li className="dropdown"><Link href="/news-grid">News</Link>
      <ul>
        <li><Link href="/news-grid">News Grid</Link></li>
        <li><Link href="/news-details">News Details</Link></li>
      </ul>
    </li>
    <li><Link href="/page-contact">Contact</Link></li>
  </ul>
  </>
  )
}
