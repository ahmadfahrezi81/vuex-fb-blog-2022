import { createStore } from "vuex";
import { auth, db } from "../firebase/config";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default createStore({
    state: {
        sampleBlogCards: [
            {
                blogTitle: "Blog Card #1",
                blogCoverPhoto: "stock-1",
                blogDate: "May 1, 2021",
            },
            {
                blogTitle: "Blog Card #2",
                blogCoverPhoto: "stock-2",
                blogDate: "May 1, 2021",
            },
            {
                blogTitle: "Blog Card #3",
                blogCoverPhoto: "stock-3",
                blogDate: "May 1, 2021",
            },
            {
                blogTitle: "Blog Card #4",
                blogCoverPhoto: "stock-4",
                blogDate: "May 1, 2021",
            },
        ],
        editPost: null,
        user: null,
        profileAdmin: null,
        profileEmail: null,
        profileFirstName: null,
        profileLastName: null,
        profileUsername: null,
        profileId: null,
        profileNameInitials: null,
    },
    getters: {},
    mutations: {
        toggleEditPost(state, payload) {
            state.editPost = payload;
        },
        setProfileInfo(state, doc) {
            state.profileEmail = doc.data().email;
            state.profileFirstName = doc.data().firstName;
            state.profileLastName = doc.data().lastName;
            state.profileUsername = doc.data().username;
            state.profileId = doc.id;
        },
        setProfileNameInitials(state) {
            //might not work
            //diffrent than tutorial
            state.profileNameInitials =
                state.profileFirstName.charAt(0) +
                state.profileLastName.charAt(0);
        },
    },
    actions: {
        getCurrentUser({ commit }, userData) {
            commit("setProfileInfo", userData);
            commit("setProfileNameInitials");
        },
    },
    modules: {},
});
