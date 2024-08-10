import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Countdown1 from "@/components/sections/Countdown1"
import CallToAction1 from "@/components/sections/CallToAction1"
// import Clients1 from "@/components/sections/Clients1"
import Contact1 from "@/components/sections/Contact1"
import Couple1 from "@/components/sections/Couple1"
import Event1 from "@/components/sections/Event1"
import Gallery1 from "@/components/sections/Gallery1"
import GallerySlider1 from "@/components/sections/GallerySlider1"
import Services1 from "@/components/sections/Services1"
// import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
export default function Home() {

  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <Banner1 />
    <Countdown1 />
    <Couple1 />
    <Event1 />
    <Services1 />
    <Testimonial1 />
    <Gallery1 />
    {/* <Team1 /> */}
    <CallToAction1 />
    <Contact1 />
    {/* <Clients1 /> */}
    <GallerySlider1 />
    </Layout>
    </>
  )
}