"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

const CopyCode = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Copy Theme Css</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Theme</DialogTitle>
            <DialogDescription>
              Copy and paste the following code into your CSS file.
            </DialogDescription>
          </DialogHeader>
          <div className="text-white  rounded-md h-[200px] overflow-auto prose lg:prose-xs">
            <pre>
              {`@layer base {
    :root {
      --background: 0 0% 100%;
      --foreground: 240 10% 3.9%;
      --card: 0 0% 100%;
      --card-foreground: 240 10% 3.9%;
      --popover: 0 0% 100%;
      --popover-foreground: 240 10% 3.9%;
      --primary: 142.1 76.2% 36.3%;
      --primary-foreground: 355.7 100% 97.3%;
      --secondary: 240 4.8% 95.9%;
      --secondary-foreground: 240 5.9% 10%;
      --muted: 240 4.8% 95.9%;
      --muted-foreground: 240 3.8% 46.1%;
      --accent: 240 4.8% 95.9%;
      --accent-foreground: 240 5.9% 10%;
      --destructive: 0 84.2% 60.2%;
      --destructive-foreground: 0 0% 98%;
      --border: 240 5.9% 90%;
      --input: 240 5.9% 90%;
      --ring: 142.1 76.2% 36.3%;
      --radius: 0.5rem;
    }
    
    .dark {
      --background: 20 14.3% 4.1%;
      --foreground: 0 0% 95%;
      --card: 24 9.8% 10%;
      --card-foreground: 0 0% 95%;
      --popover: 0 0% 9%;
      --popover-foreground: 0 0% 95%;
      --primary: 142.1 70.6% 45.3%;
      --primary-foreground: 144.9 80.4% 10%;
      --secondary: 240 3.7% 15.9%;
      --secondary-foreground: 0 0% 98%;
      --muted: 0 0% 15%;
      --muted-foreground: 240 5% 64.9%;
      --accent: 12 6.5% 15.1%;
      --accent-foreground: 0 0% 98%;
      --destructive: 0 62.8% 30.6%;
      --destructive-foreground: 0 85.7% 97.3%;
      --border: 240 3.7% 15.9%;
      --input: 240 3.7% 15.9%;
      --ring: 142.4 71.8% 29.2%;
    }
}
                  `}
            </pre>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CopyCode;
