"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { CheckCheckIcon, CopyIcon, EyeIcon } from "lucide-react";
import { useState } from "react";

type Url = {
  id: string;
  originalUrl: string;
  shortUrl: string;
  visits: number;
};

export const UrlList = () => {
  const [urls, setUrls] = useState<Url[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [copyUrl, setCopyUrl] = useState<string>("");
 // const [isLoading, setIsLoading] = useState<boolean>(false);
  //console.log(urls);

  const shortenedUrl = (code: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`;

  const handleCopy = (code: string) => {
    const fullUrl = `${shortenedUrl(code)}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopyUrl(code);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setCopyUrl('');
       }, 2000);
    });
  };

  const fetchUrls = async () => {
    //setIsLoading(true);
    try {
      const response = await fetch("/api/urls");
      const data = await response.json();
      setUrls(data);
    } catch (e) {
      console.error("Error fetch: " + e);
    }finally{
      //setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold my-2 text-left">Recientes </h3>
      <ul className="space-y-2">
        {urls.map((url) => {
          return (
            <li
              key={url.id}
              className="flex items-center gap-3 p-4 justify-between bg-card rounded-md text-card-foreground border-2"
            >
              <Link
                href={`/${url.shortUrl}`}
                className="text-blue-600"
                target="_blank"
              >
                {shortenedUrl(url.shortUrl)}
              </Link>
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:bg-muted"
                  onClick={() => handleCopy(url.shortUrl)}
                >
                  {copied && copyUrl == url.shortUrl ? (
                    <CheckCheckIcon className="w-4 h-4" />
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </Button>
                <span className="flex items-center gap-2">
                  <EyeIcon className="h-4 w-4" />
                  {url.visits}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
