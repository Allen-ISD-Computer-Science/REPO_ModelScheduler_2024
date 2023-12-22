import ClassLocationChipColors from "@/constants/ClassLocationChipColors";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import numberToOrdinal from "@/utils/numberToOrdinal";
import { FireSVGRating } from "@/components/Images";

const ClassCard = ({ courseName, courseCode, periods, location, totalSeats, numStudents, className, ...props }) => {
  const percentFull = (numStudents / totalSeats).toFixed(2);

  return (
    <>
      <Card
        isPressable
        disableRipple
        className={className}
        {...props}
      >
        <CardBody>
          <p className="text-2xl font-bold mb-1">{courseName}</p>

          <p className="absolute top-2 right-2 text-sm font-bold text-gray-500">{courseCode}</p>

          <div className="flex items-center flex-wrap">
            {/* Location */}
            <Chip color={ClassLocationChipColors[location]} radius="sm" variant="bordered" className="mr-2 mb-2">{location}</Chip>
            
            {/* Periods */}
            {periods.map((period, index) => (
              <Chip key={index} color="default" radius="sm" variant="bordered" className="mr-2 mb-2">
                {numberToOrdinal(period)}
              </Chip>
            ))}
          </div>

          {/* Rating on how competitive a class is */}
          <div className="flex flex-row justify-start">
            <FireSVGRating percentage={percentFull} className="flex p-0.5 bg-stone-700/50 rounded" />
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default ClassCard;