This is Delilah Clement's completed front end challenge as an application for Fetch Rewards Frontend Engineer.

It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses SASS for styling and npm package [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch) to fetch data.

## Running the project locally

Clone the repo from [github.com/goplayoutside3/dclement-frontend-challenge](https://github.com/goplayoutside3/dclement-frontend-challenge).

Install necessary dependencies:

```bash
npm install
```

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Coding Challenge Requirements

- Retrieve data from https://fetch-hiring.s3.amazonaws.com/hiring.json.
- Display all the items grouped by "listId"
- Sort the results first by "listId" then by "name" when displaying.
- Filter out any items where "name" is blank or null.

