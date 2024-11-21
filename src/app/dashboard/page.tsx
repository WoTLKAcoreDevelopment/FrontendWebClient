"use client";


import ProtectedRoute from "@/app/components/ProtectedRoute";

const DashboardPage = () => {
    return (
        <ProtectedRoute>
            <div className="min-h-screen flex justify-center items-center">
                Dashboard
            </div>
        </ProtectedRoute>
    );
};

export default DashboardPage;