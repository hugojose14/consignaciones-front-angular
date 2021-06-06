import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    //devolver un objeto de una url
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(seleccion: string) {
    return element(by.css(seleccion)).getText() as Promise<string>;
  }
}
