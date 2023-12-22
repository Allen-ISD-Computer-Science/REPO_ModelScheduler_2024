import { useContext } from "react";

import SelectedClassesContext from "@/context/selectedClasses";

const Scheduler = () => {
  const { selectedClasses } = useContext(SelectedClassesContext);

  return (
    <>
      <h1>Scheduler</h1>
      <p>Selected classes: {selectedClasses}</p>
    </>
  );
};

export default Scheduler;