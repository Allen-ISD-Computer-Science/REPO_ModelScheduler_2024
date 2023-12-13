import { useState, useEffect } from "react";
import { Input } from "@nextui-org/input";

import UilSearchAlt from '@iconscout/react-unicons/icons/uil-search-alt';

const SearchBar = ({ classes, setClasses, ...props }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Filter classes based on search query
    const filteredClasses = classes.filter((classObj) => classObj.name.toLowerCase().includes(searchQuery.toLowerCase()));
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
        startContent={<UilSearchAlt className="text-gray-400" />}
        onValueChange={(value) => setSearchQuery(value)}
        {...props}
      />
    </>
  );
};

export default SearchBar;