import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-gray-800">FITZ FUSION</h1>
          <nav>
            <Button variant="link" className="mr-4">Home</Button>
            <Button variant="link" className="mr-4">About</Button>
            <Button variant="link" className="mr-4">Contact</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-1 flex flex-col items-center justify-center px-4 py-8">
        <Card className="w-full max-w-2xl mb-8">
          <CardHeader>
            <CardTitle className="text-center text-3xl">Welcome to FITZ FUSION</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">
              Discover the latest trends in fashion with FITZ FUSION. Our collection is designed to bring out the best in you.
            </p>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <div className="w-full max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            At FITZ FUSION, we believe in creating fashion that not only looks good but also feels good. Our mission is to provide high-quality clothing that combines style and comfort.
          </p>
          <Button variant="primary">Learn More</Button>
        </div>
      </main>

      <footer className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2023 FITZ FUSION. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;