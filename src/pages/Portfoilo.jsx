
import Project from './Project';
import Navbar from './Navbar';
import Footer from './Footer';
const Portfoilo = () => {
    return (
        <>

         <Navbar />

            <section className="Portfoilo container mt-5 mb-5 ">

                <h1>
                    Things I’ve made trying to put my <br /> dent in the universe.
                </h1>

                <p>
                I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.
                </p>


            </section>

                <Project />

                <Footer />

        </>
    );
}

export default Portfoilo;