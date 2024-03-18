import { Link } from "react-router-dom";
const Navbar = () => {
    return (

        <>

            <nav style={{backgroundColor:"rgb(65,34,142)"}} className="navbar navbar-expand-lg shadow-sm sticky-top pt-4">

                <div className="container">


                    
                    <Link to={"/"} className="navbar-brand fs-3">ROBIUL </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">


                            <li className="nav-item">
                                <Link   style={{fontWeight:"450" , color:"white"}} className="nav-link fw-blod mx-2 hvr-underline-from-left" aria-current="page" to={"/"}>HOME</Link>
                            </li>

                            <li className="nav-item">
                            <Link  style={{fontWeight:"450" , color:"white"}}  className="nav-link fw-blod mx-2 hvr-underline-from-left" aria-current="page" to={"/About"}>ABOUT ME</Link>
                            </li>

                            <li className="nav-item">
                                <Link  style={{fontWeight:"450" , color:"white"}} className="nav-link fw-blod mx-2 hvr-underline-from-left" to={"/Portfoilo"}>PORTFOLIO</Link>
                            </li>

                            

                            <li className="nav-item">
                            <Link style={{fontWeight:"450" , color:"white"}} className="nav-link fw-blod mx-2 hvr-underline-from-left" aria-current="page" to={"/Contact"} >CONTACT</Link>
                            </li>
                         
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}


export default Navbar;