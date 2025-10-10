'use client';
import LoginPage from "@/components/auth/LoginCard"; // Path updated to relative for compatibility
import Image from "next/image";
export default function HomePage() {
  return (
   <main className="relative w-full h-screen  backgrounds ">
      <div className="bg bg1">
        <Image src="/bg1.png" alt="" fill priority />
      </div>

   
      <LoginPage />
    </main>
    
  );
}

