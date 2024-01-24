"use server"
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { promises as fsPromises } from 'fs';
const prisma = new PrismaClient()

export async function signInAdmin(prevState: any, formData: FormData) {

    const email = formData.get("Email");
    const password = String(formData.get("Password"))
    const user = await prisma.user.findUnique({
        where: {
            email: email as string
        }
    })
    if (!user) {
        throw new Error('User not found');
    }
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    const isMatch = hashedPassword === user.password
    console.log(hashedPassword)
    console.log("dataBase" + user.password)

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '3000h',
    });

    return { token }
}

export async function getProducts() {
    const products = await prisma.product.findMany();
    return { products }
}

export async function addProduct(prevState: any, formData: FormData) {
    console.log(formData)
    const name = formData.get("name")
    const details = formData.get("details")
    const price = parseInt(formData.get("price"), 10);
    const product = await prisma.product.create({
        data: {
            name: name,
            details: details,
            price: price,
        }
    })
    console.log(product)
    const fileOne = formData.get("imageone") as File
    const fileTwo = formData.get("imagetwo") as File
    const fileThree = formData.get("imagethree") as File
    const fileFour = formData.get("imagefour") as File
    const images = await prisma.image.createMany({
        data: [
            { url: `${product.id}-0`, productId: product.id },
            { url: `${product.id}-1`, productId: product.id },
            { url: `${product.id}-2`, productId: product.id },
            { url: `${product.id}-3`, productId: product.id },
        ]
    })
    await saveFile([fileOne, fileTwo, fileThree, fileFour], `${product.id}`);
    return "saved"

}

async function saveFile(file: File[], hash: string) {
    for (let i = 0; i < file.length; i++) {
        const data = await file[i].arrayBuffer();

        try {
            await fsPromises.appendFile(`./public/${hash}-${i}`, Buffer.from(data));
            console.log(`File ${file[i].name} saved successfully.`);
        } catch (error) {
            console.error('Error saving file:', error);
            throw error;
        }
    }
}