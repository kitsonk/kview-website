# Serializing & deserializing

Deno KV entries, keys and values support complex objects which are not easily
represented in JSON, making it difficult to accurately represent data in a
browser or transfer data between processes. The JSON library makes this possible
by providing type safe utilities to manage Deno KV data as JSON.
