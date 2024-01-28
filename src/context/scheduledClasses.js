import { createContext } from "react";

import Semesters from "@/constants/Semesters";

const ScheduledClassesContext = createContext({
  scheduledClasses: {
    [Semesters.S1]: {},
    [Semesters.S2]: {},
  },
  setScheduledClasses: () => {},
});

export default ScheduledClassesContext;
