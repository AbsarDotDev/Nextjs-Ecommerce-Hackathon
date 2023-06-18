import { SignUp } from "@clerk/nextjs";
import React from "react";
export default function Page() {
    return <SignUp path="/sign-up" routing="path" signInUrl="/sign-in"/>;
  }