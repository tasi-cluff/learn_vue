Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,

    data() {
        return { tabs: [] };
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    data() {
        return {
            isActive: false
        }
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    }
});

Vue.component('modal', {
    template: `
        <div>
            <h2><slot></slot></h2>
            <button @click="$emit('close')">Close Modal</button>
        </div>
    `
});

Vue.component('message', {
    props: 
        ['title', 'body']
    ,

    data() {
        return {
            isVisible: true
        }
    },

    template: `
        <div v-show="isVisible">
            <div>
                <h1>{{ title }}</h1>
                <button type="button" @click="isVisible = false">x</button>
            </div>

            <div>
                <h2>{{ body }}</h2>
            </div>
        </div>
    `
});

new Vue({
    el: '#root',

    data: {
        showModal: false
    }
});