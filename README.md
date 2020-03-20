# 🎓 Aerolab's Coding Challenge

## Challenge

The challenge is to build a catalog view for a loyalty program app in one month. The product’s main goal is to help users redeem items through a points-based system.

## Criteria

Users have an undetermined amount of points accumulated, and each product is worth a set amount of points. We’ll test the product you submit, along with the code it is written in, and any additional interactions or layers you’d like to add.

We want to see how your code’s UI interacts with different states and user interactions, so your product should comply with the following guidelines:

*(Keep in mind that the jury will also take into account the quality of the submitted code. Simply meeting this criteria doesn’t mean your solution will automatically win)*

- Each product should have a visible price in points.
- The user should be able to sort products by price, from highest to lowest, and vice-versa.
- The user should be able to see how many points they have in their account.
- There should be a clear way for the user to distinguish those products that they can redeem from those they cannot.
- A “Redeem” button should be available for those products that the user has enough points to claim.
- A “Redeem now” option should appear when the user interacts with a product that they have enough points to claim.
- When the user doesn’t have enough points for a product, they should be able to see how many more points they need to claim it.
- The user should not be able to redeem a product for which they don’t have enough points.
- When the user clicks on the Redeem now button, the system should automatically deduct the item’s price from the users’ points.

This is what we expect of your product. If you choose to build it in any other way, it could still be valid, as long as it makes sense and it’s an improvement on the overall experience. We’re looking for creative solutions, so go ahead, take some risks and blow us away!

## Tech

This project was generated with Next.js.

## Command

Getting Started
Install dependencies

```
$ npm install
```

Running localhost

```
$ npm run dev
```

Running production

```
$ npm build && npm start
```