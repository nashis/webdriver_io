export default class uiSelector {
  /**
  * get the coffee page link on home page
  **/
  get coffeeLink() {
    return 'a[href="/coffee"]'
  }

  /**
  * get the list of coffee types on coffee page
  **/
  get coffeeList() {
    return 'li.coffee'
  }

  /**
  * get the list of quick order widget on selected coffee page
  **/
  get quickOrder() {
    return 'span.quick-view'
  }

  /**
  * get the quick order modal handle for the selected coffee
  **/
  get quickOrderModal() {
    return 'div#modal'
  }

  /**
  * get the grind option for the selected coffee
  **/
  get grindOption() {
    return 'select#grindOption'
  }

  /**
  * get the size option for the selected coffee
  **/
  get sizeOption() {
    return 'select#sizeOption'
  }

  /**
  * get the add to bag button selector
  **/
  get addToBag() {
    return 'button#AddToBag'
  }

  /**
  * get the checkout button selector
  **/
  get checkout() {
    return 'a#Checkout'
  }

  /**
  * get the add to bag button selector
  **/
  get guestSignin() {
    return 'a[href="/checkout"]'
  }

  /**
  * get the first name field
  **/
  get firstName() {
    return 'input#BillingAddress_FirstName'
  }

  /**
  * get the last name field
  **/
  get lastName() {
    return 'input#BillingAddress_LastName'
  }

  /**
  * get the address1 field
  **/
  get address1() {
    return 'input#BillingAddress_Address1'
  }

  /**
  * get the address2 field
  **/
  get address2() {
    return 'input#BillingAddress_Address2'
  }

  /**
  * get the suburb field
  **/
  get suburb() {
    return 'input#BillingAddress_Suburb'
  }

  /**
  * get the postcode form
  **/
  get postcode() {
    return 'input#BillingAddress_Postcode'
  }

  /**
  * get the phone field
  **/
  get phone() {
    return 'input#BillingAddress_Phone'
  }

  /**
  * get the email field
  **/
  get email() {
    return 'input#BillingAddress_Email'
  }

  /**
  * get the paypal option
  **/
  get paypalPayment() {
    return 'input#paypalPayment'
  }
}
