<template>
  <div>
    <div>
      {{ interfaceDemo.stringProperty }} {{ interfaceDemo.numberProperty }}
    </div>
    <div>
      {{ classDemo.stringProperty }} {{ classDemo.numberProperty }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import IDemoInterface from "../../types/IDemoInterface";

const interfaceDemo = ref<IDemoInterface>({
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

const classDemo = new DemoClass("Richard", 30);
</script>
