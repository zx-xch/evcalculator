"use client";

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
      <Card>
  <CardHeader>
    <CardTitle>EV Calculator</CardTitle>
    <CardDescription>Calculate your expected value for Prizepicks and Underdog</CardDescription>
  </CardHeader>
  <CardContent>

  <form onSubmit={calcFunc()} className="flex w-full max-w-sm items-center space-x-2 p-5">
      <Input id="ahrValue" type="number" onChange={event => setAHR(event.target.value)} placeholder="Enter your Leg AHR" />
      </form>

      <Tabs defaultValue="prizePicks" className="justify-center items-center">
  <TabsList>
    <TabsTrigger value="prizePicks">
      <img src="https://images.prismic.io/colormatics/ee35bee7-9d3e-41f7-9b96-905305d14a12_Prizepicks+P.png?auto=format%2Ccompress&fit=max&q=50&w=800" width={25}/>
    </TabsTrigger>

    <TabsTrigger value="underDog">
      <img src="https://seeklogo.com/images/U/underdog-fantasy-logo-C2DBD36E93-seeklogo.com.png" width={25}/>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="prizePicks" className="px--10">
    5 Man: {(((AHR**5*(10)+(AHR**4*(1-AHR)*(5)*(2))+(AHR**3*(1-AHR)**2)*(0.4)*(10))-1)*100).toFixed(2)}% <br />
    6 Man: {(((AHR**6*(25)+(AHR**5*(1-AHR)*(6)*(2))+(AHR**4*(1-AHR)**2)*(0.4)*(15))-1)*100).toFixed(2)}% <br />
    4 Power: {(((AHR**4*(10))-1)*100).toFixed(2)}% <br />
    </TabsContent>
  <TabsContent value="underDog">
    3 Power: {(((AHR**3*(6))-1)*100).toFixed(2)} <br/>
    5 Power: {(((AHR**5*(20))-1)*100).toFixed(2)} <br/>
    4 Flex: {(((AHR**4*(6)+(AHR**3)*(1-AHR)*(1.5)*(4))-1)*100).toFixed(2)} <br/>
    5 Flex: {(((AHR**5*(10)+(AHR**4*(1-AHR)*(5)*(2.5)))-1)*100).toFixed(2)}
    </TabsContent>
</Tabs>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    </main>
  );
}
