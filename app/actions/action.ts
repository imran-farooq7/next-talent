"use server";

import prisma from "@/prisma/db";
import { revalidatePath } from "next/cache";

export const createTalent = async (prevState: any, formData: FormData) => {
	const data = {
		name: formData.get("name")?.toString()!,
		email: formData.get("email")?.toString()!,
		title: formData.get("title")?.toString()!,
		skills: formData.get("skills")?.toString()!,
	};
	try {
		const createdTalent = await prisma.talent.create({
			data: {
				...data,
			},
		});
		if (createdTalent) {
			revalidatePath("/");
			return {
				...prevState,
				status: "success",
				message: "talent created successfully",
			};
		}
	} catch (error) {
		return {
			...prevState,
			status: "error",
			message: "talent creation failed",
		};
	}
};
export const getAllTalents = async () => {
	const data = await prisma.talent.findMany();
	return data;
};
export const deleteTalent = async (id: string) => {
	const delTalent = await prisma.talent.delete({
		where: {
			id,
		},
	});
	if (delTalent) {
		revalidatePath("/");
		return {
			status: "success",
			message: "talent deleted successfully",
		};
	} else {
		return {
			status: "error",
			message: "talent deletion failed",
		};
	}
};
