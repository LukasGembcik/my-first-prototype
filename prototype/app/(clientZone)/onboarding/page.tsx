import { Title, Text } from "@mantine/core";
import { LiabilityWizard } from "@/components/liability/LiabilityWizard";

export default function OnboardingPage() {
  return (
    <>
      <Title order={1} mb="xs">
        Pojištění odpovědnosti
      </Title>
      <Text c="dimmed" mb="xl">
        Vyplňte kroky formuláře. Design odpovídá požadavkům na předkontraktní informace (IDD). Prototype – no data is stored.
      </Text>
      <LiabilityWizard />
    </>
  );
}
