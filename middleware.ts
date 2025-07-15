// middleware.ts
import { NextResponse } from "next/server";

const locales = ["en", "ru", "kg"];
const defaultLocale = "en";

export function middleware(request: Request) {
  // Temporarily disable middleware
  return NextResponse.next();
  /*
  const { pathname } = new URL(request.url);
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
  */
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
