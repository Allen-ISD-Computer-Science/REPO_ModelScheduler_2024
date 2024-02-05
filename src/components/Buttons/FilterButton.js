import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/use-disclosure";

import FilterModal from "@/components/Modals/FilterModal";
import { Icon } from "@iconify/react";

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
        startContent={<Icon icon="heroicons-outline:filter" fontSize="1.25rem" />}
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
