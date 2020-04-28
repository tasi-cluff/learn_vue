//window.Event = new Vue();

// this is to wrap the $emit and $on functions to whatever you want
window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon', {
    template: `<input placeholder="Enter coupon code" @blur="onCouponApplied">`,
    methods: {
        onCouponApplied() {
            // Event.$emit('applied');  // Emitting on the other Vue instance, not on the component's this.$emit()
            Event.fire('applied');
        }
    }
});

new Vue({
    el: "#root",
    data: {
        couponApplied: false
    },
    created() {
        // Event.$on('applied', () => alert('Handling the event'));
        Event.listen('applied', () => alert('Handling the event'));
    }
});