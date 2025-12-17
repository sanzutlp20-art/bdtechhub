"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
            Honest reviews, price comparisons, and expert recommendations for mobiles, laptops, and tech accessories.
          </p>
        </motion.section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* উদাহরণ রিভিউ কার্ড — তুই আরও যোগ করবি */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link href="/reviews/samsung-s25">
              <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1610945265064-0e3f6cf9e3c7?w=400"
                  alt="Samsung S25"
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle>Samsung Galaxy S25 Ultra</CardTitle>
                  <CardDescription>Flagship killer with AI features</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">৳1,49,999</p>
                  <Button className="w-full mt-4">Read Full Review</Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* আরও কার্ড যোগ করতে পারিস — একই স্ট্রাকচারে */}
        </section>
      </main>
    </div>
  );
}