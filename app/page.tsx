"use client";
import { Suspense } from "react";
import Home from "./components/Home";

export default function Page() {
  return (
    <div className="grow overflow-y-auto">
      <Suspense>
        <Home />
      </Suspense>
    </div>
  );
}
