"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import api from "../../config/api";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const formSchema = z.object({
    name: z.string().min(2, {message: "Minimal nama harus 2 kata"}),
    email: z.string().email({ message: "Alamat email salag"}),
    password: z.string().min(6, {message: "Password harus lebih dari 6 karakter."}),
    confirmPassword: z.string().min(6, {message: "Password harus lebih dari 6 karakter."}),
    role: z.enum(["admin", "author"], { message: "Role must be either admin or author" })
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password tak cocok"
});


const RegisterPage = () => {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "author"
        },
    });

    const onSubmit = async (values) => {
        try {
            const { data } = await api.post("/auth/register", {
                name: values.name,
                email: values.email,
                password: values.password,
                role: values.role
            });
            localStorage.setItem("token", data.data.token);
            router.push("/admin/dashboard");
        } catch (error) {
            setErrorMessage(
                error.resolver?.data?.message || "registrasi gagal, silakan coba lagi."
            );
        }
    };

        return (
            <div className="flex justify-center items-center h-screen">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-6">
                  <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>
        
                  {errorMessage && (
                    <p className="text-red-500 text-center mb-4">{errorMessage}</p>
                  )}
        
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
        
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="yourname@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
        
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="******" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
        
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="******" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
        
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <FormControl>
                          <select className="w-full px-3 py-2 border rounded-lg" {...field}>
                            <option value="admin">Admin</option>
                            <option value="author">Author</option>
                          </select>
                        </FormControl>
                        <FormDescription>Select your role</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
        
                  <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                    Register
                  </Button>
                </form>
              </Form>
            </div>
          );
        }


export default RegisterPage;