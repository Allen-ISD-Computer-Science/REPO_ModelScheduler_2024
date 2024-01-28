import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";

import ClassesLayout from "@/components/Layout/ClassesLayout";
import ClassCardList from "@/components/Cards/ClassCardList";
import { SearchBar, FilterButton, ScheduleButton } from "@/components/Buttons";

import exampleTestClasses from "@/temp_data.json";

export default function Classes() {
  const [classes, setClasses] = useState(exampleTestClasses);
  const [selectedClassID, setSelectedClassID] = useState(null);
  const [addedClasses, setAddedClasses] = useState(() => {
    return JSON.parse(localStorage.getItem("addedClasses")) || [];
  });
  const [availableClasses, setAvailableClasses] = useState([]);

  const handleClassSelect = (classID) => setSelectedClassID(classID === selectedClassID ? null : classID);

  const handleAddClass = (classID) => {
    setSelectedClassID(null);
    const selectedClass = availableClasses.find((classObj) => classObj.id === classID); // Get class object
    setAddedClasses([...addedClasses, selectedClass].sort((a, b) => a.id - b.id)); // Add selected class object to addedClasses
    setAvailableClasses(availableClasses.filter((classObj) => classObj.id !== classID).sort((a, b) => a.id - b.id)); // Filter out selected class object from availableClasses
  };

  const handleRemoveClass = () => {
    setSelectedClassID(null);
    const selectedClass = addedClasses.find((classObj) => classObj.id === selectedClassID); // Get class object
    setAvailableClasses([...availableClasses, selectedClass].sort((a, b) => a.id - b.id)); // Add selected class object to availableClasses
    setAddedClasses(addedClasses.filter((classObj) => classObj.id !== selectedClassID).sort((a, b) => a.id - b.id)); // Filter out selected class object from addedClasses
  };

  // check if addedClasses has a class id
  const checkIfAddedClassesHasClass = (classID) => addedClasses.some((classObj) => classObj.id === classID);

  // Update available and added classes on render
  useEffect(() => {
    const classIDsToRemove = addedClasses.map((classObj) => classObj.id); // Array of class IDs to remove from available classes
    setAvailableClasses(classes.filter((classObj) => !classIDsToRemove.includes(classObj.id))); // Filter out added classes from available classes
  }, [addedClasses, classes]);

  // Update localStorage on addedClasses change
  useEffect(() => {
    localStorage.setItem("addedClasses", JSON.stringify(addedClasses));
  }, [addedClasses]);

  return (
    <ClassesLayout>
      {/* Left side (List of all classes excluding added) */}
      <div className="flex flex-col justify-center h-3/4 md:h-5/6 w-full md:w-5/12 lg:w-1/3 self-center">
        <div className="flex flex-row justify-between gap-2 mb-4">
          {/* Search bar */}
          <SearchBar classes={exampleTestClasses} setClasses={setClasses} className="w-2/3" />

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
          classSelected={selectedClassID}
          onClassSelected={handleClassSelect}
          className="h-full bg-background/50 bg-default-100 overflow-y-auto"
        />
      </div>

      {/* Middle (Buttons) */}
      <div className="flex flex-col justify-center gap-6 mx-8 my-4">
        <Button
          color="success"
          variant="ghost"
          isDisabled={selectedClassID === null || checkIfAddedClassesHasClass(selectedClassID)}
          onPress={() => handleAddClass(selectedClassID)} // Add class object to addedClasses
        >
          Add class
        </Button>

        <Button
          color="danger"
          variant="ghost"
          isDisabled={selectedClassID === null || !checkIfAddedClassesHasClass(selectedClassID)}
          onPress={() => handleRemoveClass()} // Remove class object from addedClasses
        >
          Remove class
        </Button>

        <ScheduleButton addedClasses={addedClasses} color="primary" variant="ghost" />
      </div>

      {/* Right side (Added classes) */}
      <div className="flex flex-col justify-center h-3/4 md:h-5/6 w-full md:w-5/12 lg:w-1/3 self-end self-center">
        <ClassCardList
          classes={addedClasses}
          classSelected={selectedClassID}
          onClassSelected={handleClassSelect}
          className="h-full bg-background/50 bg-default-100 overflow-y-auto"
        />
      </div>
    </ClassesLayout>
  );
}
