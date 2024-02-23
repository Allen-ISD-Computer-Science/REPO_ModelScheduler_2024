export default function ReviewLayout({ children }) {
  return (
    <>
      <div className="flex flex-col overflow-y-auto md:flex-row items-center justify-evenly bg-default-200/20 px-8 md:px-12 gap-8 h-[calc(100vh-4rem)]">
        {children}
      </div>
    </>
  );
}

import PropTypes from "prop-types";

ReviewLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
