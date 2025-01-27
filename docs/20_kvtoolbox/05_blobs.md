# Blobs

Deno KV has limits on the size of values in a store. When dealing with larger
binary data, it can be complicated managing those limits. The toolbox provides
the ability to work with arbitrarily sized binary data as well as provides a few
enhancements that enhance support for web standard `Blob` and `File` types.
