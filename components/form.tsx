'use client'

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface ShortenFormProps {
  handleUrlShort: () => void;
}
export const UrlForm = ({handleUrlShort}:ShortenFormProps) => {
  const [url, setUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    //console.log(url);

    try{
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({url})
      });
      await response.json();
      setUrl('');
      handleUrlShort();
    }catch(e) {
      console.error('Error URL: ', e);
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Input
          className="my-4 h-12 border-2 border-black bg-white"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="url"
          placeholder="URL"
          required
        />
        <Button className="p-2 w-full" type="submit" disabled={isLoading}>
          {isLoading ? "Acortando.." : "Acortar"}
        </Button>
      </div>
    </form>
  );
};
