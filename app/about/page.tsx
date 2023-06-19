import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar";


export default function About() {
  return (
    <div>
      <Navbar />
      <main id="home" className="py-10 bg-transparent h-screen flex flex-col">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold about-me-text mb-4">About Me</h1>
            <div className="about-me-bg p-6 shadow sm:rounded-lg">
              <p className="text-lg text-gray-100">
                Hello! I&apos;m Samuel Cox, a passionate Software Engineer based in the Denver Area. Let me tell you a little bit about myself.
              </p>
              <p className="mt-4 text-gray-100">
                I am a recent career changer! I spent seven years in the automotive industry, spending time working in a variety of roles. I worked in technical roles, customer facing roles, and financial roles. I also spent time working for a business to business SaaS company! I have just completed the Turing School of Software and Design&apos;s Back End Engineering program, and I am excited for what is to come!
              </p>
              <p className="mt-4 text-gray-100">
                I believe that complex problems are best solved by taking the right approach, and that those problems often have simpler solutions than one might think. I hold critical thinking and problem solving as my most proud skills, and truly believe that those will take me far!
              </p>
              <p className="mt-4 text-gray-100">
                I am skilled in multiple different languages and frameworks, such as Ruby on Rails,  Next.JS, Python, and others! I have experience in multiple development philosophies, such as test driven development and dream driven development. I am also a strong communicator with a love for a team environment, and someone who can adapt quickly to a fast paced work environment!
              </p>
              <p className="mt-4 text-gray-100">
                In my free time, I am an avid mountain biker. I love to spend time with my wife, Megan, and two dogs, Frankie and Fiona. I also love problem solving, even in my free time, so you might find me taking a quiz on baseball statistics or completing a fun Lego set!
              </p>
              <p className="mt-4 text-gray-100">
                I am extremely excited to contribute to the world of software development, and I would love to talk more about how I can help your company!
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
  )
}
