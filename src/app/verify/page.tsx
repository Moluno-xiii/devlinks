"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { updateVerification } from "../../../appwrite";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type Props = {};

const Verification = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");
  const [status, setStatus] = useState<string>("Verifying your account...");
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user) {
    // if (user && user.emailVerification) {
      router.push("/homepage");
    }
    if (userId && secret) {
      updateVerification(userId as string, secret as string)
        .then(() => {
          setStatus("Verification successful. Redirecting to login...");
          console.log("login successful");
          console.log(secret);
          console.log(userId);
          router.push("/");
        })
        .catch((error) => {
          console.log("Verification failed", error);
          setStatus(
            "Verification failed. Please try again or contact support.",
          );
          console.log(secret);
          console.log(userId);
          console.log(error.message)
          throw error;
        });
    } else {
      setStatus(
        "Invalid verification link. Please check your email and try again.",
      );
    }
  }, [userId, user, secret, router]);
  return <div>{status}</div>;
};

export default Verification;
