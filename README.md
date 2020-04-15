# Quiz Vue Charts

Thanks for apply to Videsk! First you need understand this is a process for select the best candidates, is not a part of the job, only we want see how you code this problem.

In this case we want know how you can adapt using Vue with Frappe Charts.

## Repository info

All npm packages are included in package.json, only need execute `npm install`.

For start dev server: `npm run serve`

The file `App.vue` have the example, you can delete or use it.

## The problem

**First need fork this repo, not send PR**.

We need you can plot a simple JSON that's received by a REST API endpoint in a chart. To do this need understand how works `axios` and `frappe-charts`.

The idea is see how you manage asynchronous functions and plot the data. The endpoint where you need do a `GET` method is `/5e975f3d2940c704e1d8be6a`.

**The complete endpoint is `https://api.jsonbin.io/b/5e975f3d2940c704e1d8be6a`, but axios is configured for send request with necessary headers.** (If you want see how, go to `axios.js` file).

The endpoint return a JSON schema with:

```js
[
    {
        month: 4, // Month from 1 to 12
        answered: 84, // Total calls received in the month
        abandoned: 45, // Total calls abandoned in the month
        transferred: 13, // Total calls transferred in the month
    }
]
```

This data needed plotted to chart with `frappe-chart` in pure ES6. **Not using `vue-frappe`**. For this you need choose the correct chart.

## Where send?

When you finish, please send the URL of repository to `mlopez@videsk.io` or add to `matiaslopezd@gmail.com` like contributor (In case be private repository).

## Extra

Extra points if you can show in right side of chart the number of answered, abandoned, transferred calls and selected month when interact with a point or bar in chart.

`Tip: Click event`

## Docs

- Frappe docs: https://frappe.io/charts
- Axios docs: https://github.com/axios/axios

## What use this repository?

For this repository we use JSONBin for static DB, Vue, 

## Copyrights

This repository and quiz is completely open-source with MIT license. You can share with your friends.

