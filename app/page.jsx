import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-5 xl:pb-10">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I`m
              <br /> <span className="text-accent">Maruslam Darama</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I am a Computer Engineering student at PNU with a keen interest in Software developer. I am eager to challenge myself and work in a team environment. I believe in joining a team. It will be a great opportunity for me to develop myself and bring happiness and wholeness to all of us.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-3">
            <a href="/cv-maruslam.pdf" download className="flex items-center gap-3">
              <span>Dowlaod CV</span>
              <FiDownload/>
              </a>
            </Button>
            <div className="mb-6 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-3 xl:mb-5">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;
