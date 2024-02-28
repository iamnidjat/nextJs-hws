import type { NextApiRequest, NextApiResponse } from "next";
import { users } from "../../../../db.json";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(users, { status: 200 });
}

export async function POST(req: Request, res: NextApiResponse) {
  const { newUser } = await req.json();
  const fullUser = {
    id: Date.now(),
    name: newUser,
    username: "nothing",
    email: "nothing",
    address: {
      street: "nothing",
      suite: "nothing",
      city: "nothing",
      zipcode: "nothing",
      geo: {
        lat: "nothing",
        lng: "nothing",
      },
    },
    phone: "nothing",
    website: "nothing",
    company: {
      name: "nothing",
      catchPhrase: "nothing",
      bs: "nothing",
    },
  };

  users.push(fullUser);

  return NextResponse.json(fullUser, { status: 201 });
}

export async function DELETE(req: Request, res: NextApiResponse) {
  const { id } = await req.json();

  const userIndex = users.findIndex((user: any) => {
    return user.id == parseInt(id);
  });

  if (userIndex !== -1) {
    users.splice(userIndex, 1);

    return NextResponse.json(users[userIndex], { status: 204 }); //
  } else {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}

export async function PATCH(req: Request, res: NextApiResponse) {
  const { newName, id } = await req.json();

  const userIndex = users.findIndex((user: any) => user.id == parseInt(id));

  if (userIndex !== -1) {
    users[userIndex].name = newName;

    return NextResponse.json(users[userIndex], { status: 200 });
  } else {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}
