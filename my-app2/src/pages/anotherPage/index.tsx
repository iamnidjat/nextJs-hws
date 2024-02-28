import { useRouter } from "next/router";
import React from "react";

const AnotherPage = () => {
  const router = useRouter();
  const toEvents = () => {
    router.push("/events");
  };
  return (
    <div>
      <div>AnotherPage!</div>

      <input type="button" onClick={toEvents} value="To events!" />
    </div>
  );
};

export default AnotherPage;
