import { UrlContainer } from "@/components/container";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl py-12 md:py-24">
      <div className="space-y-2 text-center items-center justify-center align-middle">
        <h1 className="text-3xl md:text-4xl font-bold">Acortador de URLs</h1>
        <UrlContainer />
      </div>
    </main>
  );
}
