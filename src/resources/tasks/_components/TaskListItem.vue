<template>
  <li class="list-group-item d-flex">
    <span>{{ taskProp.title }}</span>
    <span class="espacar"></span>
    <button
      class="btn btn-sm mr-4"
      :class="cssClass"
      :title="completedButtonTitle"
      @click="$emit('complete', taskProp)"
    >
      <i class="fa fa-check"></i>
    </button>
    <button
      class="btn btn-primary btn-sm mr-1"
      title="Edit"
      @click="$emit('edit', taskProp)"
    >
      <i class="fa fa-pencil-alt"></i>
    </button>
    <button
      class="btn btn-danger btn-sm"
      title="Delete"
      @click="$emit('delete', taskProp)"
    >
      <i class="fa fa-trash"></i>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    taskProp: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cssClass() {
      return {
        "btn-secondary": !this.taskProp.completed,
        "btn-success": this.taskProp.completed,
      };
    },
    completedButtonTitle() {
      return this.taskProp.completed ? "Redo task" : "Complete task";
    },
  },
};
</script>

<style scoped>
.espacar {
  flex: 1 1 auto;
}
</style>
