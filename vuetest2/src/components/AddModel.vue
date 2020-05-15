<template>
    <div class="addModel container">
        <h1 class="page-header">Add new model</h1>
        <form v-on:submit="addModel">
            <div class="well">
                <h4>Model info</h4>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" placeholder="First Name" v-model="model.firstName">
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" placeholder="Last Name" v-model="model.lastName">
                </div>
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="text" class="form-control" placeholder="Email" v-model="model.email">
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" placeholder="Phone Number" v-model="model.phoneNo">
                </div>
                <div class="form-group">
                    <label>Address Line 1</label>
                    <input type="text" class="form-control" placeholder="Address Line 1" v-model="model.addresLine1">
                </div>
                <div class="form-group">
                    <label>Address Line 2</label>
                    <input type="text" class="form-control" placeholder="Address Line 2" v-model="model.addresLine2">
                </div>
                <div class="form-group">
                    <label>Zip Code</label>
                    <input type="text" class="form-control" placeholder="Zip Code" v-model="model.zip">
                </div>
                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" placeholder="City" v-model="model.city">
                </div>
                <div class="form-group">
                    <label>Country</label>
                    <input type="text" class="form-control" placeholder="Country" v-model="model.country">
                </div>
                <div class="form-group">
                    <label>Birth Date</label>
                    <input type="text" class="form-control" placeholder="Birth Date" v-model="model.birthDate">
                </div>
                <div class="form-group">
                    <label>Nationality</label>
                    <input type="text" class="form-control" placeholder="Nationality" v-model="model.nationality">
                </div>
                <div class="form-group">
                    <label>Height</label>
                    <input type="text" class="form-control" placeholder="Height" v-model="model.height">
                </div>
                <div class="form-group">
                    <label>Shoe Size</label>
                    <input type="text" class="form-control" placeholder="Shoe Size" v-model="model.shoeSize">
                </div>
                <div class="form-group">
                    <label>Hair Color</label>
                    <input type="text" class="form-control" placeholder="Hair Color" v-model="model.hairColor">
                </div>
                <div class="form-group">
                    <label>Eye Color</label>
                    <input type="text" class="form-control" placeholder="Eye Color" v-model="model.eyeColor">
                </div>
                <div class="form-group">
                    <label>Comments</label>
                    <input type="text" class="form-control" placeholder="Comments" v-model="model.comments">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'addModel',
        data() {
            return {
                model: {}
            }
        },
        methods: {
            addModel(e){
                if(!this.model.firstName || !this.model.lastName || !this.model.email || !this.model.phoneNo){
                    console.log("Please fill in all required fields");
                } else {
                    let newModel = {
                        firstName: this.model.firstName,
                        lastName: this.model.lastName,
                        email: this.model.email,
                        phoneNo: this.model.phoneNo,
                        addresLine1: this.model.addresLine1,
                        addresLine2: this.model.addresLine2,
                        zip: this.model.zip,
                        city: this.model.city,
                        country: this.model.country,
                        birthDate: this.model.birthDate,
                        nationality: this.model.nationality,
                        height: this.model.height,
                        shoeSize: this.model.shoeSize,
                        hairColor: this.model.hairColor,
                        eyeColor: this.model.eyeColor,
                        comments: this.model.comments
                    }
                    this.$http.post('https://localhost:44368/index.html', newModel)
                        .then(function(response){
                            this.$router.push({path: "/"});
                        });
                }
                e.preventDefault();
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>