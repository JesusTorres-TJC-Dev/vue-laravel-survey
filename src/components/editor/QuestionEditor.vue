<template>
  <div class="flex items-center justify-between">
    <h3 class="text-lg font-bold">
        {{ index + 1 }}. {{ model.question }}
    </h3>

    <div class="flex items-center">
        <button
            type="button"
            @click="addQuestion()"
            class="
                flex
                items-center
                text-xs
                py-1
                px-3
                mr-2
                rounded-sm
                text-white
                bg-gray-600
                hover:bg-gray-700
            "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4" />
            </svg>
            Add
        </button>

        <button
            type="button"
            @click="deleteQuestion()"
            class="
                flex
                items-center
                text-xs
                py-1
                px-3
                rounded-sm
                border border-transparent
                text-red-500
                hover:border-red-600
            "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
            </svg>
            Delete
        </button>
    </div>
  </div>
  <div class="grid gap-3 grid-cols-12">
    <div class="mt-3 col-span-9">
        <label
            :for="'question_text_' + model.data"
            class="block text-sm font-medium text-gray-700"
        >
            Question Text
        </label>
        <input
            type="text"
            :name="'question_text_' + model.data"
            v-model="model.question"
            @change="dataChange"
            :id="'question_text_' + model.data"
            class="
                mt-1
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
            "
        />
    </div>
    <div class="mt-3 col-span-3">
        <label for="question_tpe" class="block text-sm font-medium text-gray-700">
            Select Question Type
        </label>
        <select
            id="question_type"
            name="question_type"
            v-model="model.type"
            @change="typeChange"
            class="
                mt-1
                block
                w-full
                py-2
                px-3
                border border-gray-300
                bg-white
                rounded-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                sm:text-sm
            "
        >
            <option v-for="typee in questionTypes" :key="typee" :value="typee">
                {{ upperCaseFirst(typee) }}
            </option>
        </select>
    </div>
  </div>
  <div class="mt-3 col-span-9">
    <label
        :for="'question_description_' + model.id"
        class="block text-sm font-medium text-gray-700"
    >
        Description
    </label>
    <textarea
        :name="'question_description_' + model.id"
        v-model="model.description"
        @change="dataChange"
        :id="'question_description_' + model.id"
        class="
            mt-1
            focus:ring-indigo-500
            focus:border-indigo-500
            block
            w-full
            shadow-sm
            sm:text-sm
            border-gray-300
            rounded-md
        "
    />
  </div>

  <div>
    <div v-if="shouldHaveOptions()" class="mt-2">
        <h4 class="text-sm font-semibold mb-1 flex justify-between items-center">
            Options

            <button
                type="button"
                @click="addOption()"
                class="
                    flex
                    items-center
                    text-xs
                    py-1
                    px-2
                    rounded-sm
                    text-white
                    bg-gray-600
                    hover:bg-gray-700
                "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4v16m8-8H4" />
                </svg>
                Add Option
            </button>
        </h4>

        <div
            v-if="!model.data.options.length"
            class="text-xs text-gray-600 text-center py-3"
        >
            You don't have any options defined
        </div>

        <!-- <pre>{{model.data.options}}</pre> -->

        <div
            v-for="(option, index) in model.data.options"
            :key="option.uuid"
            class="flex items-center mb-1"
        >
            <span class="w-6 text-sm"> {{ index + 1 }}. </span>
            <input
                type="text"
                v-model="option.text"
                @change="dataChange"
                class="
                    w-full
                    rounded-sm
                    py-1
                    px-2
                    text-xs
                    border border-gray-300
                    focus:border-indigo-500
                "
            >

            <button
                type="button"
                @click="removeOption(option)"
                class="
                    h-6
                    w-6
                    rounded-full
                    flex
                    items-center
                    justify-center
                    border border-transparent
                    transition-colors
                    hover:border-red-100
                "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            </button>
        </div>
    </div>
  </div>

  <hr class="my-4"/>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { v4 as uuidv4 } from 'uuid';
    import store from '../../store';
    const props = defineProps({
        question: Object,
        index: Number
    })

    const emit = defineEmits(["change", "addQuestion", "deleteQuestion"])

    const model = ref(JSON.parse(JSON.stringify(props.question)))

    const questionTypes = computed(() => store.state.questionTypes);

    const upperCaseFirst = (type) => {
        const str = type
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const shouldHaveOptions = () => {
        return ["select", "radio", "checkbox"].includes(model.value.type)
    }

    const getOptions = () => {
        return model.value.data.options
    }

    const setOptions = (options) => {
        model.value.data.options = options
    }

    const addOption = () => {
        setOptions([
            ...getOptions(),
            { uuid: uuidv4(), text: "" }
        ])
        dataChange();
    }

    const removeOption = (op) => {
        setOptions(getOptions().filter((opt) => opt !== op))
        dataChange()
    }

    const typeChange = () => {
        if(shouldHaveOptions()) {
            setOptions(getOptions() || [])
        }
        dataChange()
    }

    const dataChange = () => {
        const data = JSON.parse(JSON.stringify(model.value))
        if(!shouldHaveOptions()){
            delete data.data.options
        }

        emit("change", data)
    }

    const addQuestion = () => {
        emit("addQuestion", props.index + 1)
    }

    const deleteQuestion = () => {
        emit("deleteQuestion", props.question)
    }
</script>

<style>

</style>