import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://api.unsplash.com/photos/random", {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_KEY}`,
    },
  });

  const image = await response.json();
  return NextResponse.json({ image });
}
