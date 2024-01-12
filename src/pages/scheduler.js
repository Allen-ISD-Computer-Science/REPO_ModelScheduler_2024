import { useContext } from "react";

import { SchedulerLayout } from "@/components/Layout";

import SelectedClassesContext from "@/context/selectedClasses";

const Scheduler = () => {
  const { selectedClasses } = useContext(SelectedClassesContext);

  return (
    <>
      <SchedulerLayout>{/* Left side (List of all classes excluding added) */}</SchedulerLayout>
    </>
  );
};

export default Scheduler;
