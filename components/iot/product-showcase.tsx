import { ArrowLeft, Check, ListChecks, Phone, Settings2, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IotStatusBadge from "@/components/iot/status-badge";
import { CONTACT } from "@/lib/site-info";
import type { IotProduct } from "@/lib/iot-products";
import { cn } from "@/lib/utils";

const fa = (n: number) => n.toLocaleString("fa-IR");

/* بخش کامل معرفی یک محصول. reverse جای عکس و متن را عوض می‌کند تا محصولات پشت‌سرهم یکنواخت نباشند */
export default function IotProductShowcase({ product: p, index, reverse = false }: { product: IotProduct; index: number; reverse?: boolean }) {
  return (
    <section id={p.slug} className="scroll-mt-24 py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* تصویر */}
          <div className={cn("relative", reverse && "lg:order-2")}>
            <div aria-hidden="true" className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-2xl" />
            <Card className="relative gap-0 overflow-hidden rounded-[1.75rem] p-0 shadow-[0_30px_70px_rgb(7_22_44/12%)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.imageAlt} width={1200} height={900} loading={index === 0 ? "eager" : "lazy"} className="block aspect-[4/3] w-full object-cover" />
              {p.badge && <Badge className="absolute top-4 start-4 px-3 py-1 text-xs font-bold shadow-[0_10px_24px_rgb(21_94_239/30%)]">{p.badge}</Badge>}
              <dl className="absolute inset-x-4 bottom-4 grid grid-cols-3 rounded-2xl border border-white/60 bg-white/80 text-center backdrop-blur-md">
                {p.highlights.slice(0, 3).map((h) => (
                  <div key={h.label} className="px-2 py-3">
                    <dt className="text-[10px] text-muted-foreground">{h.label}</dt>
                    <dd className="m-0 text-sm font-extrabold text-foreground">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </div>

          {/* متن */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold text-muted-foreground" dir="ltr">#{String(index + 1).padStart(2, "0")}</span>
              <Badge variant="secondary" className="px-2.5 py-1 font-bold">{p.category}</Badge>
              <IotStatusBadge status={p.status} />
            </div>
            <h2 className="mt-4 text-[clamp(26px,3vw,38px)] leading-[1.5] font-black tracking-tight">{p.name}</h2>
            <p className="mt-2 text-base font-bold text-primary">{p.tagline}</p>
            <p className="mt-4 text-sm leading-8 text-muted-foreground">{p.description}</p>

            <ul className="mt-6 grid gap-3 p-0 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm font-semibold text-foreground/85">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg bg-secondary text-primary"><Check className="size-3.5" /></span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-12 rounded-xl px-6 font-bold shadow-[0_14px_35px_rgb(21_94_239/25%)] max-sm:w-full">
                <a href="/#contact">سفارش و مشاوره<ArrowLeft /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-xl px-5 font-bold max-sm:w-full">
                <a href={`tel:${CONTACT.phone}`}><Phone /><span dir="ltr">{CONTACT.phoneFa}</span></a>
              </Button>
            </div>
          </div>
        </div>

        {/* جزئیات */}
        <Tabs defaultValue="specs" dir="rtl" className="mt-14 gap-4">
          <TabsList className="h-auto! w-full rounded-xl p-1 sm:w-fit">
            <TabsTrigger value="specs" className="rounded-lg px-4 py-2"><Settings2 />مشخصات فنی</TabsTrigger>
            <TabsTrigger value="uses" className="rounded-lg px-4 py-2"><ListChecks />کاربردها</TabsTrigger>
            {p.flow && <TabsTrigger value="flow" className="rounded-lg px-4 py-2"><Workflow />نحوه کار</TabsTrigger>}
          </TabsList>

          <TabsContent value="specs">
            <Card className="rounded-2xl py-2 shadow-none">
              <CardContent className="px-6">
                <dl className="m-0 grid sm:grid-cols-2 sm:gap-x-10">
                  {p.specs.map((s) => (
                    <div key={s.label} className="flex justify-between gap-4 border-b border-dashed py-3.5 text-sm last:border-b-0">
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="m-0 text-end font-bold">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="uses">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {p.uses.map((u, i) => (
                <Card key={u} className="gap-3 rounded-2xl p-5 shadow-none">
                  <span className="grid size-9 place-items-center rounded-xl bg-secondary text-sm font-extrabold text-primary">{fa(i + 1)}</span>
                  <p className="m-0 text-sm leading-7 font-bold">{u}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          {p.flow && (
            <TabsContent value="flow">
              <ol className="relative grid gap-4 p-0 md:grid-cols-3">
                {p.flow.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.title} className="relative list-none overflow-hidden rounded-2xl bg-gradient-to-br from-foreground via-foreground to-primary/70 p-6 text-background">
                      <span aria-hidden="true" className="absolute -top-6 -end-2 text-8xl font-black text-white/5">{fa(i + 1)}</span>
                      <span className="grid size-12 place-items-center rounded-2xl bg-accent/15 text-accent"><Icon className="size-6" /></span>
                      <small className="mt-4 block text-xs font-extrabold text-accent">مرحله {fa(i + 1)}</small>
                      <h3 className="mt-1 mb-1.5 text-base font-bold">{s.title}</h3>
                      <p className="m-0 text-sm leading-7 text-background/70">{s.text}</p>
                    </li>
                  );
                })}
              </ol>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </section>
  );
}
