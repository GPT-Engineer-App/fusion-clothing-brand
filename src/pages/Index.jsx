import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">FITZ FUSION</h1>
          <p className="mt-4 text-xl">Where Fashion Meets Comfort</p>
          <Button className="mt-6">Explore Now</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">About Us</h2>
          <p className="mt-4 text-center text-gray-600">
            FITZ FUSION is a modern clothing brand that blends style and comfort. Our mission is to provide high-quality apparel that makes you look and feel great.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <div className="mt-8 max-w-lg mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="mb-4">
                    <Input type="text" placeholder="Your Name" />
                  </div>
                  <div className="mb-4">
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div className="mb-4">
                    <Textarea placeholder="Your Message" />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;