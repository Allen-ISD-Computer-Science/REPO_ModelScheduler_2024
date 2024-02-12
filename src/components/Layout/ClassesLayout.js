export default function ClassesLayout({ children }) {
  return (
    <>
      <div className="flex flex-col overflow-y-auto md:flex-row items-center justify-between h-screen w-screen bg-default-200/20 px-8 md:px-12 py-6">
        {children}
      </div>
    </>
  );
}

import PropTypes from "prop-types";

ClassesLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
