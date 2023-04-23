import React from "react";

export const Quote = ({ quote }: { quote?: string }) => {
  return (
    <div className="absolute-center">
      <h1 className="heading-h1 text-center ld-text-gradient">"{quote}"</h1>
    </div>
  );
};
