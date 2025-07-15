import { ReactNode } from "react";

export const metadata = {
  title: "Your Site Title",
  description: "Your site description here",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
