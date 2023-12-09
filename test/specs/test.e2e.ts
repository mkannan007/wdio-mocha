import { expect } from "@wdio/globals";

import LoginPage from "../pages/login.page";
import SecurePage from "../pages/secure.page";
import { baseConfig } from "../config/base.config";

beforeEach(async () => {
  await LoginPage.open(baseConfig.loginPath);
});

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.login(baseConfig.username, baseConfig.password);

    const flashAlertText = (await SecurePage.getFlashAlertText()).split("\n");

    await expect(SecurePage.isFlashAlertDisplayed()).toBeTruthy();
    await expect(flashAlertText).toContain("You logged into a secure area!");
  });
});
