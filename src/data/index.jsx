import Hero from './../pages/Hero'; 
import Navbar from './../pages/Navbar';
import MySkill from './../pages/MySkill';
import Intro from './../pages/Intro';
import Footer from './../pages/Footer';
import Project from './../pages/Project';



const Home = ()=>
{
    return(
        <>
        
        <Navbar />
        <Hero />
        <br /><br /><br />
        <Project />    
        <br /><br /><br />
        <MySkill />
        <Footer />
        
        </>
    );
}

export default Home