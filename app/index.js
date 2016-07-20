import uiSelector from './coffeecompany.uiselector'
import options from './options'
import formData from './formdata'

const webdriverio = require('webdriverio'),
  uiSelectorInstance = new uiSelector()

webdriverio
  .remote(options)
  .init()
  .url('https://www.coffeecompany.com.au')
  .click(uiSelectorInstance.coffeeLink)
  .click(uiSelectorInstance.coffeeList)
  .click(uiSelectorInstance.quickOrder)
  .waitForVisible(uiSelectorInstance.quickOrderModal, 3000)
  .selectByVisibleText(uiSelectorInstance.grindOption, 'Whole Bean')
  .selectByVisibleText(uiSelectorInstance.sizeOption, '1 kg')
  .click(uiSelectorInstance.addToBag)
  .waitForVisible(uiSelectorInstance.checkout, 3000)
  .click(uiSelectorInstance.checkout)
  .click(uiSelectorInstance.guestSignin)
  .setValue(uiSelectorInstance.firstName, formData.firstName)
  .setValue(uiSelectorInstance.lastName, formData.lastName)
  .setValue(uiSelectorInstance.address1, formData.address1)
  .setValue(uiSelectorInstance.address2, formData.address2)
  .setValue(uiSelectorInstance.suburb, formData.suburb)
  .setValue(uiSelectorInstance.postcode, formData.postcode)
  .setValue(uiSelectorInstance.phone, formData.phone)
  .setValue(uiSelectorInstance.email, formData.email)
  .click('.fields li.checkbox')
  .click(uiSelectorInstance.paypalPayment)
  //.end();
