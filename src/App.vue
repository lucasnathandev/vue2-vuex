<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Vuex</h1>
        <p class="lead">Centralized state management pattern in Vue.</p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-9 border-right">
          <TaskList />
        </div>
        <div class="col-sm-3">
          <CounterApp />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CounterApp from "@/resources/counter/_components/CounterApp.vue";
import TaskList from "@/resources/tasks/_components/TaskList.vue";

export default {
  components: {
    CounterApp,
    TaskList,
  },
};
</script>
