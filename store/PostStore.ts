import axios from "axios";
import { makeAutoObservable } from "mobx";

class PostStore {
    constructor() {
        makeAutoObservable(this);
    }
    getPosts() {
        axios.post('/api/posts').then(res => {
            console.log('/api/posts', res)
        })
    }
}

export default new PostStore();