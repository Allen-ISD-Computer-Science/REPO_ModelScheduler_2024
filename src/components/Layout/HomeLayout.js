export default function HomeLayout({ children }) {
  return (
    <>
      <div className="flex flex-row place-content-around items-center w-screen h-screen align-middle">{children}</div>
    </>
  );
}

import PropTypes from "prop-types";

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
