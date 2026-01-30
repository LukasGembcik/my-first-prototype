import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider } from "@/components/providers/MantineProvider";
import { AuthProvider } from "@/lib/contexts/auth-context";

export const metadata: Metadata = {
  title: "Klientská zóna – Prototype",
  description: "Prototype – no data is stored.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <MantineProvider>
          <AuthProvider>{children}</AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
