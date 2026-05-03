import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // ✅ Read body from request
    const { email, password } = await request.json();

    const response = await fetch(
      `${process.env.BACKEND_URL}${process.env.LOGIN_URL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}