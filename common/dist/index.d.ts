import z from 'zod';
export declare const signUpInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    lastName: string;
    firstName?: string | undefined;
}, {
    email: string;
    password: string;
    lastName: string;
    firstName?: string | undefined;
}>;
export declare const signInInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const postInput: z.ZodObject<{
    content: z.ZodString;
    title: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    title: string;
}, {
    content: string;
    title: string;
}>;
export declare const updatePostInput: z.ZodObject<{
    content: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    published: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    published: boolean;
    content?: string | undefined;
    title?: string | undefined;
}, {
    published: boolean;
    content?: string | undefined;
    title?: string | undefined;
}>;
export type SignUpInputParams = z.infer<typeof signUpInput>;
export type SignInInputParams = z.infer<typeof signInInput>;
export type postInputParams = z.infer<typeof postInput>;
