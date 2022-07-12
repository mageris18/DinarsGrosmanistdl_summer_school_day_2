import TextBoxPage from "../../pageObjects/textBoxPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      // add the necessary steps
      TextBoxPage.userName.type("Dinars");
      TextBoxPage.userEmail.type("dinarsgrosmanis@inbox.lv");
      TextBoxPage.currentAddress.type("peldes iela 55");
      TextBoxPage.permanentrAddress.type("karlines iela 16");
      TextBoxPage.submitButton.click();

      TextBoxPage.name.should("contain.text","Dinars");
      TextBoxPage.email.should("contain.text","dinarsgrosmanis@inbox.lv");
      TextBoxPage.borderCurrentAddress.should("contain.text","peldes iela 55");
      TextBoxPage.borderPermanentrAddress.should("contain.text","karlines iela 16");
    });
  });

  context("Check box scenarios", () => {
    // Create CheckBoxPage page object
    beforeEach(() => {
      CheckBoxPage.visit();
    });
    //cy.get(':nth-child(1) > .element-list > .menu-list > #item-1')
    // Create checkbox scenario 1:
    it.only("scenario 1", () => {
      // Click the "+"/expand button
      CheckBoxPage.plusButton.click();
      // Click Notes, React, Angular, General, Excel File.doc
      CheckBoxPage.checkNotes.click();
      CheckBoxPage.checkReact.click();
      CheckBoxPage.checkAngular.click();
      CheckBoxPage.checkGeneral.click();
      CheckBoxPage.checkExcel.click();
      // Validate the clicked checkboxes
      CheckBoxPage.resultNotes.should("have.text","notes");
      CheckBoxPage.resultReact.should("have.text","react");
      CheckBoxPage.resultAngular.should("have.text","angular");
      CheckBoxPage.resultGeneral.should("have.text","general");
      CheckBoxPage.resultExcel.should("have.text","excelFile");
    })

// Create checkbox scenario 2:
it.only("scenario 2", () => {
  // Click expand button
  CheckBoxPage.plusButton.click();
  // Click Office
  CheckBoxPage.checkOffice.check({force: true});
  // Validate the checked checkboxes
  CheckBoxPage.resultCol1.should("have.text","office");
  CheckBoxPage.resultCol2.should("have.text","public");
  CheckBoxPage.resultCol3.should("have.text","private");
  CheckBoxPage.resultCol4.should("have.text","classified");
  CheckBoxPage.resultCol5.should("have.text","general");
  })
});


  context("Radio button scenarios", () => {
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
