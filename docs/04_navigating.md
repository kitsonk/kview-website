# Navigating a store

## Keys navigation

Once an individual store has been selected, the key navigation is presented:

<img src="/images/key_view.png" alt="screenshot of the the key navigation" width="350" class="mx-auto" />

Deno KV keys are made of up of unique key parts. kview organizes key parts into
a tree hierarchy, where key parts that are equal are grouped together. The
expand icon indicates that there are sub-entries that share that key part:

<svg height="20" width="20" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g><path d="m464.57 486.4h-181.78c-12.051 0-21.828-9.7734-21.828-21.828 0-12.051 9.7734-21.828 21.828-21.828h159.95v-373.5h-373.5v154.39c0 12.051-9.7734 21.828-21.828 21.828-12.051 0.003906-21.816-9.7695-21.816-21.816v-176.21c0-12.055 9.7734-21.82 21.824-21.82h417.15c12.047 0 21.82 9.7656 21.82 21.82v417.15c0 12.059-9.7734 21.824-21.824 21.824z" /><path d="m390.2 143.61v79.879c0 12.059-9.7656 21.828-21.828 21.828s-21.828-9.7656-21.828-21.828v-27.172l-91.164 91.164c-4.2539 4.2539-9.8203 6.3828-15.441 6.3828-5.5664 0-11.133-2.1289-15.387-6.3828-8.5664-8.5078-8.5664-22.371 0-30.879l91.117-91.172h-27.117c-12.059 0-21.828-9.7656-21.828-21.828 0-12.059 9.7656-21.828 21.828-21.828h79.82c12.059 0.007813 21.828 9.7773 21.828 21.836z" /><path d="m197.47 486.4h-150.04c-12.051 0-21.824-9.7656-21.824-21.82v-150.04c0-12.051 9.7734-21.828 21.828-21.828h150.04c12.051 0 21.828 9.7734 21.828 21.828v150.04c-0.011719 12.055-9.7812 21.82-21.832 21.82zm-128.22-43.645h106.39v-106.39h-106.39z" /></g></svg>

When selecting that key part, the next level of sub-entry key parts will be
displayed and the _Path_ will be updated with the parent key part. Individual
key parts and a home icon allow navigation back up the hierarchy of key parts.
Also if there is a value associated with the key, the value will be displayed.

When there are no "child" key parts, the arrow icon is displayed:

<svg height="20" width="20" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="m160.26 499.2c-13.312 0-26.113-5.1211-36.352-14.848-19.969-19.969-19.969-52.734 0-72.703l155.13-155.65-155.14-155.65c-19.969-19.969-19.969-52.734 0-72.703s52.734-19.969 72.703 0l192 192c9.7266 9.7266 14.848 22.527 14.848 36.352s-5.6328 26.625-14.848 36.352l-192 192c-10.242 9.7266-23.555 14.848-36.352 14.848z" /></svg>

When selecting a part with this, the value will be displayed.

## Value display

When a key has been navigated to that contains a value, the value will be
displayed:

<img src="/images/value.png" alt="screenshot of the the key navigation" width="450" class="mx-auto" />

The full _Key_ will be displayed along with the _Type_ and a display of the
_Value_. See [Values](./values) for more information on how different types of
values are displayed in kview.

## Adding an entry

Selecting the _Add entry..._ button on the key explorer will bring up the add
entry dialog:

<img src="/images/add_entry.png" alt="screenshot of the add entry dialog" width="600" class="mx-auto" />

Here you provide the key part, key part type, value and value type. You can also
provide an expiration time and indicate if the value should be overwritten if it
exists.

Selecting the _Add new entry_ button will commit the entry to the store.

## Adding a sub-entry

When a value is displayed, the _Add sub-entry..._ value is displayed. Selecting
this button the add sub-entry dialog will be displayed which functions just like
the add entry dialog, but the key parts include the current key part.

## Updating a value

Selecting the _Update value..._ button will bring up a dialog which allows
editing or updating the current value. See [Values](./values) for more
information on what can be done with each value based on its type.

## Deleting an entry

Selecting the _Delete entry_ button will bring up a confirmation dialog to
delete the entry.

## Deleting multiple entries

Selecting the _Delete..._ button in the key navigator will bring up the delete
entries dialog:

<img src="/images/delete_entries.png" alt="screenshot of the add entry dialog" width="350" class="mx-auto" />

This will provide a tree view of all the keys and key parts that are "children"
of the current location of the key navigation. Key parts can be selected to
delete multiple entries at once.

## Importing and exporting

The import and export buttons are available in the key navigator. See
[Importing and Exporting](./importing_exporting) for details on how these
capabilities work.

## Watching

When viewing a value, several types of values can be watched for value changes
by selecting the watch icon:

<svg height="20" width="20" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g><path d="m442.37 268.29c5.6328-7.168 5.6328-16.895 0-24.062-3.582-4.0977-83.969-98.305-186.37-98.305s-182.79 93.695-186.37 97.793c-5.6328 7.168-5.6328 16.895 0 24.062 3.582 4.0938 83.969 98.301 186.37 98.301s182.79-94.207 186.37-97.789zm-201.21-74.242c12.801 0 23.039 10.238 23.039 23.039 0 12.801-10.238 23.039-23.039 23.039-12.801 0-23.039-10.238-23.039-23.039 0-12.797 10.238-23.039 23.039-23.039zm14.848 134.66c-65.023 0-122.37-49.152-145.92-72.703 14.848-14.848 43.52-39.938 79.359-56.32-3.5859 8.7031-5.6328 17.922-5.6328 28.16 0 39.938 32.258 72.703 72.703 72.703 39.938 0 72.703-32.258 72.703-72.703 0-9.7266-2.0469-19.457-5.6328-28.16 35.84 16.383 64.512 41.473 79.359 56.32-24.57 23.551-81.914 72.703-146.94 72.703z" /><path d="m18.945 198.66h25.602c3.5859 0 6.1445-3.0703 6.1445-6.1445l-0.003906-88.574h88.574c3.5859 0 6.1445-3.0703 6.1445-6.1445v-25.602c0-3.5859-3.0703-6.1445-6.1445-6.1445h-120.32c-3.5859 0-6.1445 3.0703-6.1445 6.1445v120.32c0 3.5859 3.0703 6.1445 6.1445 6.1445z" /><path d="m139.78 408.06h-88.578v-88.574c0-3.5859-3.0703-6.1445-6.1445-6.1445h-25.602c-3.5859 0-6.1445 3.0703-6.1445 6.1445v120.32c0 3.5859 3.0703 6.1445 6.1445 6.1445h120.32c3.5859 0 6.1445-3.0703 6.1445-6.1445v-25.602c0.003906-3.0703-3.0703-6.1445-6.1406-6.1445z" /><path d="m493.05 65.535h-120.83c-3.5859 0-6.1445 3.0703-6.1445 6.1445v25.602c0 3.5859 3.0703 6.1445 6.1445 6.1445h88.578v88.574c0 3.5859 3.0703 6.1445 6.1445 6.1445h25.602c3.5859 0 6.1445-3.0703 6.1445-6.1445l-0.003906-119.81c0.51172-3.582-2.5586-6.6562-5.6328-6.6562z" /><path d="m493.05 313.34h-25.602c-3.5859 0-6.1445 3.0703-6.1445 6.1445v88.574h-89.086c-3.5859 0-6.1445 3.0703-6.1445 6.1445v25.602c0 3.5859 3.0703 6.1445 6.1445 6.1445h120.32c3.5859 0 6.1445-3.0703 6.1445-6.1445v-120.32c0.51172-3.5859-2.5586-6.1445-5.6328-6.1445z" /></g></svg>

For further details see the [Watches](./watches) documentation.
