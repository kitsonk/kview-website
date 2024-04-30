function asciiOnlyToLowerCase(input: string) {
  let result = "";
  for (const char of input) {
    result += char >= "A" && char <= "Z" ? char.toLowerCase() : char;
  }
  return result;
}

function getGithubId(header: string, repetition = 0) {
  let id = header.replace(/ /g, "-")
    .replace(/%([abcdef]|\d){2,2}/ig, "")
    .replace(/[\/?!:\[\]`.,()*"';{}+=<>~\$|#@&–—]/g, "")
    .replace(
      /[。？！，、；：“”【】（）〔〕［］﹃﹄“ ”‘’﹁﹂—…－～《》〈〉「」]/g,
      "",
    );

  if (repetition) {
    id += `-${repetition}`;
  }

  return encodeURI(asciiOnlyToLowerCase(id.trim())).replace(
    /%E2%80%8D/g,
    "\u200D",
  );
}

export default function Toc(
  { headers }: { headers: { header: string; depth: number }[] },
) {
  const items = [];
  const seen = new Map<string, number>();
  let skipped = false;
  for (const { header, depth } of headers) {
    let repetition = 0;
    if (header) {
      repetition = seen.get(header.toLowerCase()) ?? 0;
      seen.set(header, repetition + 1);
    }
    if (header && depth) {
      if (!skipped) {
        skipped = true;
        if (depth === 1) {
          continue;
        }
      }
      const href = `#${getGithubId(header, repetition)}`;
      const item = <a class="hover:underline" href={href}>{header}</a>;
      if (depth <= 2) {
        items.push(<li class="pt-2">{item}</li>);
      } else if (depth === 3) {
        items.push(<li class="pl-2">{item}</li>);
      } else if (depth === 4) {
        items.push(<li class="pl-4">{item}</li>);
      } else if (depth === 5) {
        items.push(<li class="pl-6">{item}</li>);
      } else {
        items.push(<li class="pl-8">{item}</li>);
      }
    }
  }
  return <ul class="px-8 text-sm">{items}</ul>;
}
