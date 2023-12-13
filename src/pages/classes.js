import { useState, useContext } from "react";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

import { ClassesLayout } from "@/components/Layout";
import { ClassCard } from "@/components/Cards";
import { SearchBar } from "@/components/Buttons";
import { FilterButton } from "@/components/Buttons";

import SelectedClassesContext from '@/context/selectedClasses';

const exampleTestClasses = [
  {
    id: 1,
    name: "Accounting I",
    classCode: "BM1ACA",
    periods: [2, 3, 4],
    location: "AHS",
    totalSeats: 30,
    numStudents: 20
  },
  {
    id: 2,
    name: "Accounting II",
    classCode: "BM1A2A",
    periods: [3],
    location: "AHS",
    totalSeats: 32,
    numStudents: 12
  },
  {
    id: 3,
    name: "AC/DC Electronics",
    classCode: "TA1EAA",
    periods: [1],
    location: "STEAM",
    totalSeats: 34,
    numStudents: 49
  },
  {
    id: 4,
    name: "AP Biology",
    classCode: "SC1BAA",
    periods: [2, 4, 5, 7],
    location: "AHS",
    totalSeats: 36,
    numStudents: 0
  },
  {
    id: 5,
    name: "AP Physics 1",
    classCode: "SC1PAA",
    periods: [3, 5],
    location: "STEAM",
    totalSeats: 52,
    numStudents: 30
  },
  {
    id: 6,
    name: "DC Composition I",
    classCode: "EN1DCA",
    periods: [1, 2, 3, 4, 5, 6, 7, 8],
    location: "CTC",
    totalSeats: 12,
    numStudents: 20
  },
];

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
        <div className="flex justify-between h-screen w-full">
          <div className="flex flex-col justify-center h-5/6 w-1/3 ml-12 my-6 self-start self-center">
            <div className="flex flex-row justify-between gap-2 mb-4">
              {/* Search bar */}
              <SearchBar classes={exampleTestClasses} setClasses={setClasses} className="self-center w-3/4" />

              {/* Filter */}
              <FilterButton classes={exampleTestClasses} setClasses={setClasses} className="self-center w-1/4 text-gray-400" />
            </div>

            {/* List of classes */}
            <Card className="h-full bg-background/50 bg-default-100 overflow-y-auto">
              <ScrollShadow>
                {classes
                  .filter((classObj) => !selectedClasses.includes(classObj.id)) // Filter out classes that have already been added
                  .map((classObj) => (
                    <ClassCard
                      key={classObj.id}
                      name={classObj.name}
                      classCode={classObj.classCode}
                      periods={classObj.periods}
                      location={classObj.location}
                      totalSeats={classObj.totalSeats}
                      numStudents={classObj.numStudents}
                      className={`m-2 border-2 overflow-visible hover:border-gray-500 hover:transition hover:duration-300 ${classSelectedID === classObj.id ? 'border-stone-300' : 'border-transparent'}`}
                      style={{ width: '-webkit-fill-available' }} // Hacky way, fix later
                      onClick={() => handleClassSelect(classObj.id)}
                    />
                  ))}
              </ScrollShadow>
            </Card>
          </div>

          {/* Middle (Buttons) */}
          <div className="flex flex-col justify-center">
            <Button
              color="success"
              variant="ghost"
              isDisabled={classSelectedID === null || selectedClasses.includes(classSelectedID)}
              className="my-6 mx-8"
              onClick={() => handleAddClass(classSelectedID)} // Add class ID to selectedClasses
            >
              Add class
            </Button>
            <Button
              color="danger"
              variant="ghost"
              isDisabled={classSelectedID === null || !selectedClasses.includes(classSelectedID)}
              className="my-6 mx-8"
              onClick={() => handleRemoveClass()} // Remove class ID from selectedClasses
            >
              Remove class
            </Button>
          </div>

          {/* Right side (Added classes) */}
          <div className="flex flex-col justify-center h-5/6 w-1/3 mr-12 my-6 self-end self-center">
            <Card className="h-full bg-background/50 bg-default-100 overflow-y-auto">
              {exampleTestClasses
                .filter((classObj) => selectedClasses.includes(classObj.id)) // Filter out classes that have not been added
                .map((classObj) => (
                  <ClassCard
                    name={classObj.name}
                    classCode={classObj.classCode}
                    periods={classObj.periods}
                    location={classObj.location}
                    totalSeats={classObj.totalSeats}
                    numStudents={classObj.numStudents}
                    className={`m-2 border-2 hover:border-gray-500 hover:transition hover:duration-300 ${classSelectedID === classObj.id ? 'border-gray-500' : 'border-transparent'}`}
                    onClick={() => handleClassSelect(classObj.id)}
                  />
                ))}
            </Card>
          </div>
        </div>
      </ClassesLayout>
    </>
  );
};

export default Classes;