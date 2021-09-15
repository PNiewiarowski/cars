import React from "react";
import { Typography } from "../../components";

function SubHeadingContainer({ message }) {
  return (
    <Typography>
      <Typography.SubHeading>{message}</Typography.SubHeading>
    </Typography>
  );
}

export default SubHeadingContainer;