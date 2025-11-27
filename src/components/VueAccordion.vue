<template>
    <div class="accordion_container">
        <VueFaqAccordion 
          :items="myItems"
        />
    </div>
</template>
 
<script>
import VueFaqAccordion from 'vue-faq-accordion'
 
export default {
  components: {
    VueFaqAccordion
  },
  data () {
    return {
      myItems: [
        {
          title: "How many time zones are there in all?",
          value:
            "Given a 24-hour day and 360 degrees of longitude around the Earth",
          category: "Tab-1",
        },
        {
          title: "How long is a day and year on Venus?",
          value:
            "Venus takes 224.7 Earth days to complete one orbit around the Sun.",
          category: "Tab-2",
        },
        {
          title: "What animal smells like popcorn?",
          value: "Binturongs smell like popcorn.",
          category: "Tab-2",
        },
        {
          title: "What animal smells like popcorn?",
          value: "Binturongs smell like popcorn.",
          category: "Tab-3",
        },
        {
          title: "What animal smells like popcorn?",
          value: "Binturongs smell like popcorn.",
          category: "Tab-4",
        },
        {
          title: "This is",
          value: "Ologundamilola",
          category: "Tab-1",
        },
      ],
    }
  }
}
</script>
<style scoped>
.accordion_container{
width: 40%;
margin: 0 auto;
}
</style>