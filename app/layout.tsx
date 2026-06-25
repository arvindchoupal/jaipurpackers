import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shree relocation Packers and Movers Jaipur",
  description:
    "Shree relocation Packers and Movers Jaipur offers reliable household shifting, office relocation, packing and moving services. Call 9001189176 for safe and fast shifting.",
  keywords: [
    "Packers and Movers in Jaipur",
    "Movers and Packers Jaipur",
    "Best Packers and Movers Jaipur",
    "Household Shifting Jaipur",
    "Office Shifting Services Jaipur",
    "Home Relocation Jaipur",
    "Local Packers Movers Jaipur",
    "Shree relocation Packers and Movers Jaipur",
    "Packers and Movers Bhankrota Jaipur",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
