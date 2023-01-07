import * as zod from "zod";

export const AddressValidationSchema = zod.object({
  zipCode: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/, "Cep invalido"),
  address: zod
    .string()
    .max(250, "Endereço invalido, limite máximo de caractere")
    .trim(),
  number: zod
    .string()
    .max(250, "Numero invalido, limite máximo de caractere")
    .trim(),
  complemente: zod
    .string()
    .max(250, "Complemento invalido, limite máximo de caractere")
    .nullable(),
  district: zod
    .string()
    .max(250, "Bairro invalido, limite máximo de caractere")
    .trim(),
  city: zod
    .string()
    .max(250, "cidade invalido, limite máximo de caractere")
    .trim(),
  uf: zod.string().max(2, "Uf invalido, limite máximo de caractere").trim(),
});

export type AddressFormData = zod.infer<typeof AddressValidationSchema>;
