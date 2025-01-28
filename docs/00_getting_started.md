# Getting started

kview is a web application that requires a [Deno](https://deno.com/) runtime
server and is built with the [Fresh](https://fresh.deno.dev/) web application
framework. This server gives you access to any local Deno KV datastores as well
as the ability to connect to remote KV datastores on Deno KV or other remote
Deno KV servers.

## Prerequisites

kview requires a recent version of the Deno runtime. If you do not have the
current version of the Deno Runtime installed, on MacOS and Linux perform the
following command in the terminal:

```
curl -fsSL https://deno.land/install.sh | sh
```

On Windows:

```
irm https://deno.land/install.ps1 | iex
```

## Installing

To install the latest version of kview, run the following command with the Deno
runtime:

```
deno run -A -r https://kview.deno.dev/install
```

You will be prompted for what directory directory to install to, which will
default to `kview`. Once chosen, the necessary local files will be copied into
the install directory.

## Starting

To start, ensure the install directory is your current directory and then run
the following command in the terminal:

```
deno task start
```

This will start the Fresh server and the URL of the server will be logged to the
console:

```
Task start deno run -A --unstable-kv main.ts

 🍋 Fresh ready 
    Local: http://localhost:8000/
```

## Main Page

Navigating to the main page once starting the server will provide an initial
page like the following:

![screenshot of initial home page for kview](/images/base_page.png "Initial Home Page")

## Next Steps

kview supports viewing several different types of Deno KV stores:

- [Local stores](/docs/local_stores)
- [Deno Deploy stores](/docs/deploy_stores)
- [Remote stores](/docs/remote_stores)

The following sections provide general information about interacting with
stores:

- [Navigating as store](/docs/navigating)
- [Query and filtering](/docs/query)
- [Datastore keys](/docs/keys)
- [Datastore values](/docs/values)

kview also supports the following functionality:

- [Bulk importing and exporting](/docs/importing_exporting)
- [Watching values](/docs/watching)
