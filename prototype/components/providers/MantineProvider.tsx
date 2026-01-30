"use client";

import { MantineProvider as MantineProviderBase } from "@mantine/core";
import { appTheme } from "@/lib/theme/mantine-theme";
import "@mantine/core/styles.css";

export function MantineProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProviderBase theme={appTheme} defaultColorScheme="light">
      {children}
    </MantineProviderBase>
  );
}
