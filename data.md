# _DATA_

## Data layer

- cookUtensils

  - name (string)
  - price (number)
  - description (string)
  - isInStock (boolean)

- orders

  - ...cookUtensil
  - id (number)
  - status (enum)
    - pending
    - paid
    - shipped
    - delivered
    - cancelled
  - deliveryAddress (string)

- client

  - personal info

    - name (string)
    - email (string)
    - address (string)
    - age (number)
    - telephoneNumber (number)

  - customer info

    - billingAddress (string)
    - deliveryAddress (string)
    - orders

  - isLogged (boolean)

## Data modifications

    - cookUtensils
      - loadCookUtensils
      - set name
      - set price
      - set description
      - set isInStock to true
      - set isInStock to false
      - eliminate cook utensil
      - add cook utensil

    - client
      - load client
      - set client personal info (loggin / register)
      - set customer info
      - set isLogged to true
      - set isLogged to false
      - orders
        - load orders
        - eliminate order
        - add order
        - set order status to:
          - pending
          - paid
          - shipped
          - delivered
          - cancelled
