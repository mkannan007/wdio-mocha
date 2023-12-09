import { browser } from "@wdio/globals";

import { baseConfig } from "../config/base.config";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class BasePage {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public open(path: string): Promise<string> {
    browser.maximizeWindow();
    return browser.url(`${baseConfig.baseUrl}/${path}`);
  }
}
