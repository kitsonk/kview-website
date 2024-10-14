import { render } from "@deno/gfm";
import CopyText from "$islands/CopyText.tsx";

import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-bash.js";

export default function CodeBlock(
  { code, setup }: { code: string; setup?: string },
) {
  const setup__html = setup && render(`\`\`\`bash\n${setup}\n\`\`\``);
  const __html = render(`\`\`\`ts\n${code}\n\`\`\``);
  return (
    <div class="space-y-8">
      {setup__html && (
        <div class="relative">
          <div class="p-6 rounded-xl bg-gray-50 dark:bg-black">
            <div
              class="overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: setup__html }}
            >
            </div>
          </div>
          <CopyText text={setup} />
        </div>
      )}
      <div class="relative">
        <div class="p-6 rounded-xl bg-gray-50 dark:bg-black">
          <div
            class="overflow-x-auto"
            dangerouslySetInnerHTML={{ __html }}
          >
          </div>
        </div>
        <CopyText text={code} />
      </div>
    </div>
  );
}
