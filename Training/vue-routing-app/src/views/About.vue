<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>City: {{$route.params.city}}</p>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>
