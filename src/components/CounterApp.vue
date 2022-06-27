<template>
  <div>
    <h2 class="font-weight-light">Counter: {{ counter }}</h2>
    <h2 class="font-weight-light">Counter Alias: {{ counterAlias }}</h2>
    <h2 class="font-weight-light">
      Multiplied Counter: {{ multipliedCounter }}
    </h2>
    <button @click="decrement" class="btn btn-lg btn-danger mr-1">-</button>
    <button @click="increment" class="btn btn-lg btn-success">+</button>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("counter");

export default {
  data() {
    return {
      localMultiplier: 2,
    };
  },
  computed: {
    ...mapState({
      counter: (state) => state.counter,
      // counter: "counter",
      counterAlias: (state) => state.counter,
      multipliedCounter(state) {
        return state.counter * this.localMultiplier;
      },
    }),
    // now we can create more computed properties.
  },
  methods: {
    increment() {
      this.$store.state.counter.counter++;
    },
    decrement() {
      if (this.$store.state.counter.counter > 0)
        this.$store.state.counter.counter--;
    },
  },
};
</script>