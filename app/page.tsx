import Image from "next/image";

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <h1 className="inline text-[#F00]" style={{ fontSize: 30 }}>Welcome to Next.js!</h1>
      <Image
        className="dark:invert h-5 w-[100px]"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
      <Button variant="outline">Button</Button>
    </div>
  );
}
