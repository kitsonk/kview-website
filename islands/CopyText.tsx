import { useSignal } from "@preact/signals";

import IconCopy from "../components/icons/Copy.tsx";
import IconTick from "../components/icons/Tick.tsx";

export default function CopyText({ text }: { text: string }) {
  const copying = useSignal(false);

  return (
    <button
      class="absolute top-3 right-3 rounded opacity-80 p-1.5 border border-gray-300 hover:bg-gray-700"
      onClick={() => {
        navigator.clipboard.writeText(text);
        copying.value = true;
        setTimeout(() => copying.value = false, 1000);
      }}
    >
      {copying.value ? <IconTick /> : <IconCopy />}
      <span class="sr-only">Copy text to clipboard</span>
    </button>
  );
}
