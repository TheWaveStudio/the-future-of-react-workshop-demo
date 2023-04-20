import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const quote = await response.json();

  return NextResponse.json({ quote });
}
