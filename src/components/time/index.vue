<template>
    <div class="time-app">
        <Time />
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';
import Time from './time-app';

export default defineComponent({
  name: 'time-app',
  components: {
    Time,
  },
});
</script>

<style>

</style>