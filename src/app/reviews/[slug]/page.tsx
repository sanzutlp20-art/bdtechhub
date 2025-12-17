// src/app/reviews/[slug]/page.tsx
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const reviewsData: Record<string, any> = {
  "samsung-s25": {
    title: "Samsung Galaxy S25 Ultra Review",
    price: "৳1,49,999",
    rating: 9.2,
    pros: ["Best camera in 2025", "Powerful AI features", "Premium build", "S Pen support"],
    cons: ["Expensive", "Heavy"],
    specs: [
      { key: "Display", value: "6.8\" Dynamic AMOLED 2X, 120Hz" },
      { key: "Processor", value: "Snapdragon 8 Gen 4" },
      { key: "RAM", value: "12GB / 16GB" },
      { key: "Camera", value: "200MP main + 50MP ultra-wide" },
      { key: "Battery", value: "5000mAh, 45W charging" },
    ],
    affiliateLink: "https://www.daraz.com.bd/tag/samsung-galaxy-s25/", // তোর affiliate লিঙ্ক দিবি
  },
  "iphone-17": {
    title: "iPhone 17 Pro Max Review",
    price: "৳1,79,999",
    rating: 9.5,
    pros: ["Best video recording", "A19 Bionic chip", "Titanium build", "iOS ecosystem"],
    cons: ["Very expensive", "No fast charger in box"],
    specs: [
      { key: "Display", value: "6.9\" Super Retina XDR, 120Hz" },
      { key: "Processor", value: "A19 Pro" },
      { key: "RAM", value: "8GB" },
      { key: "Camera", value: "48MP triple system" },
      { key: "Battery", value: "4700mAh, 40W charging" },
    ],
    affiliateLink: "https://www.daraz.com.bd/tag/iphone-17/",
  },
  "xiaomi-14": {
    title: "Xiaomi 14 Pro Review",
    price: "৳79,999",
    rating: 9.0,
    pros: ["Best value flagship", "HyperCharge 120W", "Leica camera", "Smooth MIUI"],
    cons: ["Ads in UI", "Average software update"],
    specs: [
      { key: "Display", value: "6.73\" AMOLED, 120Hz" },
      { key: "Processor", value: "Snapdragon 8 Gen 3" },
      { key: "RAM", value: "12GB / 16GB" },
      { key: "Camera", value: "50MP Leica triple" },
      { key: "Battery", value: "4880mAh, 120W charging" },
    ],
    affiliateLink: "https://www.daraz.com.bd/tag/xiaomi-14/",
  },
  "nothing-phone-3": {
    title: "Nothing Phone (3) Review",
    price: "৳64,999",
    rating: 8.8,
    pros: ["Unique Glyph design", "Clean Nothing OS", "Good performance", "Wireless charging"],
    cons: ["Camera average", "No ultra-wide"],
    specs: [
      { key: "Display", value: "6.7\" AMOLED, 120Hz" },
      { key: "Processor", value: "Snapdragon 8s Gen 3" },
      { key: "RAM", value: "8GB / 12GB" },
      { key: "Camera", value: "50MP dual" },
      { key: "Battery", value: "5000mAh, 50W charging" },
    ],
    affiliateLink: "https://www.daraz.com.bd/tag/nothing-phone/",
  },
  "oneplus-13": {
    title: "OnePlus 13 Review",
    price: "৳89,999",
    rating: 9.1,
    pros: ["Fastest charging", "OxygenOS smooth", "Hasselblad camera", "Alert slider"],
    cons: ["No wireless charging in base model"],
    specs: [
      { key: "Display", value: "6.82\" AMOLED, 120Hz" },
      { key: "Processor", value: "Snapdragon 8 Elite" },
      { key: "RAM", value: "12GB / 16GB" },
      { key: "Camera", value: "50MP Hasselblad triple" },
      { key: "Battery", value: "6000mAh, 100W charging" },
    ],
    affiliateLink: "https://www.daraz.com.bd/tag/oneplus-13/",
  },
  "google-pixel-9": {
    title: "Google Pixel 9 Pro Review",
    price: "৳1,09,999",
    rating: 9.3,
    pros: ["Best AI camera", "Clean Android", "7 years update", "Tensor G4 magic"],
    cons: ["Average battery", "Slow charging"],
    specs: [
      { key: "Display", value: "6.7\" OLED, 120Hz" },
      { key: "Processor", value: "Google Tensor G4" },
      { key: "RAM", value: "12GB" },
      { key: "Camera", value: "50MP triple with AI" },
      { key: "Battery", value: "4700mAh, 45W charging" },
    ],
    affiliateLink: "https://www.daraz.com.bd/tag/google-pixel-9/",
  },
};

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const review = reviewsData[params.slug] || reviewsData["samsung-s25"]; // fallback

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <main className="container mx-auto px-4 py-12">
        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {review.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <Badge variant="secondary" className="text-2xl py-2 px-4">Rating: {review.rating}/10</Badge>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">{review.price}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader><CardTitle>Pros</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {review.pros.map((pro: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-green-600 dark:text-green-400">✓ {pro}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Cons</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {review.cons.map((con: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-red-600 dark:text-red-400">✗ {con}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader><CardTitle>Specifications</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead className="text-right">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {review.specs.map((spec: any, i: number) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{spec.key}</TableCell>
                      <TableCell className="text-right">{spec.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" className="text-xl px-10 py-6 bg-orange-600 hover:bg-orange-700">
              <a href={review.affiliateLink} target="_blank" rel="noopener noreferrer">
                Buy on Daraz (Best Price)
              </a>
            </Button>
          </div>
        </motion.article>
      </main>
    </div>
  );
}