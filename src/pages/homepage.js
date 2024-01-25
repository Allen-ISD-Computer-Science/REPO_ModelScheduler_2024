import { HomepageLayout } from "@/components/Layout";
import { Image } from "@nextui-org/image";
import AllenLogo from "../components/Images/AllenISDLogo.png";

const Homepage = () => {
  return (
    <>
      {/* Contains link to: FAQ, Classes, Scheduler(?), Feedback */}
      <HomepageLayout>
      <div style={{backgroundColor:"#1F1F1F"}} className="w-52 h-screen mr-auto">
        <div className="flex justify-center ">
            <Image
              src={AllenLogo}
              alt="AllenISD Logo"
              className="mt-5 mx-auto my-auto"
              style={{blockSize: 120}}
            />
        </div>

        <div className="mx-auto w-10/12 mt-10 text-3xl font-mono text-center rounded-lg tracking-tighter bg-neutral-700">
          Model Scheduler
        </div>

        <div className="mx-auto w-10/12 relative top-2/3 text-3xl font-mono text-center rounded-lg tracking-tighter space-y-10">
          <div className="bg-neutral-700 rounded-lg">Feedback</div>
          <div style={{aspectRatio: "1/1", height: 75, width: 75}} className="mx-auto bg-neutral-700 rounded-full py-5">?</div>
        </div>
      </div>

      <div className="w-screen h-screen font-mono">
        <div className="text-center text-5xl p-8">Stuff goes here</div>
        <div className="mx-auto text-center bg-neutral-900 w-1/2 h-5/6 rounded-lg shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_50px_#08f] pt-10">
          <div className="mx-auto text-center bg-neutral-700 w-5/6 h-1/6 rounded-lg">
            <div className="pt-2 text-3xl">Stuff goes here</div>
          </div>
        </div>
      </div>

      </HomepageLayout>
    </>
  );
};

export default Homepage;
