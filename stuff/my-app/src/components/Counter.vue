<template>
    <div class="box is-info">
        <h2>The count von count is: {{ count }}</h2>

        <p>
            <button @click="count += 15">Increment</button>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return { count: 0 };
    }
}
</script>

<style>
</style>