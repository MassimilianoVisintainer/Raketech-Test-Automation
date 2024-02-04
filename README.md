# Raketech-Test-Automation

This repository contains Playwright automated tests for verifying Casino Guide website navigation and an GET API request to SWAPI.

## Test cases
- Verifying the functionality of navigating to the Casino Guide website through the search functionality on the homepage.
- Verifying the skin color of the character "R2-D2" retrieved from the Star Wars API.


## Installation

1. Ensure you have Node.js installed on your machine.

   ```bash
    node -v
    ```
3. Clone this repository to your local machine:

   ```bash
    git clone https://github.com/MassimilianoVisintainer/Raketech-Test-Automation.git
    ```

4. Install dependencies using npm:

   ```bash
    npm install
    ```

## Running Tests

- To run both Playwright tests:

  ```bash
    npx playwright test
    ```

- To run Casino Guide Website test:

  ```bash
    npx playwright test casinoGuideWebsite.spec.js
    ```

- To run the GET API test:

  ```bash
    npx playwright test peopleApi.spec.js
    ```

## Test Descriptions

### Playwright Test Suite

#### Verify Casino Guide Website Navigation through Search Functionality

- Navigate to the homepage of Raketech website.
- Use the search functionality to look for Products Page.
- Access to the Products page.
- Navigate to the Casino Guide page.
- Open the Casino Guide website in a new tab and assert the URL.

### API Request Test

#### Check R2-D2 Skin Color

- Send a GET request to the SWAPI to retrieve information about characters.
- Find the character with the name "R2-D2".
- Assert that the skin color of R2-D2 contains "white" and "blue".

## File Structure

- **pages/**: Contains page objects for different pages.
- **test/**: Contains Playwright test scripts.
- **base/** : Contains common elements present in the website.

## Page Objects

- **HomePage**: Represents the homepage of the website. 
- **ProductsPage**: Represents the products page. 
- **CasinoGuidePage**: Represents the Casino Guide page. 
- **HeaderPage**: Represents the header section of the website. This element is stored in the base folder, as it is shared by multiple components of the website.


