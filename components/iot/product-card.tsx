import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import IotStatusBadge from "@/components/iot/status-badge";
import type { IotProduct } from "@/lib/iot-products";

/* کارت کاتالوگ — هر محصول در lib/iot-products.ts یک کارت می‌گیرد و به بخش جزئیاتش لینک می‌شود */
export default function IotProductCard({ product: p }: { product: IotProduct }) {
  return (
    <a href={`#${p.slug}`} className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
      <Card className="h-full gap-0 overflow-hidden rounded-2xl py-0 shadow-none transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-[0_24px_60px_rgb(7_22_44/10%)]">
        <div className="relative aspect-[4/3] overflow-hidden border-b bg-secondary/50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.imageAlt} width={1200} height={900} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
          {p.badge && <Badge className="absolute top-3 start-3 shadow-[0_8px_20px_rgb(21_94_239/30%)]">{p.badge}</Badge>}
        </div>

        <CardHeader className="gap-2 px-5 pt-5">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-bold text-primary">{p.category}</span>
            <IotStatusBadge status={p.status} />
          </div>
          <CardTitle className="text-lg leading-8 font-extrabold">{p.name}</CardTitle>
          <CardDescription className="leading-7">{p.tagline}</CardDescription>
        </CardHeader>

        <CardContent className="mt-4 px-5">
          <dl className="grid grid-cols-3 divide-x divide-border rounded-xl border bg-muted/50 text-center">
            {p.highlights.slice(0, 3).map((h) => (
              <div key={h.label} className="px-2 py-2.5">
                <dt className="text-[10px] text-muted-foreground">{h.label}</dt>
                <dd className="m-0 text-xs font-extrabold text-foreground">{h.value}</dd>
              </div>
            ))}
          </dl>
        </CardContent>

        <CardFooter className="mt-auto px-5 pt-4 pb-5">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
            مشاهده جزئیات
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          </span>
        </CardFooter>
      </Card>
    </a>
  );
}
