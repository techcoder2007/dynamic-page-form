import { z } from "zod"

export const formSchema = z.object({
    name: z.string().min(4, { message: "Name must 4 charracter" }),
    description: z.string().optional()
})


export type formSchemaType = z.infer<typeof formSchema>;