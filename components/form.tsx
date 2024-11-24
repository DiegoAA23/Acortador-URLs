'use client'

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const UrlForm = () => {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(url);
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
        <Button className="p-2 w-full">Acortar URL</Button>
      </div>
    </form>
  );
};
