// app/not-found.js

"use client";
export default function NotFound() {
    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-5xl font-bold">404</h1>
            <p className="text-lg">Page Not Found</p>
            <p className="mt-4">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
        </div>
    );
}
