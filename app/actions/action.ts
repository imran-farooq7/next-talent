"use server";

import prisma from "@/prisma/db";

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
