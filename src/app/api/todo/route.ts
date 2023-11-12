import { NextRequest, NextResponse } from "next/server";

type Job = {
  id?: string;
  message: string;
};
let todoList: Job[] = [];
let count = 0;

// Query
export async function GET(request: NextRequest): Promise<any> {
  return NextResponse.json(todoList);
}

// Insert
export async function POST(request: NextRequest): Promise<any> {
  const { message }: Job = await request.json();

  count++;
  todoList = [...todoList, { id: count.toString(), message }];
  return NextResponse.json({ result: "ok" });
}
