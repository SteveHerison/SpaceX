import Layout from "../layout/index";
import homeBackground from "../../assets/home/background-home-desktop.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout backgroundImage={homeBackground}>
      <section className="w-full h-full flex items-end justify-center py-32 px-40">
        <div className="text-white flex">
          <div className="flex flex-col w-1/3 justify-center">
            <span
              className="text-xl font-barlow-condensed self-stretch text-light-blue"
              style={{ letterSpacing: "4px" }}
            >
              SO, YOU WANT TO TRAVEL TO
            </span>
            <h1 className="text-9xl font-bellefair self-stretch text-white leading-normal">
              SPACE
            </h1>
            <p className="text-md font-barlow font-normal leading-relaxed">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!Let’s face it; if you want to go to space,
              you might as well genuinely go to outer space and not hover kind
              of on the edge of it. Well sit back, and relax because we’ll give
              you a truly out of this world experience!
            </p>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Link
              to="/destination"
              className="rounded-full w-80 h-80 ease-in duration-300 hover:bg-white hover:bg-opacity-10 flex items-center justify-center"
            >
              <button className="flex items-center justify-center w-60 h-60 bg-white text-black rounded-full">
                <span className="text-xl uppercase font-normal opacity-50 font-bellefair">
                  EXPLORER
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
