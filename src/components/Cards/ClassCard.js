import ClassLocationChipColors from "@/constants/ClassLocationChipColors";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import numberToOrdinal from "@/utils/numberToOrdinal";
import { FireSVGRating } from "@/components/Images";

const ClassCard = ({ name, classCode, periods, location, totalSeats, numStudents, className }) => {
  const percentFull = (numStudents / totalSeats).toFixed(2);

  return (
    <>
      <Card
        isPressable
        className={className}
      >
        <CardBody>
          <p className="text-2xl font-bold">{name}</p>

          <p className="absolute top-2 right-2 text-sm font-bold text-gray-500">{classCode}</p>

          {/* Chip for location and periods */}
          <div className="flex items-center">
            <Chip color={ClassLocationChipColors[location]} radius="sm" variant="bordered" className="my-2">{location}</Chip>
            {periods.map((period) => (
              <Chip color="default" radius="sm" variant="bordered" className="ml-2">{numberToOrdinal(period)}</Chip>
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