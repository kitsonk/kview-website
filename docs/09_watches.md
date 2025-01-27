# Watches

Certain values are "watchable" with Deno KV and kview provides an interface to
observe these values.

> [!IMPORTANT]
> Deno KV does not currently support watching entries locally (see:
> [denoland/deno#21640](https://github.com/denoland/deno/issues/21640)), but
> does prevent registering a watch. kview also does not prevent attempting to
> watch a value in a local store. There will be a value displayed in the watch
> but it will not update when the value is updated in the store.

## Adding and monitoring

By selecting the watch icon on a value, a watch for that entry will be added:

<svg height="20" width="20" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g><path d="m442.37 268.29c5.6328-7.168 5.6328-16.895 0-24.062-3.582-4.0977-83.969-98.305-186.37-98.305s-182.79 93.695-186.37 97.793c-5.6328 7.168-5.6328 16.895 0 24.062 3.582 4.0938 83.969 98.301 186.37 98.301s182.79-94.207 186.37-97.789zm-201.21-74.242c12.801 0 23.039 10.238 23.039 23.039 0 12.801-10.238 23.039-23.039 23.039-12.801 0-23.039-10.238-23.039-23.039 0-12.797 10.238-23.039 23.039-23.039zm14.848 134.66c-65.023 0-122.37-49.152-145.92-72.703 14.848-14.848 43.52-39.938 79.359-56.32-3.5859 8.7031-5.6328 17.922-5.6328 28.16 0 39.938 32.258 72.703 72.703 72.703 39.938 0 72.703-32.258 72.703-72.703 0-9.7266-2.0469-19.457-5.6328-28.16 35.84 16.383 64.512 41.473 79.359 56.32-24.57 23.551-81.914 72.703-146.94 72.703z" /><path d="m18.945 198.66h25.602c3.5859 0 6.1445-3.0703 6.1445-6.1445l-0.003906-88.574h88.574c3.5859 0 6.1445-3.0703 6.1445-6.1445v-25.602c0-3.5859-3.0703-6.1445-6.1445-6.1445h-120.32c-3.5859 0-6.1445 3.0703-6.1445 6.1445v120.32c0 3.5859 3.0703 6.1445 6.1445 6.1445z" /><path d="m139.78 408.06h-88.578v-88.574c0-3.5859-3.0703-6.1445-6.1445-6.1445h-25.602c-3.5859 0-6.1445 3.0703-6.1445 6.1445v120.32c0 3.5859 3.0703 6.1445 6.1445 6.1445h120.32c3.5859 0 6.1445-3.0703 6.1445-6.1445v-25.602c0.003906-3.0703-3.0703-6.1445-6.1406-6.1445z" /><path d="m493.05 65.535h-120.83c-3.5859 0-6.1445 3.0703-6.1445 6.1445v25.602c0 3.5859 3.0703 6.1445 6.1445 6.1445h88.578v88.574c0 3.5859 3.0703 6.1445 6.1445 6.1445h25.602c3.5859 0 6.1445-3.0703 6.1445-6.1445l-0.003906-119.81c0.51172-3.582-2.5586-6.6562-5.6328-6.6562z" /><path d="m493.05 313.34h-25.602c-3.5859 0-6.1445 3.0703-6.1445 6.1445v88.574h-89.086c-3.5859 0-6.1445 3.0703-6.1445 6.1445v25.602c0 3.5859 3.0703 6.1445 6.1445 6.1445h120.32c3.5859 0 6.1445-3.0703 6.1445-6.1445v-120.32c0.51172-3.5859-2.5586-6.1445-5.6328-6.1445z" /></g></svg>

By selecting the _Watches_ item on the left hand side will provide a view of all
entries currently being watched. For example watching an entry with a key of
`["test"]`:

<img src="/images/watches.png" alt="screenshot of a watched entry" width="350" class="mx-auto" />

When the value is updated in the store, the value will be updated here.

## Removing

Selecting the trashcan icon on a watched entry will remove it.
