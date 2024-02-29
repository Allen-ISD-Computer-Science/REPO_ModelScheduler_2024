export default function SchedulerLayout({ children }) {
  return (
    <>
      <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-evenly overflow-y-auto bg-default-200/20 px-8 md:flex-row md:px-12">
        {children}
      </div>
    </>
  );
}

import PropTypes from "prop-types";

SchedulerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
