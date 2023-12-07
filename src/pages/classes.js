import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

import { ClassesLayout } from "@/components/Layout";
import { ClassCard } from "@/components/Cards";

const exampleTestClasses = [
  {
    id: 1,
    name: "Accouting I",
    classCode: "BM1ACA",
    periods: [2, 3, 4],
    location: "AHS",
    totalSeats: 30,
    numStudents: 20
  },
  {
    id: 2,
    name: "Accouting II",
    classCode: "BM1A2A",
    periods: [3],
    location: "CTC",
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
  }
];

const Classes = () => {
  return (
    <>
      <ClassesLayout>
        {/* Left side (List of all classes excluding added) */}
        <div className="flex justify-between h-5/6 w-full">
          <Card className="w-1/3 ml-12 my-6 self-start bg-background/50 bg-default-100">
            {/* Search bar here */}

            {exampleTestClasses.map((classObj) => (
              <ClassCard
                name={classObj.name}
                classCode={classObj.classCode}
                periods={classObj.periods}
                location={classObj.location}
                totalSeats={classObj.totalSeats}
                numStudents={classObj.numStudents}
                className="m-2"
              />
            ))}
          </Card>

          {/* Middle (Buttons) */}
          <div className="flex flex-col justify-center">
            <Button
              color="success"
              variant="ghost"
              className="my-6 mx-8"
            >
              Add class
            </Button>
            <Button
              color="danger"
              variant="ghost"
              className="my-6 mx-8"
            >
              Remove class
            </Button>
          </div>

          {/* Right side (Added classes) */}
          <Card className="w-1/3 mr-12 my-6 self-end bg-background/50 bg-default-100">
            <CardBody>Card body</CardBody>
          </Card>
        </div>
      </ClassesLayout>
    </>
  );
};

export default Classes;