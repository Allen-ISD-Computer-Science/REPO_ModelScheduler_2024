export default function FAQLayout({ children }) {
  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-default-200/20">
        <div className="flex items-center justify-center p-4">
          <div className="mx-auto w-full max-w-6xl py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
            <div className="flex flex-col w-full max-w-4xl items-center mx-auto gap-6 lg:flex-row lg:items-start lg:gap-12">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import PropTypes from "prop-types";

FAQLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
