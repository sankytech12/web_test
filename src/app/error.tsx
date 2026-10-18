"use client";

import { Button } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <Container className="py-32 text-center">
      <h1 className="font-display font-bold tracking-tight text-3xl">Something went wrong</h1>
      <p className="mt-3 text-muted">An unexpected error occurred. Please try again.</p>
      <Button onClick={reset} className="mt-8">Try again</Button>
    </Container>
  );
}
