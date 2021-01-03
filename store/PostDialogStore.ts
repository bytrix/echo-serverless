import { makeAutoObservable, observable } from "mobx";

class PostDialogStore {
    visible = false
    constructor() {
        makeAutoObservable(this, {
            visible: observable
        })
    }
    open() {
        this.visible = true
    }
    close() {
        this.visible = false
    }
}

export default new PostDialogStore()