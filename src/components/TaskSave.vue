<template>
  <div class="mt-4">
    <hr />
    <h2 class="font-weight-light">Save Task</h2>
    <form @submit.prevent="save">
      <div class="row">
        <div :class="columnClass">
          <div class="form-group">
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              placeholder="Task title"
              :value="task && task.title"
            />
          </div>
        </div>
        <div class="col-sm-2" v-if="task">
          <div class="form-group">
            <label>Task completed?</label>
            <button
              type="button"
              class="btn btn-sm d-block"
              :class="buttonClass"
            >
              <i class="fa fa-check" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    columnClass() {
      return this.task ? "col-sm-10" : "col-sm-12";
    },
    buttonClass() {
      return this.task && this.task.completed ? "btn-success" : "btn-secondary";
    },
  },
  created() {
    if (this.task) {
      console.log(
        "Task by id",
        this.$store.getters["tasks/searchTaskById"](this.task.id)
      );
    }
  },
  methods: {
    save() {
      const operation = !this.task ? "criar" : "editar";
      console.log("Operação: ", operation);
    },
  },
};
</script>
