import { NextResponse } from "next/server";
import headerData from "./header-data.json";

export async function GET() {
  return NextResponse.json(headerData);
}
