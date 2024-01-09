import { useState, useContext } from "react";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

import { ClassesLayout } from "@/components/Layout";
import { ClassCard } from "@/components/Cards";
import { SearchBar } from "@/components/Buttons";
import { FilterButton } from "@/components/Buttons";
import { ScheduleButton } from "@/components/Buttons";

import SelectedClassesContext from '@/context/selectedClasses';
import exampleTestClasses from "@/temp_data.json";

const Classes = () => {
  const [classSelectedID, setClassSelectedID] = useState(null);
  const [classes, setClasses] = useState(exampleTestClasses);
  const { selectedClasses, setSelectedClasses } = useContext(SelectedClassesContext);

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

  return (
    <>
      <ClassesLayout>
        {/* Left side (List of all classes excluding added) */}
        <div className="flex flex-col justify-center h-3/4 md:h-5/6 w-full md:w-5/12 lg:w-1/3 self-start self-center">
          <div className="flex flex-row justify-between gap-2 mb-4">
            {/* Search bar */}
            <SearchBar classes={exampleTestClasses} setClasses={setClasses} className="self-center w-1/2 lg:w-2/3" />

            {/* Filter */}
            <FilterButton classes={exampleTestClasses} setClasses={setClasses} className="self-center w-1/2 lg:w-1/3 text-neutral-400" />
          </div>

          {/* List of classes */}
          <Card className="h-full bg-background/50 bg-default-100 overflow-y-auto">
            <ScrollShadow size={80}>
              {classes
                .filter((classObj) => !selectedClasses.includes(classObj.id)) // Filter out classes that have already been added
                .map((classObj) => (
                  <ClassCard
                    key={classObj.id}
                    courseName={classObj.courseName}
                    courseCode={classObj.courseCode}
                    periods={classObj.periods}
                    location={classObj.location}
                    totalSeats={Object.values(classObj.studentMax).reduce((sum, num) => sum + num, 0)}
                    numStudents={Object.values(classObj.studentSelected).reduce((sum, num) => sum + num, 0)}
                    className={`m-2 border-2 overflow-visible hover:border-gray-500 hover:transition hover:duration-300 ${classSelectedID === classObj.id ? 'border-stone-400' : 'border-transparent'}`}
                    style={{ width: '-webkit-fill-available' }} // Hacky way, fix later
                    onPress={() => handleClassSelect(classObj.id)}
                  />
                ))}
            </ScrollShadow>
          </Card>
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

          <ScheduleButton
            selectedClasses={selectedClasses}
            color="primary"
            variant="ghost"
          />
        </div>

        {/* Right side (Added classes) */}
        <div className="flex flex-col justify-center h-3/4 md:h-5/6 w-full md:w-5/12 lg:w-1/3 self-end self-center">
          <Card className="h-full bg-background/50 bg-default-100 overflow-y-auto">

            {/* "No classes added" message */}
            {selectedClasses.length === 0 && (
              <div className="flex flex-col h-full justify-center items-center p-8">
                <p className="text-2xl text-center font-bold text-neutral-200 animate-fade-down animate-ease-in-out">No classes added</p>
                <p className="text-md text-center text-neutral-400 animate-fade-up animate-delay-200">Click on a class and then the "Add class" button to add it.</p>
              </div>
            )}

            {/* List of classes */}
            <ScrollShadow size={80}>
              {exampleTestClasses
                .filter((classObj) => selectedClasses.includes(classObj.id)) // Filter out classes that have not been added
                .map((classObj) => (
                  <ClassCard
                    courseName={classObj.courseName}
                    courseCode={classObj.courseCode}
                    periods={classObj.periods}
                    location={classObj.location}
                    totalSeats={Object.values(classObj.studentMax).reduce((sum, num) => sum + num, 0)}
                    numStudents={Object.values(classObj.studentSelected).reduce((sum, num) => sum + num, 0)}
                    className={`m-2 border-2 overflow-visible hover:border-gray-500 hover:transition hover:duration-300 ${classSelectedID === classObj.id ? 'border-stone-400' : 'border-transparent'}`}
                    style={{ width: '-webkit-fill-available' }} // Hacky way, fix later
                    onPress={() => handleClassSelect(classObj.id)}
                  />
                ))}
            </ScrollShadow>

          </Card>
        </div>
      </ClassesLayout>
    </>
  );
};

export default Classes;