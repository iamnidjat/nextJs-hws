import Link from "next/link";
import React from "react";

const ThirdIntercepting = () => {
  return (
    <div>
      ThirdIntercepting Page!
      <div>
        <Link href="/intercepting/second">AAA</Link>
      </div>
    </div>
  );
};

export default ThirdIntercepting;
