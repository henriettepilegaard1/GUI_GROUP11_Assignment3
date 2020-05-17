<template>
    <div class="addJob container">
    <br>
    <div class="clearfix">
        <h3 class="page-header" style="float: left;">Add new job</h3>
    </div>
    <br>
    <div>
        <p>On this page you can add a new job by filling in the required fields.</p>
    </div>
    <hr class="mb-4">

      <form v-on:submit="addJob" @submit.prevent="false" class="needs-validation" validate>
        <div class="mb-3">
          <label for="customer">Customer</label>
          <input type="customer" class="form-control" id="customer" placeholder="" required v-model="job.costumer">
          <div class="invalid-feedback">
              Please enter a customer.
            </div>
        </div>

    <div class="row">
        <div class="col md6 mb-3">
          <label for="date">Start Date</label>
          <input type="date" class="form-control" id="startDate" placeholder="" v-model="job.startDate">
          <div class="invalid-feedback">
              Please choose a start date.
            </div>
        </div>

        <div class="col md-6 mb-3">
          <label for="days">Days*</label>
          <input type="days" class="form-control" id="days" placeholder="Amount of days" v-model="job.days">
          <div class="invalid-feedback">
              Please enter amount of days.
            </div>
        </div>
        
    </div>
    <div class="mb-3">
          <label for="location">Location*</label>
          <input type="location" class="form-control" id="location" placeholder="" required v-model="job.location">
          <div class="invalid-feedback">
              Please enter a location.
            </div>
        </div>

     <div class="mb-3">
          <label for="comments">Comments <span class="text-muted">(Optional)</span></label>
          <input type="multiLine" class="form-control" id="comments" placeholder="">
        </div>
    <br>
        <hr class="mb-4">
        <button class="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
      </form>
      <br>
      <br>
      <br>
    </div>
</template>

<script>
    import axios from 'axios';

export default {
  name: "addJob",
  data() {
    return {
        job: {}
    };
  },
  methods: {
    addJob: function() {
      axios.post(`https://localhost:44368/api/Jobs`, {
            costumer: this.costumer,
            startDate: this.startDate,
            days: this.days,
            location: this.location,
            comments: this.comments
        }, 
        {
            headers: { 
            'Content-Type': 'application/json'
            }
        }
    )
    .then(response => {
        console.log(job)
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