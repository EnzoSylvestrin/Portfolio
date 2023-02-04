import { useEffect, useState } from "react";
import clsx from "clsx";

import Header from "@/components/sections/Header/Header";
import HomeComponent from "@/components/sections/Home/HomeComponent";
import About from "@/components/sections/About/About";
import Skills from "@/components/sections/Skills/Skills";

export default function Home() {

  const [Theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    let theme: string | null = localStorage.getItem('theme');
    setTheme(theme == null ? 'dark' : theme == 'dark' ? 'dark' : 'light');

    let color1 = localStorage.getItem('1');
    let color2 = localStorage.getItem('2');
    let color3 = localStorage.getItem('3');

    let style = document.body.style;

    style.setProperty('--first', color1);
    style.setProperty('--second', color2);
    style.setProperty('--third', color3);
  }, []);

  return (
    <section className={clsx("transition-all duration-300", Theme == 'light' ? 'bg-gray-200' : 'dark bg-zinc-900')}>
      <Header setTheme={setTheme} />
      <HomeComponent />
      <About />
      <Skills />
    </section>
  )
}
