import React, { Fragment, useState } from "react";
import Navbar from "../Layouts/Navbar";
import Home from "../Layouts/Home";
import MinigameButton from "../Components/MinigameButton";

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Fragment>
      <Navbar onSearch={handleSearch} />
      <Home searchQuery={searchQuery} />
      <MinigameButton />
    </Fragment>
  );
};

export default App;
