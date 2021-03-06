import React, { Component } from "react";

export default class MaterialForm extends Component {
  state = { name: "" };
  render() {
    const { name } = this.state;
    return (
      <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3 md-form">
      <label for="validationCustom012">First name</label>
      <input type="text" class="form-control" id="validationCustom012" placeholder="First name" value="Mark"
        required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3 md-form">
      <label for="validationCustom022">Last name</label>
      <input type="text" class="form-control" id="validationCustom022" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3 md-form">
      <label for="validationCustomUsername2">Username</label>
      <input type="text" class="form-control" id="validationCustomUsername2" aria-describedby="inputGroupPrepend2"
        required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3 md-form">
      <label for="validationCustom032">City</label>
      <input type="text" class="form-control" id="validationCustom032" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3 md-form">
      <label for="validationCustom042">State</label>
      <input type="text" class="form-control" id="validationCustom042" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3 md-form">
      <label for="validationCustom052">Zip</label>
      <input type="text" class="form-control" id="validationCustom052" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check pl-0">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary btn-rounded" type="submit">Submit form</button>
</form>
    );
  }
}
