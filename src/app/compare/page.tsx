// src/app/compare/page.tsx
"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const phone1 = { name: "Samsung S25 Ultra", price: "৳1,49,999", camera: "200MP", battery: "5000mAh" };
const phone2 = { name: "iPhone 17 Pro", price: "৳1,60,000", camera: "48MP", battery: "4500mAh" };

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Phone Comparison</h1>

        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">{phone1.name} vs {phone2.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>{phone1.name}</TableHead>
                  <TableHead>{phone2.name}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Price</TableCell>
                  <TableCell>{phone1.price}</TableCell>
                  <TableCell>{phone2.price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Camera</TableCell>
                  <TableCell>{phone1.camera}</TableCell>
                  <TableCell>{phone2.camera}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Battery</TableCell>
                  <TableCell>{phone1.battery}</TableCell>
                  <TableCell>{phone2.battery}</TableCell>
                </TableRow>
                {/* আরও রো যোগ কর */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}