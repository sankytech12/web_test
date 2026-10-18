import { routes } from "@/core/config/routes";
import { ButtonLink } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-display font-bold tracking-tight text-8xl text-accent">404</p>
      <h1 className="mt-4 font-display font-bold tracking-tight text-3xl">Page not found</h1>
      <p className="mt-3 text-muted">The page you are looking for does not exist or has moved.</p>
      <ButtonLink href={routes.home} className="mt-8">Back to home</ButtonLink>
    </Container>
  );
}
