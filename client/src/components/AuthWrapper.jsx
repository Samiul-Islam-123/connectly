"use client";
import { useRouter } from "next/navigation";

const AuthWrapper = ({ children }) => {
  const router = useRouter();
  const token = localStorage.getItem("token");

  if (
    token &&
    (router.pathname === "/auth" || router.pathname === "/otpVerification")
  ) {
    router.push("/");
  } else if (!token) {
    router.push("/auth");
  }
  return { children };
};

export default AuthWrapper;
