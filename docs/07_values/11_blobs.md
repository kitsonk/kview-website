# Blobs

kview leverages kv-toolbox which provides the ability to handle arbitrarily
sized sets of binary data as well as provides some additional capabilities to
allow better handling of `Blob` and `File` objects.

## Binary Data

Binary data is stored in a way that works around the value size limitations that
Deno KV has by breaking up the data across multiple entries in a way that is
transparent to the user.

Binary data entries are added or updated by uploading a file of binary data via
kview. The size of binary data is available when viewing the entry. The value of
existing entries can be downloaded by clicking on the download icon:

<svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"></path></svg>

Or opened in their own tab by clicking on the expand icon:

<svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>

None of the information about the source file is stored with the binary data,
where as `Blob` and `File` both can store information about the type which then
available when retrieving the value.

## `Blob` and `File`

JavaScript `Blob` and `File` objects can be stored as binary data in kview,
where their additional meta data will be stored alongside of the binary data
which then is available when viewing the entry or downloading the entry.

With blobs, the media type associated with the binary will be stored and with
files, the filename and last modified data will be stored.

When viewing different media types that have supported viewers in the browser,
kview will provide the data to the browser to be displayed (or heard) in the
browsers view. Items like sound files, video files, images and PDFs can be
displayed this way.

In addition, the value of existing entries can be downloaded by clicking on the
download icon:

<svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"></path></svg>

Or opened in their own tab by clicking on the expand icon:

<svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
