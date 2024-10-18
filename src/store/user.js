import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    getters: {
        isAuthenticated: (state) => !!state.user,
        getUser: (state) => state.user
    }
});

export default store;
