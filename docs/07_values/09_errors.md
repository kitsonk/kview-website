# Errors

Deno KV supports the storing of errors that are able to be
[structurally cloned](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#error_types).

When displayed in kview, the type, message and if available, the stack will be
displayed for the error. For example:

|          |                                                                                                                                                                   |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type:    | TypeError                                                                                                                                                         |
| Message: | That should have been a number.                                                                                                                                   |
| Stack:   | <pre style="margin-top:0;margin-bottom:0;padding:4px 8px 4px 8px;">TypeError: That should have been a number.&#13;&#10;&nbsp;&nbsp;at &lt;anonymous&gt;:3:4</pre> |
