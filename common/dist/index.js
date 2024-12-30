"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostInput = exports.postInput = exports.signInInput = exports.signUpInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpInput = zod_1.default.object({
    email: zod_1.default.string().email({ message: "Invalid email" }),
    password: zod_1.default.string().min(6, { message: "Password should be atleast 6 characters long" }),
    firstName: zod_1.default.string().min(3).optional(),
    lastName: zod_1.default.string().min(3)
});
exports.signInInput = zod_1.default.object({
    email: zod_1.default.string().email({ message: "Invalid email" }),
    password: zod_1.default.string()
});
exports.postInput = zod_1.default.object({
    content: zod_1.default.string().max(300),
    title: zod_1.default.string().max(20)
});
exports.updatePostInput = zod_1.default.object({
    content: zod_1.default.string().max(300).optional(),
    title: zod_1.default.string().max(20).optional(),
    published: zod_1.default.boolean()
});
