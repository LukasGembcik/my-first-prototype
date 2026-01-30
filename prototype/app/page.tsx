"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/contexts/auth-context";
import { Container, Title, Text, Paper, TextInput, PasswordInput, Button, Stack, Box } from "@mantine/core";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().min(1, "Zadejte e-mail").email("Neplatný e-mail"),
  password: z.string().min(1, "Zadejte heslo"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function PublicHomePage() {
  const { user, login, isReady } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    if (!isReady) return;
    if (user) {
      router.replace("/dashboard");
    }
  }, [isReady, user, router]);

  const onSubmit = (data: LoginForm) => {
    if (login(data.email, data.password)) {
      router.replace("/dashboard");
    } else {
      setError("root", { message: "Přihlášení se nezdařilo." });
    }
  };

  if (!isReady) return null;
  if (user) return null;

  return (
    <Container size="sm" py="xl">
      <Box mb="xl">
        <Title order={1}>Klientská zóna</Title>
        <Text c="dimmed" mt="xs">
          Prototype – no data is stored.
        </Text>
      </Box>
      <Paper shadow="sm" p="xl" radius="md" withBorder>
        <Title order={2} mb="md">
          Přihlášení
        </Title>
        <Text size="sm" c="dimmed" mb="lg">
          Pro vstup do klientské zóny zadejte libovolný e-mail a heslo (prototyp nekontroluje údaje).
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextInput
              label="E-mail"
              placeholder="vas@email.cz"
              {...register("email")}
              error={errors.email?.message}
              required
            />
            <PasswordInput
              label="Heslo"
              placeholder="••••••••"
              {...register("password")}
              error={errors.password?.message}
              required
            />
            {errors.root && (
              <Text size="sm" c="red">
                {errors.root.message}
              </Text>
            )}
            <Button type="submit" fullWidth>
              Přihlásit se
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
