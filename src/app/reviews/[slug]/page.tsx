// src/app/reviews/[slug]/page.tsx
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

// ডামি ডেটা (পরে JSON বা Markdown থেকে লোড করব)
const reviewData = {
  slug: "samsung-s25",
  title: "Samsung Galaxy S25 Ultra Review",
  price: "৳1,49,999",
  rating: 9.2,
  pros: ["Best camera in 2025", "Powerful AI features", "Premium build"],
  cons: ["Expensive", "Heavy"],
  specs: [
    { key: "Display", value: "6.8\" Dynamic AMOLED 2X, 120Hz" },
    { key: "Processor", value: "Snapdragon 8 Gen 4" },
    { key: "RAM", value: "12GB / 16GB" },
    { key: "Storage", value: "256GB / 512GB / 1TB" },
    { key: "Camera", value: "200MP main + 50MP ultra-wide + 10MP telephoto" },
    { key: "Battery", value: "5000mAh with 45W charging" },
  ],
  affiliateLink: "https://www.daraz.com.bd/your-affiliate-link-here", // পরে তোর Daraz affiliate লিঙ্ক দিবি
};

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const review = reviewData; // পরে params.slug দিয়ে ডেটা লোড করব

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <main className="container mx-auto px-4 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {review.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <Badge variant="secondary" className="text-2xl py-2 px-4">Rating: {review.rating}/10</Badge>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">{review.price}</p>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1610945265064-0e3f6cf9e3c7?w=800" 
            alt={review.title} 
            className="w-full rounded-xl shadow-2xl mb-10"
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader><CardTitle>Pros</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {review.pros.map((pro, i) => (
                    <li key={i} className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      ✓ {pro}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Cons</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {review.cons.map((con, i) => (
                    <li key={i} className="flex items-center gap-2 text-red-600 dark:text-red-400">
                      ✗ {con}
                    </li>
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
                  {review.specs.map((spec, i) => (
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