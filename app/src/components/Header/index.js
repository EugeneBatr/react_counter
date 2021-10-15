import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeNames";

const Header = () => {
        return (
                <div>
                        <Link to={ROUTES.HOME}>
                                <button>
                                        Home
                                </button>
                        </Link>
                </div>
        );
};

export default Header