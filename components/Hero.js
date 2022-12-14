import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-center text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Olá, sou o Macir, engenheiro de software full-stack.</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Fique a vontade e veja o que estive fazendo. Vamos descobrir o que podemos construir juntos!</p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={userData.avatarUrl} alt="Macir" className='rounded-full max-w-full h-96 align-middle'/>
        </div>                
    </div>
  );
}
