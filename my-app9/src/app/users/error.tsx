'use client';
import React from "react";

const ErrorBoundaryUsers = ({ error }: {error: Error}) => {
  return (
    <div>
      <div>ErrorBoundaryUsers Page!</div>
      <div>Error: {error.message}</div>
    </div>
  );
};

export default ErrorBoundaryUsers;
