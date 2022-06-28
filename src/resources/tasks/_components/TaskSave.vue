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
              v-model="task.title"
            />
          </div>
        </div>
        <div class="col-sm-2" v-if="selectedTask">
          <div class="form-group">
            <label>Task completed?</label>
            <button
              type="button"
              class="btn btn-sm d-block"
              :class="buttonClass"
              @click="task.completed = !task.completed"
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
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("tasks");

export default {
  data() {
    return {
      task: {},
    };
  },
  computed: {
    ...mapState(["selectedTask"]),
    columnClass() {
      return this.selectedTask ? "col-sm-10" : "col-sm-12";
    },
    buttonClass() {
      return this.selectedTask && this.task.completed
        ? "btn-success"
        : "btn-secondary";
    },
  },
  watch: {
    selectedTask(newTask) {
      this.synchronize(newTask);
    },
  },
  created() {
    this.synchronize(this.selectedTask);
  },
  methods: {
    save() {
      const operation = !this.selectedTask ? "create" : "edit";
      this.$emit("save", { operation, task: this.task });
    },
    synchronize(newTask) {
      this.task = Object.assign({}, newTask || { title: "", completed: false });
    },
  },
};
</script>
