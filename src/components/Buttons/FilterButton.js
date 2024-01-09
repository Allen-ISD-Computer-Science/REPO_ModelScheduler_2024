import { useState, useEffect } from "react";
import { Modal, ModalContent, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Checkbox } from "@nextui-org/checkbox";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useDisclosure } from "@nextui-org/use-disclosure";

import UilFilter from '@iconscout/react-unicons/icons/uil-filter';

const FilterButton = ({ classes, setClasses, ...props }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedFilters, setSelectedFilters] = useState({
    "period": [],
    "location": [],
    "competition": []
  });

  const isPeriodSelected = (period) => {
    return selectedFilters["period"].includes(period);
  };

  const isLocationSelected = (location) => {
    return selectedFilters["location"].includes(location);
  };

  const handleFilterSelect = (filterKey, filter) => {
    setSelectedFilters(prevSelectedFilters => {
      if (prevSelectedFilters[filterKey].includes(filter)) {
        return {
          ...prevSelectedFilters,
          [filterKey]: prevSelectedFilters[filterKey].filter(filterValue => filterValue !== filter)
        };
      } else {
        return {
          ...prevSelectedFilters,
          [filterKey]: [...prevSelectedFilters[filterKey], filter]
        };
      }
    });
  };

  useEffect(() => {
    if (Object.keys(selectedFilters).length === 0) {
      setClasses(classes);
    } else {
      setClasses(classes.filter(classObj => {
        const { periods, location } = classObj;
        const selectedPeriods = selectedFilters["period"];
        const selectedLocations = selectedFilters["location"];

        const isPeriodMatch = selectedPeriods.length === 0 || selectedPeriods.every(period => periods.includes(period));
        const isLocationMatch = selectedLocations.length === 0 || selectedLocations.includes(location);

        return isPeriodMatch && isLocationMatch;
      }));
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

      <Modal
        size="lg"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Class Filters</ModalHeader>

              <ModalBody>
                {/*
                  Filters: period, location, competition of seats
                */}

                {/* Period filter */}
                <p className="text-lg font-bold mb-2">Periods</p>
                <div className="flex flex-col gap-2 items-center">
                  <div className="flex gap-2">
                    <Checkbox value="1" defaultSelected={isPeriodSelected(1)} onChange={() => handleFilterSelect("period", 1)}>1st</Checkbox>
                  </div>
                  <div className="flex gap-2">
                    <Checkbox value="2" defaultSelected={isPeriodSelected(2)} onChange={() => handleFilterSelect("period", 2)}>2nd</Checkbox>
                    <Checkbox value="5" defaultSelected={isPeriodSelected(5)} onChange={() => handleFilterSelect("period", 5)}>5th</Checkbox>
                  </div>
                  <div className="flex gap-2">
                    <Checkbox value="3" defaultSelected={isPeriodSelected(3)} onChange={() => handleFilterSelect("period", 3)}>3rd</Checkbox>
                    <Checkbox value="6" defaultSelected={isPeriodSelected(6)} onChange={() => handleFilterSelect("period", 6)}>6th</Checkbox>
                  </div>
                  <div className="flex gap-2">
                    <Checkbox value="4" defaultSelected={isPeriodSelected(4)} onChange={() => handleFilterSelect("period", 4)}>4th</Checkbox>
                    <Checkbox value="7" defaultSelected={isPeriodSelected(7)} onChange={() => handleFilterSelect("period", 7)}>7th</Checkbox>
                  </div>
                  <div className="flex gap-2">
                    <Checkbox value="8" defaultSelected={isPeriodSelected(8)} onChange={() => handleFilterSelect("period", 8)}>8th</Checkbox>
                  </div>
                </div>

                <Divider />

                {/* Location filter (on select, change variant to solid)*/}
                <p className="text-lg font-bold mb-2">Locations</p>
                <ButtonGroup variant="ghost">
                  <Button variant={isLocationSelected("AHS") ? "solid" : "ghost"} onPress={() => handleFilterSelect("location", "AHS")}>AHS</Button>
                  <Button variant={isLocationSelected("STEAM") ? "solid" : "ghost"} onPress={() => handleFilterSelect("location", "STEAM")}>STEAM</Button>
                  <Button variant={isLocationSelected("LFC") ? "solid" : "ghost"} onPress={() => handleFilterSelect("location", "LFC")}>LFC</Button>
                  <Button variant={isLocationSelected("CTC") ? "solid" : "ghost"} onPress={() => handleFilterSelect("location", "CTC")}>CTC</Button>
                </ButtonGroup>

                <Divider />

                {/* Competition filter */}
                <p className="text-lg font-bold mb-2">Competition</p>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose}>Cancel</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterButton;