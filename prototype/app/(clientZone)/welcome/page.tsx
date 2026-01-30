import { Title, Text } from "@mantine/core";

export default function WelcomePage() {
  return (
    <>
      <Title order={1} mb="md">
        Uvítání
      </Title>
      <Text>
        Vítejte v klientské zóně. Tato stránka slouží jako úvodní informace. Použijte menu vlevo pro navigaci.
      </Text>
    </>
  );
}
