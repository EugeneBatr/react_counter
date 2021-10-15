import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeNames";
import Routes from "../../routes/Routes";
import Counter from "../counterPage/components/counter";



const Home = () => {
        return (
                <div>
                        <Link to={ROUTES.COUNTER}>
                                <button>
                                        Counter
                                </button>
                        </Link>
                        <h1>Home page</h1>
                </div>
        );
};

export default Home