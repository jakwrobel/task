import React from "react";

export const Error = ({ message }) => {
  return (
    <>
      <div>Error</div>
      <div>{message}</div>
      <div>Refresh the page and try again</div>
    </>
  );
};
