import { Modal, ModalContent, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Checkbox } from "@nextui-org/checkbox";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

export default function FilterModal({ selectedFilters, setSelectedFilters, isOpen, onOpenChange }) {
  const isPeriodSelected = (period) => {
    return selectedFilters["periods"].includes(period);
  };

  const isLocationSelected = (location) => {
    return selectedFilters["location"].includes(location);
  };

  const isTermSelected = (term) => {
    return selectedFilters["term"].includes(term);
  };

  const handleFilterSelect = (filterKey, filter) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (prevSelectedFilters[filterKey].includes(filter)) {
        return {
          ...prevSelectedFilters,
          [filterKey]: prevSelectedFilters[filterKey].filter((filterValue) => filterValue !== filter),
        };
      } else {
        return {
          ...prevSelectedFilters,
          [filterKey]: [...prevSelectedFilters[filterKey], filter],
        };
      }
    });
  };

  return (
    <>
      <Modal size="lg" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Class Filters</ModalHeader>

              <ModalBody>
                {/* Period filter */}
                <p className="text-lg font-bold mb-2">Periods</p>
                <div className="flex flex-col gap-2 items-center">
                  <div className="flex gap-2">
                    <Checkbox
                      value="1"
                      defaultSelected={isPeriodSelected(1)}
                      onChange={() => handleFilterSelect("periods", 1)}
                    >
                      1st
                    </Checkbox>
                  </div>
                  <div className="flex gap-2">
                    <Checkbox
                      value="2"
                      defaultSelected={isPeriodSelected(2)}
                      onChange={() => handleFilterSelect("periods", 2)}
                    >
                      2nd
                    </Checkbox>
                    <Checkbox
                      value="5"
                      defaultSelected={isPeriodSelected(5)}
                      onChange={() => handleFilterSelect("periods", 5)}
                    >
                      5th
                    </Checkbox>
                  </div>
                  <div className="flex gap-2">
                    <Checkbox
                      value="3"
                      defaultSelected={isPeriodSelected(3)}
                      onChange={() => handleFilterSelect("periods", 3)}
                    >
                      3rd
                    </Checkbox>
                    <Checkbox
                      value="6"
                      defaultSelected={isPeriodSelected(6)}
                      onChange={() => handleFilterSelect("periods", 6)}
                    >
                      6th
                    </Checkbox>
                  </div>
                  <div className="flex gap-2">
                    <Checkbox
                      value="4"
                      defaultSelected={isPeriodSelected(4)}
                      onChange={() => handleFilterSelect("periods", 4)}
                    >
                      4th
                    </Checkbox>
                    <Checkbox
                      value="7"
                      defaultSelected={isPeriodSelected(7)}
                      onChange={() => handleFilterSelect("periods", 7)}
                    >
                      7th
                    </Checkbox>
                  </div>
                  <div className="flex gap-2">
                    <Checkbox
                      value="8"
                      defaultSelected={isPeriodSelected(8)}
                      onChange={() => handleFilterSelect("periods", 8)}
                    >
                      8th
                    </Checkbox>
                  </div>
                </div>

                <Divider />

                {/* Location filter (on select, change variant to solid)*/}
                <p className="text-lg font-bold mb-2">Locations</p>
                <ButtonGroup variant="ghost">
                  <Button
                    variant={isLocationSelected("AHS") ? "solid" : "ghost"}
                    onPress={() => handleFilterSelect("location", "AHS")}
                  >
                    AHS
                  </Button>
                  <Button
                    variant={isLocationSelected("STEAM") ? "solid" : "ghost"}
                    onPress={() => handleFilterSelect("location", "STEAM")}
                  >
                    STEAM
                  </Button>
                  <Button
                    variant={isLocationSelected("LFC") ? "solid" : "ghost"}
                    onPress={() => handleFilterSelect("location", "LFC")}
                  >
                    LFC
                  </Button>
                  <Button
                    variant={isLocationSelected("CTC") ? "solid" : "ghost"}
                    onPress={() => handleFilterSelect("location", "CTC")}
                  >
                    CTC
                  </Button>
                </ButtonGroup>

                <Divider />

                {/* Term filter */}
                <p className="text-lg font-bold mb-2">Terms/Semesters</p>
                <ButtonGroup variant="ghost">
                  <Button
                    variant={isTermSelected("S1") ? "solid" : "ghost"}
                    onPress={() => handleFilterSelect("term", "S1")}
                  >
                    S1 (Fall)
                  </Button>
                  <Button
                    variant={isTermSelected("S2") ? "solid" : "ghost"}
                    onPress={() => handleFilterSelect("term", "S2")}
                  >
                    S2 (Spring)
                  </Button>
                  <Button
                    variant={isTermSelected("S1+S2") ? "solid" : "ghost"}
                    onPress={() => handleFilterSelect("term", "S1+S2")}
                  >
                    S1+S2 (Full Year)
                  </Button>
                </ButtonGroup>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

import PropTypes from "prop-types";

FilterModal.propTypes = {
  selectedFilters: PropTypes.shape({
    periods: PropTypes.arrayOf(PropTypes.number),
    location: PropTypes.arrayOf(PropTypes.string),
    term: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setSelectedFilters: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
};
