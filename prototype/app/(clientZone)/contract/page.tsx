import Link from "next/link";
import { Title, Text, Paper, Stack, List, ListItem, Button } from "@mantine/core";

export default function ContractPage() {
  return (
    <>
      <Title order={1} mb="xs">
        Smlouva (lehká KZ)
      </Title>
      <Text c="dimmed" mb="xl">
        Zobrazení smlouvy v klientské zóně – lightweight view. V prototypu jen ukázka.
      </Text>
      <Paper p="xl" radius="md" withBorder>
        <Stack gap="md">
          <Title order={3}>Pojištění odpovědnosti – shrnutí</Title>
          <Text size="sm">
            Toto je zjednodušený náhled „smlouvy“ v klientské zóně (KZ). V reálné aplikaci by zde byl PDF nebo strukturovaný obsah smlouvy.
          </Text>
          <List size="sm" spacing="xs">
            <ListItem>Produkt: Pojištění odpovědnosti za škodu</ListItem>
            <ListItem>Stav: Návrh (prototyp)</ListItem>
            <ListItem>Žádná data se neukládají.</ListItem>
          </List>
          <Link href="/dashboard">
            <Button variant="light">Zpět na přehled</Button>
          </Link>
        </Stack>
      </Paper>
    </>
  );
}
