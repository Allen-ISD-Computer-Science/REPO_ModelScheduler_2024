export default function SchedulerLayout({ children }) {
  return (
    <>
      <div className="flex flex-col md:flex-row overflow-y-auto items-center justify-evenly h-screen w-screen bg-default-200/20 px-8 md:px-12">
        {children}
      </div>
    </>
  );
}

import PropTypes from "prop-types";

SchedulerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
