import { Title, Text, Card, Group, Button } from "@mantine/core";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <Title order={1} mb="md">
        Přehled
      </Title>
      <Text c="dimmed" mb="xl">
        Vítejte v klientské zóně. Zde můžete spravovat pojištění a smlouvy.
      </Text>
      <Group>
        <Link href="/onboarding" style={{ textDecoration: "none", color: "inherit" }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={4}>Pojištění odpovědnosti</Title>
            <Text size="sm" c="dimmed" mt="xs">
              Sjednat nebo upravit pojištění odpovědnosti za škodu.
            </Text>
            <Button variant="light" mt="md" size="sm">
              Otevřít
            </Button>
          </Card>
        </Link>
        <Link href="/contract" style={{ textDecoration: "none", color: "inherit" }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={4}>Smlouva (KZ)</Title>
            <Text size="sm" c="dimmed" mt="xs">
              Zobrazit smlouvu v lehké klientské zóně.
            </Text>
            <Button variant="light" mt="md" size="sm">
              Zobrazit
            </Button>
          </Card>
        </Link>
      </Group>
    </>
  );
}
