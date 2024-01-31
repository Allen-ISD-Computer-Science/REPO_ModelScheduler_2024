import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/use-disclosure";

import FilterModal from "@/components/Modals/FilterModal";
import UilFilter from "@iconscout/react-unicons/icons/uil-filter";

export default function FilterButton({ classes, setClasses, ...props }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedFilters, setSelectedFilters] = useState({
    period: [],
    location: [],
  });

  useEffect(() => {
    if (Object.keys(selectedFilters).length === 0) {
      setClasses(classes);
    } else {
      setClasses(
        classes.filter((classObj) => {
          const { periods, location } = classObj;
          const selectedPeriods = selectedFilters["period"];
          const selectedLocations = selectedFilters["location"];

          const isPeriodMatch =
            selectedPeriods.length === 0 || selectedPeriods.every((period) => periods.includes(period));
          const isLocationMatch = selectedLocations.length === 0 || selectedLocations.includes(location);

          return isPeriodMatch && isLocationMatch;
        })
      );
    }
  }, [selectedFilters, classes, setClasses]);

  return (
    <>
      <Button
        radius="sm"
        size="lg"
        variant="faded"
        startContent={<UilFilter className="text-neutral-400" />}
        onPress={onOpen}
        {...props}
      >
        Filter
      </Button>

      <FilterModal
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}

import PropTypes from "prop-types";

FilterButton.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setClasses: PropTypes.func.isRequired,
};
