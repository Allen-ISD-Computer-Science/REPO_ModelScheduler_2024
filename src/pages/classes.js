import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";

import MaxClassesReachedModal from "@/components/Modals/MaxClassesReachedModal";
import ClassesNavbar from "@/components/Navbars/ClassesNavbar";
import ClassesLayout from "@/components/Layout/ClassesLayout";
import ClassCardList from "@/components/Cards/ClassCardList";
import SearchBar from "@/components/Inputs/SearchBar";
import FilterButton from "@/components/Buttons/FilterButton";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { Icon } from "@iconify/react";

import exampleTestClasses from "@/temp_data.json";

export default function Classes() {
  const [classes, setClasses] = useState(exampleTestClasses);
  const [selectedClassID, setSelectedClassID] = useState(null);
  const [addedClasses, setAddedClasses] = useState(() => {
    return JSON.parse(localStorage.getItem("addedClasses")) || [];
  });
  const [availableClasses, setAvailableClasses] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClassSelect = (classID) => setSelectedClassID(classID === selectedClassID ? null : classID);

  const handleAddClass = (classID) => {
    setSelectedClassID(null);

    // Limit to 25 classes
    if (addedClasses.length >= 20) {
      onOpen(); // Show the modal
      return;
    }

    // Get selected class object
    const selectedClass = availableClasses.find((classObj) => classObj.id === classID);

    // Add selected class object to addedClasses (sort by id)
    setAddedClasses([...addedClasses, selectedClass].sort((a, b) => a.id - b.id));

    // Filter out selected class object from availableClasses (sort by id)
    setAvailableClasses(availableClasses.filter((classObj) => classObj.id !== classID).sort((a, b) => a.id - b.id));
  };

  const handleRemoveClass = () => {
    setSelectedClassID(null);

    // Get selected class object
    const selectedClass = addedClasses.find((classObj) => classObj.id === selectedClassID);

    // Add selected class object to availableClasses (sort by id)
    setAvailableClasses([...availableClasses, selectedClass].sort((a, b) => a.id - b.id));

    // Filter out selected class object from addedClasses (sort by id)
    setAddedClasses(addedClasses.filter((classObj) => classObj.id !== selectedClassID).sort((a, b) => a.id - b.id));
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
    dispatchEvent(new Event("storage")); // Trigger storage event
  }, [addedClasses]);

  return (
    <>
      <ClassesNavbar />

      <ClassesLayout>
        {/* Max classes reached modal */}
        <MaxClassesReachedModal isOpen={isOpen} onOpenChange={onOpenChange} />

        {/* Left side (List of all classes excluding added) */}
        <div className="flex flex-col justify-center h-3/4 md:h-5/6 w-full md:w-5/12 lg:w-1/3 self-center">
          <div className="flex flex-row justify-between gap-2 mb-4">
            {/* Search bar */}
            <SearchBar
              classes={exampleTestClasses}
              setClasses={setClasses}
              className="w-2/3"
              classNames={{ inputWrapper: "bg-default-50/30" }}
            />

            {/* Filter */}
            <FilterButton
              classes={exampleTestClasses}
              setClasses={setClasses}
              className="self-center w-1/2 lg:w-1/3 text-neutral-400 bg-default-50/30"
            />
          </div>

          {/* List of classes */}
          <ClassCardList
            classes={availableClasses}
            classSelected={selectedClassID}
            onClassSelected={handleClassSelect}
            className="h-full bg-default-100/50 overflow-y-auto"
          />
        </div>

        {/* Middle (Buttons) */}
        <div className="flex flex-col justify-center gap-6 mx-8 my-4">
          <Button
            color="success"
            variant="ghost"
            isDisabled={selectedClassID === null || checkIfAddedClassesHasClass(selectedClassID)}
            endContent={<Icon icon="bx:bx-chevron-right" fontSize="1.5rem" />}
            onPress={() => handleAddClass(selectedClassID)} // Add class object to addedClasses
            className="gap-0"
          >
            Add class
          </Button>

          <Button
            color="danger"
            variant="ghost"
            isDisabled={selectedClassID === null || !checkIfAddedClassesHasClass(selectedClassID)}
            startContent={<Icon icon="bx:bx-chevron-left" fontSize="1.5rem" />}
            onPress={() => handleRemoveClass()} // Remove class object from addedClasses
            className="gap-0"
          >
            Remove class
          </Button>
        </div>

        {/* Right side (Added classes) */}
        <div className="flex flex-col justify-center h-3/4 md:h-5/6 w-full md:w-5/12 lg:w-1/3 self-center">
          <ClassCardList
            classes={addedClasses}
            classSelected={selectedClassID}
            onClassSelected={handleClassSelect}
            className="h-full bg-default-100/50 overflow-y-auto"
          />
        </div>
      </ClassesLayout>
    </>
  );
}
