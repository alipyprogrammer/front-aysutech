import { Badge } from "@/components/ui/badge";
import { IOT_STATUS_LABEL, type IotProduct } from "@/lib/iot-products";
import { cn } from "@/lib/utils";

const STATUS_STYLE: Record<IotProduct["status"], { badge: string; dot: string }> = {
  available: { badge: "border-emerald-200 bg-emerald-50 text-emerald-700", dot: "bg-emerald-500" },
  preorder: { badge: "border-amber-200 bg-amber-50 text-amber-700", dot: "bg-amber-500" },
  soon: { badge: "border-border bg-muted text-muted-foreground", dot: "bg-muted-foreground" },
};

export default function IotStatusBadge({ status, className }: { status: IotProduct["status"]; className?: string }) {
  const s = STATUS_STYLE[status];
  return (
    <Badge variant="outline" className={cn("gap-1.5 px-2.5 py-1 font-bold", s.badge, className)}>
      <span className={cn("size-1.5 rounded-full", s.dot, status === "available" && "animate-pulse")} />
      {IOT_STATUS_LABEL[status]}
    </Badge>
  );
}
