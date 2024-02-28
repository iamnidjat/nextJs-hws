'use client'
import React, { useState } from 'react';

const Template = () => {
  const [value, setValue] = useState("");

  const changeValue = () => {
    setValue('myValue');
  }

  return (
    <div>
      <div>Value: {value}</div>
      <input type='button' onClick={changeValue} value="Change"/>
    </div>
  );
};

export default Template;