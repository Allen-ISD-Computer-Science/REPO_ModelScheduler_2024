export default function SchedulerLayout({ children }) {
  return (
    <>
      <div className="flex flex-row overflow-y-auto items-center justify-evenly h-screen w-screen px-8 md:px-12">
        {children}
      </div>
    </>
  );
}

import PropTypes from "prop-types";

SchedulerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
