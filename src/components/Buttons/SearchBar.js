import { useState, useEffect } from "react";
import { Input } from "@nextui-org/input";

import UilSearchAlt from "@iconscout/react-unicons/icons/uil-search-alt";

const SearchBar = ({ classes, setClasses, ...props }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Filter classes based on search query
    const filteredClasses = classes.filter((classObj) =>
      classObj.courseName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setClasses(filteredClasses);
  }, [searchQuery, classes, setClasses]);

  return (
    <>
      <Input
        isClearable
        type="text"
        size="sm"
        placeholder="Search for a class"
        variant="faded"
        value={searchQuery}
        startContent={<UilSearchAlt className="text-neutral-400" />}
        onValueChange={(value) => setSearchQuery(value)}
        {...props}
      />
    </>
  );
};

export default SearchBar;

import PropTypes from "prop-types";

SearchBar.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setClasses: PropTypes.func.isRequired,
};
