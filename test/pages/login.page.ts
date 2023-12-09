import { ChainablePromiseElement } from "webdriverio";
import { $ } from "@wdio/globals";

import BasePage from "./base.page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
  protected locators: {
    username: string;
    password: string;
    submitButton: string;
  };

  constructor() {
    super();
    this.locators = {
      username: "#username",
      password: "#password",
      submitButton: 'button[type="submit"]',
    };
  }

  /**
   * define selectors using getter methods
   */
  private get inputUsername(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.locators.username);
  }

  private get inputPassword() {
    return $(this.locators.password);
  }

  private get btnSubmit() {
    return $(this.locators.submitButton);
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string): Promise<void> {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open(path: string): Promise<string> {
    return super.open(path);
  }
}

export default new LoginPage();
