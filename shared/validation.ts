import { z } from "zod"
import { siteConfig } from "./site"

const gameIds = siteConfig.games.map((g) => g.id) as unknown as [string, ...string[]]

/** Age (in whole years) at the time of submission. */
export function ageFromDOB(dob: string): number {
  const birth = new Date(dob)
  const now = new Date()
  let age = now.getFullYear() - birth.getFullYear()
  const m = now.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--
  return age
}

export const registrationSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Please enter your full name")
      .max(100, "Name is too long")
      .regex(/^[\p{L}\p{M}'.\- ]+$/u, "Name contains invalid characters"),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email("Please enter a valid email address")
      .max(254),
    phone: z
      .string()
      .trim()
      .min(7, "Please enter a valid phone number")
      .max(20, "Phone number is too long")
      .regex(/^\+?[\d\s\-()]{7,20}$/, "Please enter a valid phone number"),
    dateOfBirth: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter your date of birth")
      .refine((v) => !Number.isNaN(new Date(v).getTime()), "Invalid date")
      .refine((v) => {
        const age = ageFromDOB(v)
        return age >= 6 && age <= 99
      }, "Participants must be between 6 and 99 years old"),
    guardianName: z.string().trim().max(100, "Name is too long").optional().or(z.literal("")),
    emergencyContact: z
      .string()
      .trim()
      .min(7, "Please enter an emergency contact number")
      .max(20, "Phone number is too long")
      .regex(/^\+?[\d\s\-()]{7,20}$/, "Please enter a valid phone number"),
    game: z.enum(gameIds, { errorMap: () => ({ message: "Please select a game" }) }),
    agreeTerms: z.literal(true, {
      errorMap: () => ({ message: "You must agree to the Terms & Conditions" }),
    }),
    agreePrivacy: z.literal(true, {
      errorMap: () => ({ message: "You must agree to the Privacy Policy" }),
    }),
    /** Honeypot — must stay empty. Bots that fill it are rejected. */
    website: z.string().max(0, "Invalid submission").optional().or(z.literal("")),
    /** Timestamp when the form was rendered — detects instant bot submissions. */
    formStartedAt: z.number().optional(),
  })
  .superRefine((data, ctx) => {
    const age = ageFromDOB(data.dateOfBirth)
    if (age < 18 && (!data.guardianName || data.guardianName.trim().length < 2)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["guardianName"],
        message: "Parent/guardian name is required for participants under 18",
      })
    }
  })

export type RegistrationInput = z.infer<typeof registrationSchema>
