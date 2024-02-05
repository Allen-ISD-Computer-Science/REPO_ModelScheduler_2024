import { useState } from "react";
import { Input } from "@nextui-org/input";

import { Icon } from "@iconify/react";

export default function SearchBar({ classes, setClasses, ...props }) {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchQueryChange = (value) => {
    setSearchQuery(value);

    // Filter classes based on search query
    const filteredClasses = classes.filter((classObj) =>
      classObj.courseName.toLowerCase().includes(value.toLowerCase())
    );
    setClasses(filteredClasses);
  };

  return (
    <>
      <Input
        isClearable
        type="text"
        size="sm"
        placeholder="Search for a class"
        variant="faded"
        value={searchQuery}
        startContent={<Icon icon="uil:search-alt" fontSize="1.25rem" className="text-neutral-400" />}
        onValueChange={onSearchQueryChange}
        {...props}
      />
    </>
  );
}

import PropTypes from "prop-types";

SearchBar.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setClasses: PropTypes.func.isRequired,
};
