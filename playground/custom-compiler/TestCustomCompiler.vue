<template>
    <p>Hi</p>
    <vugel :settings="{clearColor: 'black'}" style="width: 500px; height: 500px">
        <compiler-component></compiler-component>
    </vugel>
</template>

<script lang="ts">
    import { Vugel } from 'vugel'
    import CompilerComponent from './CompilerComponent.vue'

    export default {
        name: 'App',
        components: {
            CompilerComponent,
            Vugel,
        }
    }
</script>
