import { NextResponse } from "next/server";

type WorkerApplicationPayload = {
  name: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  note?: string;
  skills: string[];
};

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export async function POST(req: Request) {
  let data: WorkerApplicationPayload;

  try {
    data = (await req.json()) as WorkerApplicationPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const errors: Record<string, string> = {};
  if (!data.name?.trim()) errors.name = "Name is required.";
  if (!data.email?.trim()) errors.email = "Email is required.";
  if (data.email && !isValidEmail(data.email)) errors.email = "Invalid email.";
  if (!data.phone?.trim()) errors.phone = "Phone is required.";
  if (!data.location?.trim()) errors.location = "Location is required.";
  if (!data.availability?.trim()) errors.availability = "Availability is required.";
  if (!Array.isArray(data.skills) || data.skills.length === 0)
    errors.skills = "Select at least one skill.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  console.log("[worker-application]", {
    ...data,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}