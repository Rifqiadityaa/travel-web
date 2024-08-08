"use client";

import type { PropsWithChildren } from "react";
import QueryProvider from "./QueryProvider";

export default function ApplicationProviders({ children }: PropsWithChildren) {
  return <QueryProvider>{children}</QueryProvider>;
}
