import Slideshow from "../components/Slideshow"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <main id="home" className="py-10 bg-transparent h-screen flex flex-col">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-me-bg mb-4 p-6 shadow sm:rounded-lg">
            <p className="text-lg text-gray-100">
              As a dedicated software engineer, I specialize in back end development. This website was built as an exploration of a new technology and language for me, Next.JS and JavaScript. As someone for whom constant learning is crucial, this was a fantastic experience. To learn more about me and all of the other projects I&apos;ve completed, use the navigation bar above!
            </p>
            <div className="image-container py-4 px-2">
              <Slideshow />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}
