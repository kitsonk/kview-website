# Importing and exporting

kview is able to serialize and deserialize Deno KV store entries into
[NDJSON](https://github.com/ndjson/ndjson-spec). NDJSON is new line delimitated
JSON, where each entry is serialized to JSON and each entry is delimited by a
new line. This is also known as JSONL (JSON lines). This format is common when
there is a need to be able to stream JSON.

The format of each line is a
[`KvEntryJSON`](https://jsr.io/@kitsonk/kv-toolbox/doc/json/~/KvEntryJSON) which
is provided by [`kv-toolbox`](https://jsr.io/@kitsonk/kv-toolbox).

## Importing

When selecting the _Import..._ button in the key navigation of a store will
bring up the import dialog:

<img src="/images/import.png" alt="screenshot of the import dialog" width="350" class="mx-auto" />

The file that contains the entries to be imported should be selected. The
overwrite flag can be selected to overwrite entries if they already exist.

Upon successfully confirming the import, a job will be created which will import
the entries in the background.

Selecting the _Jobs_ item on the left hand side will provide information about
the status of the import job, indicating its state, how many entries were
imported and if there were any errors.

## Exporting

When selecting the _Export..._ button in the key navigation of a store will
bring up the export confirmation dialog. Once confirming the export, a file save
dialog will be presented. The filename defaults to the unique identifier for the
store but can be renamed as suitable.
