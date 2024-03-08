import Beams from "@/components/Backgrounds/Beams";

export default function FAQLayout({ children }) {
  return (
    <>
      <div className="relative flex min-h-[calc(100vh-4rem)] flex-col bg-default-200/20 antialiased">
        <div className="z-10 flex items-center justify-center p-4">
          <div className="mx-auto w-full max-w-6xl py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-12">
              {children}
            </div>
          </div>
        </div>

        <Beams className="absolute inset-0 z-0 hidden md:block" />
      </div>
    </>
  );
}

import PropTypes from "prop-types";

FAQLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
