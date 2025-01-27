# Deno Deploy stores

kview is able to connect to Deno Deploy and provide navigation to any Deno KV
stores available to an account.

## Setting a token

When there is not token set, the _Login_ item will be displayed along the left
hand side. Selecting it will bring you to the login screen where an Deno Deploy
access token can be placed:

<img src="/images/login.png" alt="screenshot of providing a token to login" width="400" class="mx-auto" />

If an access token is required, new ones can be created by navigating to
[dash.deno.com/account](https://dash.deno.com/account) and scrolling down to the
_Access Token_ section and selecting the _New Access Token_ button.

<img src="/images/dash_access_tokens.png" alt="screenshot of Dash Deploy Access Tokens settings" width="600" class="mx-auto" />

> [!IMPORTANT]
> Access tokens are secrets and be treated securely. Anyone who has access to
> the token will be able to read and write from any Deno KV store on Deploy that
> the token can access. Access tokens are not stored in the kview server, but
> are stored as a browser cookie associated with the kview website.

## Logging out

Once a token is set, the _Logout_ item on the left hand side can be chosen to
remove the access token and disconnect from accessing Deploy KV stores.

## User projects

Once logged in, the user associated with the access key will be displayed on the
home page as well as the _User_ item will be displayed on the left hand side.
Selecting the user will display a list of projects associated with the user.

<img src="/images/user_projects.png" alt="screenshot of kview displaying user projects" width="200" class="mx-auto" />

Selecting a project here will provide a list of branches associated with the
project along with the current size of any database associated with that branch:

<img src="/images/databases.png" alt="screenshot of kview displaying databases by branch" width="300" class="mx-auto" />

Selecting a branch will allow you to [navigate the store](./navigating).

## Organizations

Any organizations that the access token has access to will be displayed under
the organizations on the home page or under the _Organizations_ item on the left
hand side:

<img src="/images/organizations.png" alt="screenshot of kview displaying organizations" width="300" class="mx-auto" />

Navigating to one of the organizations will list the projects associated with
the organization, which works just like
[projects associated with a user](#user-projects).
