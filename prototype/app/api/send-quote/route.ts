import { NextResponse } from "next/server";

export async function POST() {
  // Stub: no real email in prototype
  return NextResponse.json({ ok: true, message: "Stub: quote not sent" });
}
