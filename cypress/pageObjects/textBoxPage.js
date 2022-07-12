import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get xxx() {
    return cy.get("xxx");
  }
}

export default TextBoxPage;