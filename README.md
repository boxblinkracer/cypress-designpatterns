<p align="center">
  [<img src="/assets/cypress.jpg">]()
</p>
<h1 align="center">Cypress Design Patterns DEMO</h1>


![Build Status](https://github.com/boxblinkracer/cypress-designpatterns/actions/workflows/ci_pipe.yml/badge.svg) 


Hi

If you are wondering what this project is about, then let me explain.

This is the sample project for my talk **"Design Patterns for sustainable automatic E2E Tests".**

It contains full checkout tests for a standard Shopware 6 online shop.


## Installation

You can easily install the project by just starting docker.
Navigate to the `docker` folder and run this command (if you have Docker already installed).

```ruby 
docker-compose up -d
```

After the image has been downloaded and started, you should be able to see a Shopware 6 shop when you navigate to
`http://localhost` in your browser.


## Run Cypress.

You can now install and start our Cypress tests.
Navigate to the `tests/Cypress` folder and install Cypress first.

```ruby 
make install 
```


Now you have 2 options to run Cypress. Either using the UI, or just within the terminal.
Please note, that the terminal version, requires a Shopware version to be set. Just use the one, we are using in the `docker-compose.yml` file.

```ruby 
make open-ui url=http://localhost

make run shopware=6.4.7.0 url=http://localhost 
```


## Tests

The tests are located in separate folders.
Every folder is a topic that I'm usually speaking about in my talks.

Every test runs and passes out of the box, but might not be completely the one you would expect to see with actions, scenarios and more.
This is, because the talk for this sample project is an interactive one, where I show you how to transform those tests into tests with design patterns.

Still, the solutions are also existing. 
They are not executed, because I've skipped the `.spec` in their file names.
The reason is, they might not run 100%, because they rely on actions like "login" that is usually developed during the talk.
So the default "login" function of this repository is empty, and thus, doesn't do anything ;)



Have fun!
Hope to see you at my next talk.

