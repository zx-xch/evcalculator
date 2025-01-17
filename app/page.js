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
    <CardDescription>Calculate your edge % for Prizepicks, Underdog, & Betr</CardDescription>
  </CardHeader>
  <CardContent>

  <form onSubmit={calcFunc()} className="flex w-full max-w-sm items-center space-x-2 p-5">
      <Input id="ahrValue" type="number" onChange={event => setAHR(event.target.value/100)} placeholder="Enter Average Leg Hit %" />
      </form>

      <Tabs defaultValue="prizePicks" className="justify-center items-center ">
  <TabsList>
    <TabsTrigger value="prizePicks">
      <Image src="/images/Prizepicks Logo.avif"  width={25} height={25} alt="Prizepicks Logo"/>
    </TabsTrigger>

    <TabsTrigger value="underDog">
      <Image src="/images/UnderdogLogo.png" width={25} height={25} alt="Underdog Logo"/>
    </TabsTrigger>

    <TabsTrigger value="betr">
      <Image src="/images/betrLogo.png" width={25} height={25} alt="Betr Logo"/>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="prizePicks" className="px--10">
    
    5 Flex: {(((AHR**5*(10)+(AHR**4*(1-AHR)*(5)*(2))+(AHR**3*(1-AHR)**2)*(0.4)*(10))-1)*100).toFixed(2)}% <br />
    6 Flex: {(((AHR**6*(25)+(AHR**5*(1-AHR)*(6)*(2))+(AHR**4*(1-AHR)**2)*(0.4)*(15))-1)*100).toFixed(2)}% <br />
    2 Power: {((((AHR**2)*3)-1)*100).toFixed(2)}% <br />
    3 Power: {((((AHR**3)*5)-1)*100).toFixed(2)}% <br />
    4 Power: {(((AHR**4*(10))-1)*100).toFixed(2)}% <br />
    </TabsContent>
  <TabsContent value="underDog">
    2 Power: {((((AHR**2)*3)-1)*100).toFixed(2)}% <br />
    3 Power: {(((AHR**3*(6))-1)*100).toFixed(2)}% <br/>
    4 Power: {(((AHR**4*(10))-1)*100).toFixed(2)}% <br />
    5 Power: {(((AHR**5*(20))-1)*100).toFixed(2)}% <br/>
    4 Flex: {(((AHR**4*(6)+(AHR**3)*(1-AHR)*(1.5)*(4))-1)*100).toFixed(2)}% <br/>
    5 Flex: {(((AHR**5*(10)+(AHR**4*(1-AHR)*(5)*(2.5)))-1)*100).toFixed(2)}% <br />
    6 Flex: {((((AHR**6)*(25)+(AHR**5)*(1-AHR)*6*(2.6)+(AHR**4)*((1-AHR)**2)*15*0.25)-1)*100).toFixed(2)}%
    </TabsContent>
    <TabsContent value="betr">
    
    5 Flex: {((AHR**5*(10)+(AHR**4*(1-AHR)*(5)*(2.5))-1)*100).toFixed(2)}% <br />
    6 Flex: {((AHR**6*(20)+AHR**5*(1-AHR)*(6)*(1.25)+AHR**4*((1-AHR)**2)*(1.05)*(15)-1)*100).toFixed(2)} <br />
    2 Power: {((((AHR**2)*3)-1)*100).toFixed(2)}% <br />
    3 Power: {((((AHR**3)*5)-1)*100).toFixed(2)}% <br />
    4 Power: {(((AHR**4*(10))-1)*100).toFixed(2)}% <br />
    5 Power: {((AHR**5*(20)-1)*100).toFixed(2)}% <br />
    
    </TabsContent>
</Tabs>
  </CardContent>
  <CardFooter>
    <p className='sm-text'>Join our <a href="https://discord.gg/5UbjwReBKx" className='text-emerald-500 cursor-pointer'>DFS community</a></p> 
  </CardFooter>
</Card>
<Analytics />
    </main>
  );
}
