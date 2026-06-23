const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

(async function seleniumTests() {

    const driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {

        // =====================================
        // ======== TEST 1 - HOME TITLE ========
        // =====================================
        console.log("Running Test 1");

        await driver.get("http://localhost:3000");

        const homeTitle = await driver.getTitle();

        assert.equal(homeTitle, "Home");

        console.log("PASS - Homepage Title");


        // =====================================
        // ======== TEST 2 - CONTACTS ==========
        // =====================================
        const { By, until } = require("selenium-webdriver");
        console.log("Running Test 2");

        await driver.get("http://localhost:3000");

        // --------------------------------------
        // ---- wait until link is clickable ----
        // --------------------------------------
        const contactLink = await driver.wait(
          until.elementLocated(By.id("contactLink")), 5000
        );

        await driver.wait(
          until.elementIsVisible(contactLink),
          5000
        );

        await contactLink.click();


        const contactTitle = await driver.getTitle();
        assert.equal(contactTitle, "Contact Us");

        console.log("PASS - Contact Page");


        // ===========================================
        // ======== TEST 3 - SUBMIT/MESSAGE ==========
        // ===========================================
        console.log("Running Test 3");

        const email = "test@test.com";

        await driver.findElement(
            By.id("formInput")
        ).sendKeys(email);

        await driver.findElement(
            By.id("formSubmit")
        ).click();

        let message = await driver.findElement(
            By.id("formMessage")
        ).getText();

        assert.equal(
            message,
            `More info coming to ${email}`
        );

        console.log("PASS - Form Submission");

    }
    catch(error) {

        console.error("FAILED");
        console.error(error);

    }
    finally {

        await driver.quit();

    }

})();