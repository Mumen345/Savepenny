<template>
    <div class="fineJob_container">
        <h2>Latest Job Opportunities</h2>

        <div class="input_div">
            <input type="search" class="" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn search_button">search</button>
        </div>
        <div class="select_dropdown_container">
            <div class="select_input">
                <label for="standard-select">Standard Select</label>
                <select id="standard-select">
                    <option value="">Select one</option>
                    <option value="">Nothing to select here</option>
                </select>
                <span class="focus"></span>
            </div>

            <div class="select_input">
                <label for="multi-select">Industry</label>
                <select id="multi-select">
                    <option value="">Select one</option>
                    <option value="">Nothing to select here</option>
                </select>
                <span class="focus"></span>
            </div>
            <div class="select_input">
                <label for="standard-select">Job Type</label>
                <select id="standard-select">
                    <option value="">Select one</option>
                    <option value="">Nothing to select here</option>
                </select>
                <span class="focus"></span>
            </div>
        </div>
        <div class="empty_state">
            <img src="../assets/empty_state.svg" alt="">
            <p>No openings available at the moment</p>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    }
}
</script>

<style type="scss" scoped>
input[type=text],
select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #7750A1;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
}

.search_button {
    border: none;
    box-shadow: none;
    text-transform: capitalize;
    font-size: 16px;
    width: 250px;
    height: 55px;
    color: #FFFFFF;
    font-weight: 500;
    border-radius: 15px;
    background-color: #7750A1;
}

.fineJob_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 30px;
    margin: 100px auto;
    background-color: #FAF6FF;
    padding: 50px 0;
}

input {
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
}

.input_div {
    display: flex;
    border: 1px solid #7750A1;
    padding-left: 20px;
    border-radius: 15px;
    width: 80%;

}

.empty_state {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 70%;
    height: 250px;
}

.select_input {
    display: flex;
    flex-direction: column;
}

.select_dropdown_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
    justify-content: center;
}
</style>