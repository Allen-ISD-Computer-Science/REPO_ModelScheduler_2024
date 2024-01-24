export default function ReviewLayout({ children }) {
  return (
    <>
      <div className="flex flex-col overflow-y-auto md:flex-row items-center justify-between h-screen w-screen px-8 md:px-12 py-6">
        {children}
      </div>
    </>
  );
}

import PropTypes from "prop-types";

ReviewLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
