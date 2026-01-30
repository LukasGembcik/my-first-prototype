"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Stepper,
  Button,
  Group,
  TextInput,
  NumberInput,
  Textarea,
  Paper,
  Title,
  Text,
  Stack,
  Checkbox,
  Box,
} from "@mantine/core";
import { liabilityFormSchema, type LiabilityFormData } from "@/lib/types/liability-form";
import { CameraCapture } from "@/components/CameraCapture";

const STEPS = [
  { id: "demands", label: "Potřeby a riziko" },
  { id: "product", label: "Informace o produktu" },
  { id: "applicant", label: "Údaje o žadateli" },
  { id: "document", label: "Dokument (foto)" },
  { id: "summary", label: "Shrnutí" },
];

export function LiabilityWizard() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [documentCaptured, setDocumentCaptured] = useState(false);

  const form = useForm<LiabilityFormData>({
    resolver: zodResolver(liabilityFormSchema),
    defaultValues: {
      demandsAndNeeds: {
        whoIsCovered: "",
        activity: "",
        sumInsured: 500_000,
      },
      applicant: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        zip: "",
      },
      documentAccepted: false,
    },
  });

  const stepFields: FieldPath<LiabilityFormData>[][] = [
    ["demandsAndNeeds.whoIsCovered", "demandsAndNeeds.activity", "demandsAndNeeds.sumInsured"],
    [],
    ["applicant.firstName", "applicant.lastName", "applicant.email", "applicant.phone", "applicant.street", "applicant.city", "applicant.zip"],
    [],
    ["documentAccepted"],
  ];

  const nextStep = async () => {
    const fields = stepFields[active] ?? [];
    const ok = fields.length === 0 ? true : await form.trigger(fields);
    if (ok) setActive((a) => Math.min(a + 1, STEPS.length - 1));
  };
  const prevStep = () => setActive((a) => Math.max(a - 1, 0));

  const handleSubmit = form.handleSubmit(() => {
    setActive(STEPS.length - 1);
    router.push("/contract");
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit}>
        <Stepper active={active} size="sm" mb="xl">
          {STEPS.map((step, i) => (
            <Stepper.Step key={step.id} label={step.label} />
          ))}
        </Stepper>

        {active === 0 && (
          <Paper p="lg" radius="md" withBorder>
            <Title order={3} mb="md">
              Potřeby a riziko (demands and needs)
            </Title>
            <Text size="sm" c="dimmed" mb="md">
              Uveďte, kdo má být pojištěn a jaké riziko chcete kryt pojištěním odpovědnosti.
            </Text>
            <Stack>
              <TextInput
                label="Kdo má být pojištěn"
                placeholder="např. fyzická osoba – majitel nemovitosti"
                {...form.register("demandsAndNeeds.whoIsCovered")}
                error={form.formState.errors.demandsAndNeeds?.whoIsCovered?.message}
              />
              <Textarea
                label="Aktivita / riziko"
                placeholder="Popis činnosti nebo rizika"
                {...form.register("demandsAndNeeds.activity")}
                error={form.formState.errors.demandsAndNeeds?.activity?.message}
              />
              <NumberInput
                label="Požadovaná výše limitu (Kč)"
                min={100_000}
                max={10_000_000}
                step={100_000}
                value={form.watch("demandsAndNeeds.sumInsured")}
                onChange={(v) => form.setValue("demandsAndNeeds.sumInsured", Number(v) || 0)}
                error={form.formState.errors.demandsAndNeeds?.sumInsured?.message}
              />
            </Stack>
          </Paper>
        )}

        {active === 1 && (
          <Paper p="lg" radius="md" withBorder>
            <Title order={3} mb="md">
              Informace o produktu (IPID)
            </Title>
            <Text size="sm" c="dimmed" mb="md">
              Stručný přehled pojištění odpovědnosti – hlavní vlastnosti, co je kryto a co ne.
            </Text>
            <Stack gap="sm">
              <Text size="sm"><strong>Pojištění:</strong> Odpovědnost za škodu (občanská odpovědnost)</Text>
              <Text size="sm"><strong>Krytí:</strong> Škoda na zdraví a majetku třetích osob způsobená pojištěným</Text>
              <Text size="sm"><strong>Limit:</strong> dle zvolené výše (100 000 – 10 000 000 Kč)</Text>
              <Text size="sm" c="dimmed">Prototype – žádná skutečná smlouva.</Text>
            </Stack>
          </Paper>
        )}

        {active === 2 && (
          <Paper p="lg" radius="md" withBorder>
            <Title order={3} mb="md">
              Údaje o žadateli
            </Title>
            <Stack>
              <Group grow>
                <TextInput
                  label="Jméno"
                  {...form.register("applicant.firstName")}
                  error={form.formState.errors.applicant?.firstName?.message}
                />
                <TextInput
                  label="Příjmení"
                  {...form.register("applicant.lastName")}
                  error={form.formState.errors.applicant?.lastName?.message}
                />
              </Group>
              <TextInput
                label="E-mail"
                type="email"
                {...form.register("applicant.email")}
                error={form.formState.errors.applicant?.email?.message}
              />
              <TextInput
                label="Telefon"
                {...form.register("applicant.phone")}
                error={form.formState.errors.applicant?.phone?.message}
              />
              <TextInput
                label="Ulice a číslo"
                {...form.register("applicant.street")}
                error={form.formState.errors.applicant?.street?.message}
              />
              <Group grow>
                <TextInput
                  label="Město"
                  {...form.register("applicant.city")}
                  error={form.formState.errors.applicant?.city?.message}
                />
                <TextInput
                  label="PSČ"
                  placeholder="123 45"
                  {...form.register("applicant.zip")}
                  error={form.formState.errors.applicant?.zip?.message}
                />
              </Group>
            </Stack>
          </Paper>
        )}

        {active === 3 && (
          <Paper p="lg" radius="md" withBorder>
            <Title order={3} mb="md">
              Dokument (volitelně)
            </Title>
            <Text size="sm" c="dimmed" mb="md">
              Můžete připojit fotku dokumentu pomocí kamery. V prototypu se nic neukládá.
            </Text>
            <CameraCapture
              label="Připojit fotku (např. občanky)"
              onCapture={(r) => setDocumentCaptured(!!r)}
            />
          </Paper>
        )}

        {active === 4 && (
          <Paper p="lg" radius="md" withBorder>
            <Title order={3} mb="md">
              Shrnutí
            </Title>
            <Stack gap="xs">
              <Text size="sm"><strong>Potřeby:</strong> {form.watch("demandsAndNeeds.whoIsCovered")} – {form.watch("demandsAndNeeds.activity")}</Text>
              <Text size="sm"><strong>Limit:</strong> {form.watch("demandsAndNeeds.sumInsured")?.toLocaleString("cs-CZ")} Kč</Text>
              <Text size="sm"><strong>Žadatel:</strong> {form.watch("applicant.firstName")} {form.watch("applicant.lastName")}, {form.watch("applicant.email")}</Text>
              <Checkbox
                label="Beru na vědomí informace o produktu a souhlasím s podmínkami (prototyp)."
                {...form.register("documentAccepted")}
                error={form.formState.errors.documentAccepted?.message}
              />
            </Stack>
          </Paper>
        )}

        <Group justify="space-between" mt="xl">
          <Button variant="default" onClick={prevStep} disabled={active === 0}>
            Zpět
          </Button>
          {active < STEPS.length - 1 ? (
            <Button onClick={nextStep}>Další</Button>
          ) : (
            <Button type="submit">Přejít na smlouvu (KZ)</Button>
          )}
        </Group>
      </form>
    </FormProvider>
  );
}
