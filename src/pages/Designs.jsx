import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initialDesigns = [
  { id: 1, name: "Casual T-Shirt", price: 5.0, image: "/images/casual-tshirt.jpg" },
  { id: 2, name: "Formal Shirt", price: 10.0, image: "/images/formal-shirt.jpg" },
  { id: 3, name: "Jeans", price: 15.0, image: "/images/jeans.jpg" },
];

const Designs = () => {
  const [designs, setDesigns] = useState(initialDesigns);

  const handlePriceChange = (id, newPrice) => {
    setDesigns((prevDesigns) =>
      prevDesigns.map((design) =>
        design.id === id ? { ...design, price: newPrice } : design
      )
    );
  };

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Our Designs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {designs.map((design) => (
          <Card key={design.id}>
            <CardHeader>
              <CardTitle>{design.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={design.image} alt={design.name} className="w-full h-48 object-cover mb-4" />
              <div className="flex items-center justify-between">
                <Input
                  type="number"
                  value={design.price}
                  onChange={(e) => handlePriceChange(design.id, parseFloat(e.target.value))}
                  className="w-24"
                />
                <span>KWD</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Designs;