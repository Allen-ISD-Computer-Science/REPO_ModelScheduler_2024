export default function HomeLayout({ children }) {
  return (
    <>
      <div className="relative z-10 min-h-[calc(100vh-4rem)] py-28 sm:py-32 md:py-40">{children}</div>
    </>
  );
}

import PropTypes from "prop-types";

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
