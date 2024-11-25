'use client'

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const UrlForm = () => {
  const [url, setUrl] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

    }catch(e) {
      console.error('Error URL: ', e);
    }finally{

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
        <Button className="p-2 w-full">Acortar</Button>
      </div>
    </form>
  );
};
