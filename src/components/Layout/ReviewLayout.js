export default function ReviewLayout({ children }) {
  return (
    <>
      <div className="flex flex-col overflow-y-auto md:flex-row items-center justify-evenly h-screen w-screen bg-default-200/20 px-8 md:px-12">
        {children}
      </div>
    </>
  );
}

import PropTypes from "prop-types";

ReviewLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
