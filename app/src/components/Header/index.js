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
                        <Link to={ROUTES.USERS_PAGE}>
                        <button>
                                Users Page
                        </button>
                        </Link>
                </div>
        );
};

export default Header