/* دستیار خود آیسو تک روی همین سایت، از طریق درگاه /assistant.
   تنظیمات در lib/assistant-config.ts                                           */
import { ASSISTANT_KEY, GATEWAY_PATH } from "@/lib/assistant-config";

export const ASSISTANT_BASE = GATEWAY_PATH;

export default function AssistantEmbed() {
  const key = process.env.NEXT_PUBLIC_ASSISTANT_KEY || ASSISTANT_KEY;
  if (!key) return null;
  // پشت درگاه WebSocket رد نمی‌شود؛ ویجت از همان اول با HTTP کار کند
  return <script src={`${GATEWAY_PATH}/embed.js`} data-key={key} data-transport="http" async />;
}
