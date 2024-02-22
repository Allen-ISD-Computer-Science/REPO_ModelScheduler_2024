export default function HomeLayout({ children }) {
  return (
    <>
      <div className="py-28 sm:py-32 md:py-40 relative bg-gradient-to-b from-neutral-950/50 to-neutral-900 min-h-[calc(100vh-4rem)]">
        {children}
      </div>
    </>
  );
}

import PropTypes from "prop-types";

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
