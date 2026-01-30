import { z } from "zod";

export const demandsAndNeedsSchema = z.object({
  whoIsCovered: z.string().min(1, "Vyberte, kdo má být pojištěn"),
  activity: z.string().min(1, "Popište aktivitu / riziko"),
  sumInsured: z.coerce.number().min(100_000, "Min. 100 000 Kč").max(10_000_000),
});

export const applicantSchema = z.object({
  firstName: z.string().min(1, "Jméno je povinné"),
  lastName: z.string().min(1, "Příjmení je povinné"),
  email: z.string().email("Neplatný e-mail"),
  phone: z.string().min(9, "Telefon je povinný"),
  street: z.string().min(1, "Ulice a číslo je povinné"),
  city: z.string().min(1, "Město je povinné"),
  zip: z.string().regex(/^\d{3}\s?\d{2}$/, "PSČ ve formátu 123 45"),
});

export const liabilityFormSchema = z.object({
  demandsAndNeeds: demandsAndNeedsSchema,
  applicant: applicantSchema,
  documentAccepted: z.boolean().refine((v) => v === true, "Souhlas s podmínkami je povinný").optional(),
});

export type DemandsAndNeeds = z.infer<typeof demandsAndNeedsSchema>;
export type Applicant = z.infer<typeof applicantSchema>;
export type LiabilityFormData = z.infer<typeof liabilityFormSchema>;
