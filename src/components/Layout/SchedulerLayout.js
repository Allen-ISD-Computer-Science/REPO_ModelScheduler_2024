const SchedulerLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col overflow-y-auto items-center justify-center h-screen w-screen px-8 md:px-12 py-6">
        {children}
      </div>
    </>
  );
};

export default SchedulerLayout;

import PropTypes from "prop-types";

SchedulerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
