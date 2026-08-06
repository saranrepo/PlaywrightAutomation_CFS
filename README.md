# Playwright Automation Framework

## Overview

This project is a QA Automation Framework developed using Playwright with JavaScript.

The framework demonstrates:

- UI Automation
- API Automation
- Page Object Model
- API Client Design Pattern
- Dynamic Test Data Generation
- POJO Based API Payload Creation


---

# Technology Stack

| Technology | Usage |
|---|---|
| JavaScript | Programming Language |
| Playwright | UI & API Automation |
| Node.js | Runtime |
| HTML Report | Test Reporting |


---

# Application Under Test


## UI Application

Website:

https://www.ebay.com


## API Application

Swagger Petstore:

https://petstore.swagger.io


---

# Framework Architecture


```
Tests

 |

Pages / API Client

 |

Utilities / Models / Payload Factory

 |

Application
```


---

# Project Structure


```
api

 ├── client

 ├── endpoints

 ├── models

 └── payloads


pages

 ├── HomePage.js

 ├── CategoryPage.js

 └── SearchResultPage.js


tests

 ├── ui

 └── api


utils

 ├── Constants.js

 ├── RandomData.js

 └── ScreenshotUtil.js

```


---

# Installation


## Clone Repository


```
git clone <repository-url>
```


Navigate:

```
cd PlaywrightAutomationFramework
```


Install dependencies:

```
npm install
```


Install browsers:

```
npx playwright install
```


---

# Execute Tests


## Execute Complete Test Suite

```
npm test
```


## Execute UI Tests

```
npm run ui
```


## Execute API Tests

```
npm run api
```


## Execute Headed Mode

```
npm run headed
```


## Generate Report

```
npm run report
```


---

# Test Coverage


## UI Automation


### Home Page Verification

Validates:

- eBay page loads
- Search component available
- Navigation header available

Screenshot:

```
verification/01-home-page-verification.png
```



### Category Navigation

Flow:

```
Home Page

↓

Shop By Category

↓

Electronics
```


Screenshot:

```
verification/02-electronics-category.png
```



### Product Search

Flow:

```
Search Laptop

↓

Validate Results
```


Screenshot:

```
verification/03-laptop-search-results.png
```



---

# API Automation


CRUD Flow:


```
Create Pet

↓

Read Pet

↓

Update Pet

↓

Delete Pet

↓

Verify Delete
```


Features:

- Dynamic ID generation
- Dynamic name generation
- POJO payload creation
- Response validation


---

# Reports


After execution:

```
playwright-report
```


Open:

```
npm run report
```


---


Workflow:

```
Checkout

↓

Install Node

↓

Install Dependencies

↓

Install Browsers

↓

Execute Tests

↓

Generate Report
```



# Framework Best Practices


Implemented:

✔ Page Object Model

✔ API Client Layer

✔ POJO Models

✔ Factory Pattern

✔ Dynamic Test Data

✔ Reusable Utilities

✔ HTML Reporting


---

# Author: Sarankumar M

QA Automation Engineer Technical Assessment