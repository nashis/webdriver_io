# Test automation using webdriver io

This application automates the process of ordering coffee from the following site:

https://www.coffeecompany.com.au/

# Run

Make sure you have node (version >= 4 for supporting eslint version 3.1.1) installed

Download and install selenium-standalone globally

```sh
npm install selenium-standalone@latest -g
selenium-standalone install
selenium-standalone start
```

Download the project packages and start the application

```sh
npm install
npm start
```

# TODO

* Option to configure items, like coffee type, grain type, quantity etc.
* Introduce hierarchy to the solution by decomposing uiselector to page/ui scope
* Bring the browser to focus, and maximize
