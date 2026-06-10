import type { Metadata } from "next";

export function marketingMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: `/${string}` | "/";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
  };
}
