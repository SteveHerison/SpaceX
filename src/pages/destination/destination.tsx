import Layout from "../layout";
import BackDestination from "../../assets/destination/background-destination-desktop.jpg";

const Destination = () => {
  return (
    <Layout backgroundImage={BackDestination}>
      <section className="w-full h-full flex items-center justify-center py-12 px-40 text-white">
        <div className="flex flex-col w-full h-full">
          <h1 className="text-start">opi</h1>
          <div className="flex justify-center items-center w-full h-full gap-8">
            <div className="w-full">
              <div className="flex items-center justify-center">
                ous planetas
              </div>
            </div>
            <div className="w-full ">
              <div className="flex items-center justify-center">
                ous planetas
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Destination;
