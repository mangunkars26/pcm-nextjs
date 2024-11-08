
"use client";

// import AdminLayout from "./layout";
import AdminPage from "./AdminPage";
import { AuthProvider } from "@/context/AuthContext";

export default function MainAdmin() {


  return (
    <AuthProvider>
     {/* <AdminLayout> */}
        <div>
        <AdminPage />
        </div>
    {/* </AdminLayout> */}
    </AuthProvider>
  );
}
