import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { CopyIcon, EyeIcon } from "lucide-react";

export const UrlList = () => {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold my-2 text-left">Recents</h3>
      <ul className="space-y-2">
        <li className="flex items-center gap-3 p-4 bg-white rounded justify-between border-2 border-black">
          <Link href="" className="text-blue-600" target="_blank">
            https://es.react.dev/learn/javascript-in-jsx-with-curly-braces
          </Link>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:bg-muted"
            >
              <CopyIcon className="w-4 h-4" />
            </Button>
            <span className="flex items-center">
              <EyeIcon className="h-4 w-4" />
              Views
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
