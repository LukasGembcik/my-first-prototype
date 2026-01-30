import { Title, Text } from "@mantine/core";

export default function PaymentProcessingPage() {
  return (
    <>
      <Title order={1} mb="md">
        Platba
      </Title>
      <Text c="dimmed">
        Placeholder pro zpracování platby (např. GoPay). V prototypu bez funkční integrace.
      </Text>
    </>
  );
}
