import { Link } from "react-router-dom"
function NavBar() {
    return(
        <div className="navbar">
            <h3>TechEdu</h3>
            <div className="navlinks">
                <ul>
                    <li><Link to='/'>Home Page</Link></li>
                    <li><Link to='/QuizPage'>Quiz Page</Link></li>
                    <li><Link to='/ResultPage'>Result Page</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar