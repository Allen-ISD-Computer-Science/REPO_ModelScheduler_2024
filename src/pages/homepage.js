import { HomepageLayout } from "@/components/Layout";
import { Image } from "@nextui-org/image";
import AllenLogo from "../components/Images/AllenISDLogo.png";

const Homepage = () => {
  return (
    <>
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

        <div className="mx-auto w-10/12 relative top-2/3 text-3xl font-mono text-center rounded-lg tracking-tighter space-y-24">
          <div className="bg-black rounded-lg">Feedback</div>
          <div className="bg-black rounded-full">?</div>
        </div>
      </div>

      <div className="w-screen h-screen font-mono">
        <div className="text-center text-5xl p-8">Classes</div>
        <div className="mx-auto text-center bg-neutral-900 w-1/2 h-5/6 rounded-lg shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_50px_#08f] pt-10">
          <div className="mx-auto text-center bg-neutral-700 w-3/4 h-1/6 rounded-lg">
            <div className="pt-2 text-3xl">Insert Class Name Here</div>
          </div>
        </div>
      </div>

      </HomepageLayout>
    </>
  );
};

export default Homepage;
