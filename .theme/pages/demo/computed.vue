<template>
  <div>
    FirstName is a property: {{ firstName }}
    <br/>
    LastName is a property: {{ lastName }}
    <br/>
    FullName is a computed property: {{ fullName }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "John",
      lastName: "Doe"
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    }
  }
};
</script>