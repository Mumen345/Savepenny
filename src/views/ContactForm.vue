<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <div class="">
            <router-link class="btn back_btn" to="/vendors"> Go back</router-link>
        </div>
        <br>
        <div class="form_div">
            <h3 class="text-center mt-1 mb-5">Point of Sales (POS) Request Form <br> <small>Dear customer, kindly
                    complete this form to help us serve you better</small></h3>
            <form class="p-2">
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input required v-model="firstname" type="text" id="form6Example1" class="form-control" />
                            <label class="form-label" for="form6Example1">First name</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <input required v-model="middlename" type="text" id="form6Example2" class="form-control" />
                            <label class="form-label" for="form6Example2">Middle name</label>
                        </div>
                    </div>

                </div>
                <!-- Text input -->
                <div class="row">
                    <div class="col">
                        <div class="form-outline">
                            <input required v-model="lastname" type="text" id="form6Example8" class="form-control" />
                            <label class="form-label" for="form6Example8">Last name</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline mb-4">
                            <input required type="text" id="form6Example3" class="form-control" />
                            <label class="form-label" for="form6Example3">Phone number</label>
                        </div>
                    </div>

                </div>
                <!-- Text input -->
                <div class="form-outline mb-4">
                    <input required type="text" id="form6Example4" class="form-control" />
                    <label class="form-label" for="form6Example4">House Address</label>
                </div>
                <div class="form-outline mb-4">
                    <input required type="text" id="form6Example4" class="form-control" />
                    <label class="form-label" for="form6Example4">City/Town</label>
                </div>
                <!-- <div class="form-outline mb-4">
                    <input type="text" id="form6Example4" class="form-control" />
                    <label class="form-label" for="form6Example4">Landmark</label>
                </div> -->

                <!-- Email input -->
                <div class="form-outline mb-4">
                    <input required type="email" id="form6Example5" class="form-control" />
                    <label class="form-label" for="form6Example5">Email</label>
                </div>

                <!-- Number input -->
                <div class="form-outline mb-4">
                    <input required type="number" id="form6Example6" class="form-control" />
                    <label class="form-label" for="form6Example6">Phone</label>
                </div>

                <h3 class="text-center mt-5 mb-5">Identification Details <br><small>(Please provide a copy of any of the
                        following documents)</small></h3>
                <div class="radio_div">
                    <div class="form-check form-check-inline">
                        <input required class="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">NATIONAL ID</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input required class="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio2" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">DRIVERS LICENSE</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input required class="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio3" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">INTERNATIONAL PASSPORT</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input required class="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio4" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">PERMANENT VOTER’S CARD</label>
                    </div>
                </div>

                <h3 class="text-center mt-5 mb-5">Next of Kin Information <br><small>(Please provide a copy of any of
                        the following documents)</small></h3>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input required type="text" id="form6Example1" class="form-control" />
                            <label class="form-label" for="form6Example1">First name</label>
                        </div>
                    </div>
                    <!-- <div class="col">
                        <div class="form-outline">
                            <input type="text" id="form6Example2" class="form-control" />
                            <label class="form-label" for="form6Example2">Middle name</label>
                        </div>
                    </div> -->
                    <div class="col">
                        <div class="form-outline">
                            <input required type="text" id="form6Example8" class="form-control" />
                            <label class="form-label" for="form6Example8">Last name</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input required type="number" id="form6Example1" class="form-control" />
                            <label class="form-label" for="form6Example1">Phone no</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <input required type="text" id="form6Example2" class="form-control" />
                            <label class="form-label" for="form6Example2">Address</label>
                        </div>
                    </div>
                </div>

                <h3 class="text-center mt-5 mb-5">Customer Evidence of Address <br><small>(Please provide a copy of any
                        of
                        the following documents)</small></h3>
                <div class="radio_div">
                    <div class="form-check form-check-inline">
                        <input required class="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">ELECTRICITY BILL</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input required class="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio2" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">WATER BILL</label>
                    </div>


                    <div class="form-check form-check-inline">
                        <input required class="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio3" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">BANK STATEMENT</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input required class="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio4" value="option2" />

                        <label class="form-check-label" for="inlineRadio2">TENANCY AGREEMENT</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input required class="form-check-input" type="radio" name="inlineRadioOptions"
                            id="inlineRadio5" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">PHONE BILL</label>
                    </div>
                </div>
                <h3 class="text-center mt-5 mb-5">Business Information <br><small>(Please fill the form below)</small>
                </h3>

                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input required type="text" id="form6Example1" class="form-control" />
                            <label class="form-label" for="form6Example1">Business name</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <input required type="text" id="form6Example2" class="form-control" />
                            <label class="form-label" for="form6Example2">Business address</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <input required type="text" id="form6Example2" class="form-control" />
                            <label class="form-label" for="form6Example2">Business type</label>
                        </div>
                    </div>

                </div>
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input required type="number" id="form6Example1" class="form-control" />
                            <label class="form-label" for="form6Example1">Bank Verification number (BVN)</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <input required type="text" id="form6Example8" class="form-control" />
                            <label class="form-label" for="form6Example8">Business Reg no</label>
                        </div>
                    </div>
                </div>

                <div>
                    <p class="mb-5 p-2 ">By singing this PurplePay Point of sale Request form ,I certify that I
                        <span class="name">{{ firstname }} {{ middlename }} {{ lastname }} </span>
                        is the
                        authorized representative of the customer identified in this form and I am fully authorized to
                        provide the information contained in
                        this form.
                        All information provided and documents submitted in connection with this application are
                        complete and correct.I have read the
                        terms and conditions and hereby confirm my agreement to them. PurplePay is authorized to use
                        such information to provide the
                        services requested.
                    </p>
                </div>
                <!-- Submit button -->
                <button type="submit" class="btn contact_btn">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            close: true,
            firstname: "",
            lastname: "",
            middlename: "",
        }
    },
    methods: {
        closeForm() {
            this.close = false
        }
    }
}
</script>

<style scoped>
.form_div {
    width: 70%;
    padding: 30px;
    margin: 0 auto;
    background-color: #FAF6FF !important;
}

textarea {
    background-color: #ffffff !important;
    /* border: 1px solid #7750A1 !important; */
}

input {
    background-color: #ffffff !important;
    height: 50px;

}

small {
    font-size: small;
}

.name {
    font-size: 20px;
    font-weight: 600;
    color: #5E0083;

}

.contact_btn {
    width: 100%;
    margin: 0 auto !important;
    background-color: #7750A1;
    color: #ffffff;
    outline: none;
    box-shadow: none;
    text-transform: capitalize;
    font-size: 16px;
    height: 60px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
}

.radio_div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
}

.back_btn {
    background-color: #7750A1;
    color: #ffffff;
    text-transform: capitalize !important;
}

@media screen and (max-width: 990px) {
    .form_div {
        width: 100%;
        padding: 10px;
        margin: 0 auto;
        background-color: #FAF6FF !important;
    }

    .radio_div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 20px;
    }
}
</style>