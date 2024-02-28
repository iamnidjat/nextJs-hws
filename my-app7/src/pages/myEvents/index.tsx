import React from "react";
import { getSession } from "next-auth/react";
import { events } from "../../../db.json";

const MyEvents = ({ myEvents }: any) => {
  return (
    <div>
      {myEvents.length > 0 ? (
        myEvents.map((event: any) => (
          <div key={event.id}>
            <div>Type: {event.type}</div>
          </div>
        ))
      ) : (
        <div>You do not have an access to see events!</div>
      )}
    </div>
  );
};

export default MyEvents;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin/callbackUrl=http://localhost:3000/myEvents",
        permanent: false,
      },
    };
  }

  return {
    props: {
      myEvents: session ? events : [],
    },
  };
}
