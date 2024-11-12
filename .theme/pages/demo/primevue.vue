<template>
  <Card>
    <template #title>
      <span> Form </span>
    </template>
    <template #content>
      <div class="flex flex-column gap-8 h-48 align-center">
        <div class="flex-1 flex">
          <Form v-slot="$form" :initial-values class="flex flex-col gap-4 w-full sm:w-56 justify-center" @submit="onFormSubmit">
            <div class="flex flex-col gap-1">
              <InputText class="box-border" name="username" type="text" placeholder="Username" fluid />
              <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">
                {{ $form.username.error?.message }}
              </Message>
            </div>
            <Button class="box-border" type="submit" severity="secondary" label="Submit" />
          </Form>
        </div>
        <div class="whitespace-pre overflow-y-auto wid text-sm w-full flex-1 max-h-48">
          {{ states }}
        </div>
      </div>
    </template>
  </Card>
</template>
<script setup>
import { Form } from "@primevue/forms";

const states = ref();

function onFormSubmit(event) {
  states.value = JSON.stringify(event.states, undefined, 2);
}
</script>
