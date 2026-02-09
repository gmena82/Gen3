import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_PATHS = new Set<string>(["/"]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow all public/static assets (files with extensions)
  if (pathname.includes(".")) {
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  if (ALLOWED_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"],
};
