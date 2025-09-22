<template>
  <div class="flex justify-around">
    <div class="w-1/2 m-4">
      <span class="text-xl">Counter Without Mutex</span>
      <pre class="mt-4">
{{ nonMutex }}
      </pre>
    </div>
    <div class="w-1/2 m-4">
      <span pan class="text-xl">Counter With Mutex</span>
      <pre class="mt-4">
{{ withMutex }}
      </pre>
    </div>
  </div>
</template>
<script setup>
import { Mutex } from "async-mutex";
const mutex = new Mutex();

const nonMutex = ref("");
const withMutex = ref("");
let nonMutexcounter = 0;
let withMutexCounter = 0;

increaseCounter(1, 500);
increaseCounter(2, 200);
increaseCounter(3, 500);
increaseCounter(4, 100);

increaseCounterWithMutex(1, 500);
increaseCounterWithMutex(2, 200);
increaseCounterWithMutex(3, 500);
increaseCounterWithMutex(4, 100);

function increaseCounter(order, ms) {
  nonMutex.value += `Execute: ${order}\n`;
  setTimeout(() => {
    nonMutexcounter++;
    nonMutex.value += `Finish: ${order}\n`;
    nonMutex.value += `new counter is: ${nonMutexcounter}\n`;
  }, ms);
}

function increaseCounterWithMutex(order, ms) {
  withMutex.value += `Execute: ${order}\n`;
  mutex
    .acquire()
    .then(function(release) {
      setTimeout(() => {
        withMutexCounter++;
        withMutex.value += `Finish: ${order}\n`;
        withMutex.value += `new counter is: ${withMutexCounter}\n`;
        release();
      }, ms);
    });
}
</script>
