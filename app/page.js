"use client";

import Image from 'next/image'
import { Analytics } from "@vercel/analytics/react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader,CardTitle } from "@/components/ui/card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

import { useEffect, useState } from 'react';

export default function Home() {

  const [AHR, setAHR] = useState()

function calcFunc(event) {
  console.log(AHR)
  console.log("test")
}

  return (
    <main className="flex h-screen justify-center items-center">
      <Card className="w-9/12">
  <CardHeader>
    <CardTitle>Expected Value Calculator</CardTitle>
    <CardDescription>Calculate your edge % for Prizepicks and Underdog</CardDescription>
  </CardHeader>
  <CardContent>

  <form onSubmit={calcFunc()} className="flex w-full max-w-sm items-center space-x-2 p-5">
      <Input id="ahrValue" type="number" onChange={event => setAHR(event.target.value)} placeholder="Enter Average Leg Hit Rate" />
      </form>

      <Tabs defaultValue="prizePicks" className="justify-center items-center ">
  <TabsList>
    <TabsTrigger value="prizePicks">
      <Image src="/images/Prizepicks Logo.avif"  width={25} height={25} alt="Prizepicks Logo"/>
    </TabsTrigger>

    <TabsTrigger value="underDog">
      <Image src="/images/UnderdogLogo.png" width={25} height={25} alt="Underdog Logo"/>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="prizePicks" className="px--10">
    5 Man: {(((AHR**5*(10)+(AHR**4*(1-AHR)*(5)*(2))+(AHR**3*(1-AHR)**2)*(0.4)*(10))-1)*100).toFixed(2)}% <br />
    6 Man: {(((AHR**6*(25)+(AHR**5*(1-AHR)*(6)*(2))+(AHR**4*(1-AHR)**2)*(0.4)*(15))-1)*100).toFixed(2)}% <br />
    4 Power: {(((AHR**4*(10))-1)*100).toFixed(2)}% <br />
    </TabsContent>
  <TabsContent value="underDog">
    3 Power: {(((AHR**3*(6))-1)*100).toFixed(2)}% <br/>
    5 Power: {(((AHR**5*(20))-1)*100).toFixed(2)}% <br/>
    4 Flex: {(((AHR**4*(6)+(AHR**3)*(1-AHR)*(1.5)*(4))-1)*100).toFixed(2)}% <br/>
    5 Flex: {(((AHR**5*(10)+(AHR**4*(1-AHR)*(5)*(2.5)))-1)*100).toFixed(2)}%
    </TabsContent>
</Tabs>
  </CardContent>
  <CardFooter>
    <p className='sm-text'>Join our <a href="https://discord.gg/VbUWjkJ2" className='text-emerald-500 cursor-pointer'>DFS community</a></p> 
  </CardFooter>
</Card>
<Analytics />
    </main>
  );
}
