## Dependencies:

-   React (CRA)
-   Redux/React-Redux
-   Immer for immutability
-   Sass
-   React Router
-   React Icons (library for svg icons)

<hr>

## Demo

[CART DEMO](https://samyzog.github.io/optimax-test/#/)
<hr>

## Summary:

1. Load cart items with XHR request on cart page load (use any API mock services or just fetch .json file from folder
   with static)

-   Accomplished using the useEffect hook with an empty deps array inside the `<CartPage/>` component, the data is
loaded from a local `.json` file `cart.json` that initially contains 3 mock items, I used timestamps as keys and id's for the items.
<hr>

2. Each cart item should contain: Name Price Quantity

-   All of the above is included.
<hr>

3. Each cart item should have quantity switcher (+/-)

-   A single dispatch action with different payloads is handled by the 2 quantity switchers. When the quantity of a
certain items reaches 0 it is deleted from the cart.
<hr>

4. Cart items should have the ability to be deleted from the list

-   This is separated into 2 actions, one for deleting a single item from the cart, and the second is for deleting all
items from the cart.
<hr>

5. Your cart page should have a form for adding new cart item, the item should be added to the top of cart items list on
   form submit

-   Handled by way of modal that is mounted by clickin the 'ADD TO CART' button, the form has basic validation for the 3
inputs using Regex.
<hr>

6. The cart should contain summary block with checkout button and totals for all the cart items

-   A standalone `<Summary/>` component that displays the total sum and total quantity, and has 2 buttons, "CHECKOUT"
and "CLEAR CART".
<hr>

## UI/UX:

Design is totally up to you, the only requirement - don't use ready design systems, we would like to examine your
CSS/HTML skills, we'll also pay attention to accessibility.

-   I used SASS modules for styling, mixed with some global styling. Seemed like the quickest option, until I started
building my own library of reusable components for this exercise 😅 and wasted quite some time on that, probably should have
stopped sooner, the naming of the components is inspired by the Chakra-ui library.
<hr>

## Tests (& Typescript):

Unfortunately, I have no prior experience in writing tests or using TypeScript. They are both on my to-do list at the
moment, but for now I wrote this exercise with the tools I know.
