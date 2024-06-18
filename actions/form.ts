'use server';

import prisma from "@/lib/prisma";
import { formSchema, formSchemaType } from "@/schemas/form";

export async function createDynamicForm(data: formSchemaType) {
    const validation = formSchema.safeParse(data);

    if (!validation.success) {
        throw new Error("form not valid !")
    }

    const form = await prisma.form.create({
        data: {
            userId: "1",
            name: data?.name,
            description: data?.description
        }
    });

    if (!form) {
        throw new Error("somethings went wrong");
    }
}