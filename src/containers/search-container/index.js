import React from "react";
import { FaSearch } from "react-icons/fa";
import { Form } from "../../components";

function SearchContainer({ value, setValue }) {
  return (
    <Form onSubmit={(event) => event.preventDefault()} >
      <Form.InputText
        id="search-form"
        icon={<FaSearch />}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Find car..."
        type="text"
      />
    </Form >
  );
}

export default SearchContainer;