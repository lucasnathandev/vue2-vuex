<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Vuex</h1>
        <p class="lead">
          Padrão de Gerenciamento de Estado Centralizado no Vue.
        </p>
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
import CounterApp from "@/components/CounterApp.vue";
import TaskList from "@/components/TaskList.vue";

export default {
  components: {
    CounterApp,
    TaskList,
  },
};
</script>
