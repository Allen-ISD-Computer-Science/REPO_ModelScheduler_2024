export default function ClassesLayout({ children }) {
  return (
    <>
      <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-between overflow-y-auto bg-default-200/20 px-8 py-6 md:flex-row md:px-12">
        {children}
      </div>
    </>
  );
}

import PropTypes from "prop-types";

ClassesLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
