import { AuthGuard } from "@/components/auth/AuthGuard";
import { ClientZoneShell } from "@/components/layout/ClientZoneShell";

export default function ClientZoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <ClientZoneShell>{children}</ClientZoneShell>
    </AuthGuard>
  );
}
