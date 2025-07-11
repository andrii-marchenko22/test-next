import { NextRequest, NextResponse } from "next/server";
import { api } from "../../api";
import { parse } from "cookie";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const apiRes = await api.post("auth/login", body);

  const setCookie = apiRes.headers["set-cookie"];

  if (setCookie) {
    const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
    const response = NextResponse.json(apiRes.data);

    for (const cookieStr of cookieArray) {
      const parsed = parse(cookieStr);

      const options = {
        expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
        path: parsed.Path,
        maxAge: Number(parsed["Max-Age"]),
      };

      if (parsed.accessToken) {
        response.cookies.set("accessToken", parsed.accessToken, options);
      }
      if (parsed.refreshToken) {
        response.cookies.set("refreshToken", parsed.refreshToken, options);
      }
    }

    return response;
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
