import * as z from "zod";

export const assetSchema = z.object({
  name: z.string().min(1, "Name is required"),
  ticker: z
    .string()
    .min(1, "Ticker is required")
    .max(5, "Ticker must be 5 characters or less"),
  supply: z.number().min(1, "Supply must be greater than 0"),
  decimals: z
    .number()
    .min(0, "Decimals must be 0 or greater")
    .max(18, "Decimals must be 18 or less"),
  metadata: z.string().optional(),
});

export const sendAssetSchema = z.object({
  recipient: z.string().min(1, "Recipient address is required"),
  amount: z.number().min(1, "Amount must be greater than 0"),
  assetId: z.string().min(1, "Asset ID is required"),
});

export const universeSchema = z.object({
  universeHost: z.string().min(1, "Universe host is required"),
  groupKey: z.string().optional(),
});

export type AssetFormData = z.infer<typeof assetSchema>;
export type SendAssetFormData = z.infer<typeof sendAssetSchema>;
export type UniverseFormData = z.infer<typeof universeSchema>;
