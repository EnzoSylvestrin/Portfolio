import { useState } from "react";
import clsx from "clsx";

import Header from "@/components/Header/Header";
import HomeComponent from "@/components/Home/HomeComponent";

export default function Home() {

  const [Theme, setTheme] = useState<'dark' | ''>('dark');

  return (
    <section className={clsx("w-screen h-screen transition-all duration-300", Theme == '' ? 'bg-gray-200' : 'dark bg-zinc-900')}>
      <Header setTheme={setTheme} />
      <HomeComponent />
    </section>
  )
}
