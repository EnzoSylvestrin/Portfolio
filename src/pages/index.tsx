import { useState } from "react";

import Header from "@/components/Header/Header";
import clsx from "clsx";

export default function Home() {

  const [Theme, setTheme] = useState<'dark' | ''>('dark');

  return (
    <section className={clsx(" w-screen h-screen", Theme == '' ? 'bg-gray-200' : 'dark bg-zinc-900')}>
      <Header setTheme={setTheme} />
    </section>
  )
}
