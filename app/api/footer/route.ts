import { NextResponse } from "next/server";
import footerData from "./footer-data.json";

export async function GET() {
  return NextResponse.json(footerData);
}
