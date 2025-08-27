"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email/Phone:", email, "Password:", password);
    };
    return (
        <div className="relative min-h-screen w-full bg-black">
            <Image
                src="/images/themuvi.jpg"
                alt="Background"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex justify-center items-center min-h-screen">
                <div className="bg-black/80 p-10 rounded-md w-[480px]">
                    <h1 className="text-white text-3xl font-bold mb-6">Sign In</h1>

                    <form className="flex flex-col space-y-4 w-[22vw]" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Email or phone number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-3 bg-[#333] rounded text-white focus:outline-none focus:ring-1 focus:ring-white"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-3 bg-[#333] rounded text-white focus:outline-none focus:ring-1 focus:ring-white"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-red-600 text-white font-bold py-3 rounded hover:bg-red-700 transition"
                        >
                            <Link  href={"/"}>Sign In</Link>
                        </button>
                    </form>
                    <div className="flex items-center justify-between text-gray-400 text-sm mt-4">
                        <label className="flex items-center gap-1">
                            <input type="checkbox" className="accent-red-600" />
                            Remember me
                        </label>
                        <Link href={"/"} className="hover:underline"> Need help?</Link>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-6 cursor-pointer hover:underline">
                        <Image
                            src="/images/facebook.avif"
                            alt="Facebook"
                            width={20}
                            height={20}
                        />
                        <span>Login with Facebook</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-6">
                        New to myMuvi?{" "}
                        <a href="#" className="text-white hover:underline">
                            Sign up now.
                        </a>
                    </p>
                    <p className="text-gray-500 text-xs mt-4">
                        This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                            Learn more.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}






