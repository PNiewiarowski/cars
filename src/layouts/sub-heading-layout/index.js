import React from "react";
import { Typography } from "../../components";

function SubHeadingLayout({ message }) {
  return (
    <Typography>
      <Typography.SubHeading>{message}</Typography.SubHeading>
    </Typography>
  );
}

export default SubHeadingLayout;