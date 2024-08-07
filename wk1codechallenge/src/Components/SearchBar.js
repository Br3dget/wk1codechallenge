import React, {useState, useCallback} from "react";

function Search({filter}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = useCallback((event)=> {
    setSearchTerm(event.target.value)
    filter(event.target.value);
  }, [searchTerm, filter])
  

  return (
    <div className="ui large fluid icon input">
      <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search by description..."
    />
    </div>
  );
}

export default SearchBar;