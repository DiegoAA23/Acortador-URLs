import prisma from "@/lib/dbt";
import { redirect, notFound } from "next/navigation";

interface RedirectPageProps {
  params: { shorturl: string };
}

const RedirectPage = async ({ params }: RedirectPageProps) => {
  const {shorturl} = await params;

  const url = await prisma.url.findUnique({
    where: {shortUrl: shorturl},
  });

  if (!url) {
    notFound();
  }

  await prisma.url.update({
    where: {
      id: url.id
    },
    data: {visits: {increment: 1}}
  })

  redirect(url.originalUrl);
};

export default RedirectPage;
