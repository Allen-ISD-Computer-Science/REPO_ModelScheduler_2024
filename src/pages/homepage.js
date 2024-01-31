import { HomepageLayout } from "@/components/Layout";
import { Image } from "@nextui-org/image";
import AllenLogo from "../components/Images/AllenISDLogo.png";

const Homepage = () => {
  return (
    <>
      {/* Contains link to: FAQ, Classes, Scheduler(?), Feedback */}
      <HomepageLayout>
      {/* <div style={{backgroundColor:"#1F1F1F"}} className="w-52 h-full mr-auto">
        <div className="flex justify-center ">
            <Image
              src={AllenLogo}
              alt="AllenISD Logo"
              className="mt-5 mx-auto my-auto"
              style={{blockSize: 120}}
            />
        </div>

        <div className="mx-auto w-10/12 mt-10 text-3xl font-mono text-center rounded-lg tracking-tighter bg-neutral-700">
          AHS Model Scheduler
        </div>

        <div className="flex justify-center mx-auto w-10/12 text-3xl font-mono text-center rounded-lg tracking-tighter">
          <div className="bg-neutral-700 rounded-lg absolute bottom-40">Feedback</div>
          <div style={{aspectRatio: "1/1", height: 75, width: 75}} className="mx-auto bg-neutral-700 absolute bottom-10 rounded-full py-5">?</div>
        </div>
      </div>

      <div className="w-full h-full font-mono">
        <div className="text-center text-5xl p-8">Welcome</div>
        <div className="mx-auto text-center bg-neutral-900 w-1/2 h-5/6 rounded-lg shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_50px_#08f] pt-10">
          <div className="mx-auto text-center bg-neutral-700 w-5/6 h-1/6 rounded-lg">
            <div className="pt-2 text-3xl">Stuff goes here</div>
          </div>
        </div>
      </div> */}

      <div style={{backgroundColor:"#1F1F1F"}} className="w-full h-40 flex justify-center mb-auto font-sans font-thin">
      <div className="flex place-items-center justify-center mx-auto w-10/12 text-3xl text-center rounded-lg tracking-wide space-x-40">
          <div className="bg-neutral-700 rounded-lg p-4">Placeholder</div>
          <div className="bg-neutral-700 rounded-lg p-4">Placeholder</div>
        </div>

        <div className="flex place-items-center tracking-wide text-8xl font-sans font-thin">Welcome</div>

        <div className="flex place-items-center justify-center mx-auto w-10/12 text-3xl text-center rounded-lg tracking-wide space-x-40">
          <div className="bg-neutral-700 rounded-lg p-4">Placeholder</div>
          <div className="bg-neutral-700 rounded-lg p-4">Placeholder</div>
        </div>
      </div>

      </HomepageLayout>
    </>
  );
};

export default Homepage;
