<template>
    <div class="addModel container">
        <br>
        <div class="col-md-8 order-md-1">
      <h4 class="mb-3">Model registration form</h4>
      <p>Please enter all required fields.</p>
      <br>
      <hr class="mb-4">
        <h4 class="mb-3">Model info</h4>

      <form v-on:submit="addModel" @submit.prevent="false" class="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">First name*</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required v-model="model.firstName">
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <label for="lastName">Last name*</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="" required v-model="model.lastName">
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">E-mail*</label>
          <input type="email" class="form-control" id="email" placeholder="you@example.com" value="" required v-model="model.email">
          <div class="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>

        <div class="mb-3">
          <label for="phone">Phone number*</label>
          <input type="phone" class="form-control" id="phoneNo" placeholder="+45 00 00 00 00" value="" required v-model="model.phoneNo">
          <div class="invalid-feedback">
            Please enter a valid phone number.
          </div>
        </div>

        <div class="mb-3">
          <label for="address">Address Line 1*</label>
          <input type="text" class="form-control" id="address" placeholder="1234 Main St" value="" required v-model="model.addresLine1">
          <div class="invalid-feedback">
            Please enter valid address.
          </div>
        </div>

        <div class="mb-3">
          <label for="address2">Address Line 2 <span class="text-muted">(Optional)</span></label>
          <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" v-model="model.addresLine2">
        </div>

        <div class="row">
          <div class="col-md-5 mb-3">
            <label for="country">Country*</label>
            <select class="custom-select d-block w-100" id="country" value="" v-model="model.country" required>
              <option value="">Choose...</option>
              <option>Canada</option>
              <option>Denmark</option>
              <option>England</option>
              <option>Norway</option>
              <option>Sweden</option>
              <option>United States</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="zip">Zip*</label>
            <input type="text" class="form-control" id="zip" placeholder="" required v-model="model.zip"> 
            <div class="invalid-feedback">
              Zip code required.
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="city">City*</label>
            <input type="text" class="form-control" id="city" placeholder="" required v-model="model.city">
            <div class="invalid-feedback">
              City required.
            </div>
          </div>
        </div>
        <hr class="mb-4">

        <h4 class="mb-3">Model details</h4>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="birthDate">Birth Date <span class="text-muted">(Optional)</span></label>
            <input type="text" class="form-control" id="birthDate" placeholder="DD-MM-YYYY" v-model="model.birthDate">
          </div>

          <div class="col-md-6 mb-3">
            <label for="nationality">Nationality <span class="text-muted">(Optional)</span></label>
            <input type="text" class="form-control" id="nationality" placeholder="" v-model="model.nationality">
          </div>
        </div>

        <div class="row">
        <div class="col md6 mb-3">
          <label for="height">Height <span class="text-muted">(Optional)</span></label>
          <input type="height" class="form-control" id="height" placeholder="" v-model="model.height">
        </div>

        <div class="col md-6 mb-3">
          <label for="shoeSize">Shoe Size <span class="text-muted">(Optional)</span></label>
          <input type="shoeSize" class="form-control" id="shoeSize" placeholder="" v-model="model.shoeSize">
        </div>
        </div>

        <div class="row">
        <div class="col md6 mb-3">
          <label for="hairColor">Hair Color <span class="text-muted">(Optional)</span></label>
          <input type="hairColor" class="form-control" id="haircolor" placeholder="" v-model="model.hairColor">
        </div>

        <div class="col md-6 mb-3">
          <label for="eyeColor">Eye Color <span class="text-muted">(Optional)</span></label>
          <input type="eyeColor" class="form-control" id="eyeColor" placeholder="" v-model="model.eyeColor">
        </div>
    </div>

     <div class="mb-3">
          <label for="comments">Comments <span class="text-muted">(Optional)</span></label>
          <input type="multiLine" class="form-control" id="comments" placeholder="" v-model="model.comments">
        </div>
    <br>
        <hr class="mb-4">
        <button class="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
      </form>
      <br>
      <br>
      <br>
    </div>
    </div>
</template>

<script>
    import axios from 'axios';

export default {
  name: "addModel",
  data() {
    return {
        model: {}
    };
  },
  methods: {
    addModel: function() {
      axios.post(`https://localhost:44368/api/account/login`, {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNo: this.phoneNo,
            addresLine1: this.addresLine1,
            addresLine2: this.addresLine2,
            country: this.country,
            zip: this.zip,
            city: this.city,
            birthDate: this.birthDate,
            nationality: this.nationality,
            height: this.height,
            shoeSize: this.shoeSize,
            hairColor: this.hairColor,
            eyeColor: this.eyeColor,
            comments: this.comments,
        }, 
        {
            headers: { 
            'Content-Type': 'application/json'
            }
        }
    )
    .then(response => {
        console.log(model)
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
  }
};
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
        .routerLink{
        text-decoration: none;
    }
    
</style>