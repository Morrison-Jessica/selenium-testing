# Selenium Testing


## Description
This project contains automated Selenium tests created for a supplied Next.js frontend application.


## Tests Included
### Test 1: Homepage
* Opens the homepage
* Verifies the page title is **"Home"**


### Test 2: Contact Page
* Navigates to the Contact page
* Verifies the page title is **"Contact Us"**


### Test 3: Form Submission
* Enters an email address into the form
* Submits the form
* Verifies the message displays:

  * `More info coming to [email address]`


## Installation
Install project dependencies:

```bash
npm install
```

## Run the Application
```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```


## Run Selenium Tests
```bash
node external.test.js
```


## Technologies Used
* Next.js
* Selenium WebDriver
* ChromeDriver
* Node.js


## AI Use Disclosure:
I used ChatGPT to help draft and structure the README and clarify Selenium setup and test structure. I still reviewed, edited, and implemented the final code and tests myself.