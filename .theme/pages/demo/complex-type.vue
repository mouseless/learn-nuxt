<template>
  <div>
    <div>
      {{ interfacePerson.stringProperty }} {{ interfacePerson.numberProperty }}
    </div>
    <div>
      {{ classPerson.stringProperty }} {{ classPerson.numberProperty }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import IDemoInterface from "../../types/IDemoInterface";

const interfacePerson = ref<IDemoInterface>({
  stringProperty: "John",
  numberProperty: 20
});

class DemoClass implements IDemoInterface {
  stringProperty: string;
  numberProperty: number;
  constructor(stringProperty: string, numberProperty: number) {
    this.stringProperty = stringProperty;
    this.numberProperty = numberProperty;
  }
}
const classPerson = new DemoClass("Richard", 30);
</script>
