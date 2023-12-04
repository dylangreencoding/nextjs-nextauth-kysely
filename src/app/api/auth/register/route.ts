import { NextResponse } from "next/server";
import {hash} from "bcrypt";
import { createUser } from "@/kysely/users-table";

export async function POST(request: Request){
  try {
    const { username, password } = await request.json();
    // // validate username and password HERE
    console.log({username, password});

    const hashedPassword = await hash(password, 10);

    const response = await createUser({
      un: username,
      pw: hashedPassword,
    });

  } catch (e) {
    console.log({e});
  }
  return NextResponse.json({message: "success"});
}