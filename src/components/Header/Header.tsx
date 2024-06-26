import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";

const Header: React.FC = () => {
  const location = useLocation();

  const linkClass = (path: string): string => {
    return location.pathname === path
      ? "border-b-2 border-white"
      : "hover:border-b-2 hover:border-gray-500";
  };

  return (
    <div className="w-full pt-10 absolute">
      <div className="h-24 flex items-center justify-center ">
        <img className="pl-16 pr-16" src={Logo} alt="Logo" />
        <div className="flex-grow w-96 relative">
          <hr className="absolute w-full z-10 border-t border-opacity-25 border-white mx-4 custom-hr" />
        </div>
        <ul className="h-full min-w-[664px] flex gap-12 items-center justify-center bg-white font-barlow-condensed text-lg rounded-s-xl text-white bg-opacity-5 backdrop-blur-lg">
          <li className={`flex items-center h-full ${linkClass("/")}`}>
            <Link to="/" className="h-full flex items-center">
              00 HOME
            </Link>
          </li>
          <li
            className={`flex items-center h-full ${linkClass("/destination")}`}
          >
            <Link to="/destination" className="h-full flex items-center">
              01 DESTINATION
            </Link>
          </li>
          <li className={`flex items-center h-full ${linkClass("/crew")}`}>
            <Link to="/crew" className="h-full flex items-center">
              02 CREW
            </Link>
          </li>
          <li
            className={`flex items-center h-full ${linkClass("/technology")}`}
          >
            <Link to="/technology" className="h-full flex items-center">
              03 TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
