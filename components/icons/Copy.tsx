import { asset } from "$fresh/runtime.ts";

export default function IconCopy() {
  return (
    <svg
      class="w-4 h-4"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <use href={`${asset("/sprites.svg")}#copy`} />
    </svg>
  );
}
