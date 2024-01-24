import { useState, useContext, useEffect } from "react";
import { Button } from "@nextui-org/button";

import { ClassesLayout } from "@/components/Layout";
import { ClassCardList } from "@/components/Cards";
import { SearchBar, FilterButton, ScheduleButton } from "@/components/Buttons";

import SelectedClassesContext from "@/context/selectedClasses";
import exampleTestClasses from "@/temp_data.json";

export default function Classes() {
  const [classes, setClasses] = useState(exampleTestClasses);
  const [classSelectedID, setClassSelectedID] = useState(null);
  const { selectedClasses, setSelectedClasses } = useContext(SelectedClassesContext);
  const [availableClasses, setAvailableClasses] = useState(
    classes.filter((classObj) => !selectedClasses.includes(classObj.id))
  );
  const [addedClasses, setAddedClasses] = useState(classes.filter((classObj) => selectedClasses.includes(classObj.id)));

  const handleClassSelect = (classID) => {
    if (classSelectedID === classID) {
      setClassSelectedID(null); // Unselect the class if it is already selected
    } else {
      setClassSelectedID(classID); // Select the class if it is not already selected
    }
  };

  const handleAddClass = (classID) => {
    setClassSelectedID(null);
    setSelectedClasses([...selectedClasses, classID]);
  };

  const handleRemoveClass = () => {
    setClassSelectedID(null);
    setSelectedClasses(selectedClasses.filter((classID) => classID !== classSelectedID));
  };

  // Update available and added classes when selected classes change
  useEffect(() => {
    setAvailableClasses(classes.filter((classObj) => !selectedClasses.includes(classObj.id)));
    setAddedClasses(classes.filter((classObj) => selectedClasses.includes(classObj.id)));
  }, [classes, selectedClasses]);

  return (
    <>
      <ClassesLayout>
        {/* Left side (List of all classes excluding added) */}
        <div className="flex flex-col justify-center h-3/4 md:h-5/6 w-full md:w-5/12 lg:w-1/3 self-start self-center">
          <div className="flex flex-row justify-between gap-2 mb-4">
            {/* Search bar */}
            <SearchBar classes={exampleTestClasses} setClasses={setClasses} className="self-center w-1/2 lg:w-2/3" />

            {/* Filter */}
            <FilterButton
              classes={exampleTestClasses}
              setClasses={setClasses}
              className="self-center w-1/2 lg:w-1/3 text-neutral-400"
            />
          </div>

          {/* List of classes */}
          <ClassCardList
            classes={availableClasses}
            classSelected={classSelectedID}
            onClassSelected={handleClassSelect}
            className="h-full bg-background/50 bg-default-100 overflow-y-auto"
          />
        </div>

        {/* Middle (Buttons) */}
        <div className="flex flex-col justify-center gap-6 mx-8 my-4">
          <Button
            color="success"
            variant="ghost"
            isDisabled={classSelectedID === null || selectedClasses.includes(classSelectedID)}
            onPress={() => handleAddClass(classSelectedID)} // Add class ID to selectedClasses
          >
            Add class
          </Button>

          <Button
            color="danger"
            variant="ghost"
            isDisabled={classSelectedID === null || !selectedClasses.includes(classSelectedID)}
            onPress={() => handleRemoveClass()} // Remove class ID from selectedClasses
          >
            Remove class
          </Button>

          <ScheduleButton selectedClasses={selectedClasses} color="primary" variant="ghost" />
        </div>

        {/* Right side (Added classes) */}
        <div className="flex flex-col justify-center h-3/4 md:h-5/6 w-full md:w-5/12 lg:w-1/3 self-end self-center">
          <ClassCardList
            classes={addedClasses}
            classSelected={classSelectedID}
            onClassSelected={handleClassSelect}
            emptyMsg={addedClasses.length === 0}
            className="h-full bg-background/50 bg-default-100 overflow-y-auto"
          />
        </div>
      </ClassesLayout>
    </>
  );
}
