"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/contexts/auth-context";
import { AppShell, Group, Button, Text, NavLink, Box } from "@mantine/core";

const nav = [
  { href: "/dashboard", label: "Přehled" },
  { href: "/onboarding", label: "Pojištění odpovědnosti" },
  { href: "/contract", label: "Smlouva (KZ)" },
  { href: "/payment-processing", label: "Platba" },
  { href: "/welcome", label: "Uvítání" },
  { href: "/back-office", label: "Back office" },
];

export function ClientZoneShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{ width: 240, breakpoint: "sm" }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Link href="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
            <Text fw={700} size="lg">
              Klientská zóna
            </Text>
          </Link>
          <Group>
            <Text size="sm" c="dimmed">
              {user?.email}
            </Text>
            <Button variant="light" size="xs" onClick={handleLogout}>
              Odhlásit
            </Button>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} style={{ textDecoration: "none", color: "inherit" }}>
            <NavLink component="div" label={item.label} active={pathname === item.href} />
          </Link>
        ))}
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
        <Box mt="xl" pt="md" style={{ borderTop: "1px solid var(--mantine-color-default-border)" }}>
          <Text size="xs" c="dimmed">
            Prototype – no data is stored.
          </Text>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
