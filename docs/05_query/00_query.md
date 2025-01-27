# Querying and filtering

kview provides the ability to filter entries based on conditions. When there is
no filter being applied, the filter icon will be displayed in gray and keys for
all entries in the store will be displayed:

<svg height="20" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#8B929A" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/></svg>

When a filter is being applied, the filter icon will be displayed in green and
only the keys for the entires which match the query will be displayed:

<svg height="20" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#4ADE80" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/></svg>

## Applying a filter

To apply the filter, select the filter icon and the filter dialog will open up:

<img src="/images/filter_dialog.png" alt="screenshot of the filter dialog" width="600" class="mx-auto" />

Set the conditions for the filter and then select the _Apply_ button. When
successful, the filter icon will go green and the key list will refresh and
display only those keys for entries which match the query.

## Adding a condition

When first opening the dialog a _blank_ condition will already be added. Select
the _Kind_ of the condition and the subsequent details based on the condition
kind. See the [Condition kinds](./query/kinds) documentation for information an
each kind of filter.

Additional conditions can be added by selecting the _Add condition_ link at the
bottom of the list of conditions.

## Removing a condition

The trashcan icon can be used on each condition to remove it:

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/></svg>

Or the _Clear all_ link can be used to reset the entire query to an empty one.

## Clearing a filter

When you select the green filter icon the current filter will no longer be
applied and selecting the filter icon again will bring up the dialog with the
last set of conditions.

If you wish to full reset the filter, click the _Clear all_ link.
