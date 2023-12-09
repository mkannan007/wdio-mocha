import { ChainablePromiseElement } from "webdriverio";
import { $ } from "@wdio/globals";

import BasePage from "./base.page";

class SecurePage extends BasePage {
  protected locators: {
    flashAlert: string;
  };

  constructor() {
    super();
    this.locators = {
      flashAlert: "#flash",
    };
  }

  private get flashAlert(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(this.locators.flashAlert);
  }

  public async isFlashAlertDisplayed(): Promise<boolean> {
    return (await this.flashAlert).isDisplayed();
  }

  public async getFlashAlertText(): Promise<string> {
    return (await this.flashAlert).getText();
  }
}

export default new SecurePage();
