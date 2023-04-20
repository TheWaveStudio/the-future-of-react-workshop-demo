import React from "react";

export const Quote = ({ quote }: { quote?: string }) => {
  return quote ? (
    <div className="absolute-center">
      <h1 className="heading-h1 text-center ld-background-gradient-text">
        "{quote}"
      </h1>
    </div>
  ) : (
    <></>
  );
};
