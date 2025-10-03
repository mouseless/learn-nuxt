<template>
  <div class="flex flex-column gap-4 h-72">
    <Card>
      <template #title>
        <span class="text-xl font-medium leading-8"> Form </span>
      </template>
      <template #content>
        <div class="flex">
          <Form
            v-slot="$form"
            :resolver="customResolver"
            :validate-on-submit="true"
            :validate-on-value-update="false"
            class="flex flex-col gap-4 w-full"
            @submit="onFormSubmit"
          >
            <div class="flex flex-col gap-1 h-14">
              <InputText
                class="box-border"
                name="username"
                type="text"
                placeholder="Username"
                fluid
              />
              <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">
                {{ $form.username.error?.message }}
              </Message>
            </div>
            <div class="flex flex-col gap-1 h-14">
              <Password
                class="box-border"
                name="password"
                placeholder="Password"
                :feedback="false"
                toggle-mask
                fluid
              />
              <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
                {{ $form.password.error?.message }}
              </Message>
            </div>
            <Button class="box-border mt-1" type="submit" severity="secondary" label="Submit" />
          </Form>
        </div>
      </template>
    </Card>
    <div class="flex flex-1 flex-col gap-4 p-5 bg-white text-xs rounded-xl shadow">
      <span class="text-xl font-medium leading-8 block">Submit Result:</span>
      <div class="whitespace-pre overflow-y-auto overflow-x-hidden wid w-full">
        {{ formPostEvent }}
      </div>
    </div>
  </div>
  <Toast position="top-center" />
</template>
<script setup>
import { Form } from "@primevue/forms";

const toast = useToast();
const formPostEvent = ref();

function customResolver(resolverOptions) {
  const result = { errors: [] };

  for(const name of resolverOptions.names) {
    if(!resolverOptions.values[name]) {
      result.errors[name] = [{ message: `'${name}' is required` }];
    }
  }

  return result;
}

function onFormSubmit(event) {
  formPostEvent.value = JSON.stringify(event, undefined, 1);

  toast.add({
    severity: event.valid ? "success" : "error",
    summary: event.valid ? "Form submitted" : "Form contains invalid fields",
    life: 3000
  });
}
</script>
