<template>
    <div class="Home">
        <async-component @click="Wait"/>
    </div>
</template>

<script>
import AsyncComponent from '../components/AsyncComponent.vue';
export default {
    name: 'HomePage',
    components: {
        AsyncComponent,
    },
    data: () => ({
        clickCount: 0,
    }),
    methods: {
        Wait() {
            return new Promise((resolve) => {
                setTimeout(() => {
                this.clickCount++;
                console.log(this.clickCount);
                resolve();
                }, this.clickCount * 1000); 
            });
        }
    }
}

</script>

<style scoped>
.Home {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 60px;
}
</style>
