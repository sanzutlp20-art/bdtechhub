"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const gadgets = [
  { slug: "samsung-s25", title: "Samsung Galaxy S25 Ultra", desc: "Flagship killer with AI features", price: "৳1,49,999", img: "https://images.unsplash.com/photo-1610945265064-0e3f6cf9e3c7?w=400" },
  { slug: "iphone-17", title: "iPhone 17 Pro Max", desc: "Apple's most advanced iPhone yet", price: "৳1,79,999", img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400" },
  { slug: "xiaomi-14", title: "Xiaomi 14 Pro", desc: "Best value flagship 2025", price: "৳79,999", img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400" },
  { slug: "nothing-phone-3", title: "Nothing Phone (3)", desc: "Unique design with Glyph interface", price: "৳64,999", img: "https://images.unsplash.com/photo-1586953983027-d7508e5d1eee?w=400" },
  { slug: "oneplus-13", title: "OnePlus 13", desc: "Smooth performance beast", price: "৳89,999", img: "https://images.unsplash.com/photo-1544244011-6df8b3c0c0b9?w=400" },
  { slug: "google-pixel-9", title: "Google Pixel 9 Pro", desc: "Best camera phone 2025", price: "৳1,09,999", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Discover the Best Gadgets in Bangladesh
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Honest reviews, price comparisons, and expert recommendations for mobiles and tech accessories.
          </p>
        </motion.section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gadgets.map((gadget) => (
            <motion.div key={gadget.slug} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Link href={`/reviews/${gadget.slug}`}>
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-pointer h-full">
                  <img
                    src={gadget.img}
                    alt={gadget.title}
                    className="w-full h-64 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{gadget.title}</CardTitle>
                    <CardDescription>{gadget.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">{gadget.price}</p>
                    <Button className="w-full mt-4">Read Full Review</Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}