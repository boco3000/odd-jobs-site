import { NextResponse } from "next/server";

type RequestHelpPayload = {
  name: string;
  email: string;
  location: string;
  task: string;
  when: string;
};

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export async function POST(req: Request) {
  let data: RequestHelpPayload;

  try {
    data = (await req.json()) as RequestHelpPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const errors: Record<string, string> = {};
  if (!data.name?.trim()) errors.name = "Name is required.";
  if (!data.email?.trim()) errors.email = "Email is required.";
  if (data.email && !isValidEmail(data.email)) errors.email = "Invalid email.";
  if (!data.location?.trim()) errors.location = "Location is required.";
  if (!data.task?.trim()) errors.task = "Task is required.";
  if (!data.when?.trim()) errors.when = "When is required.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // For now: server-side log (later: store in DB, send email, etc.)
  console.log("[request-help]", {
    ...data,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}