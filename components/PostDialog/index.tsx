import { inject, observer } from "mobx-react"
import React from "react"
import CommentBox from "../CommentBox"
import Dialog from "../Dialog"
import Skeleton from "../Skeleton"

const PostDialog = (props) => {
    const { visible, store } = props
    const { PostDialogStore } = store
    return (
      <Dialog
        visible={visible}
        // title='这脑洞简直了，纸张艺术啊！❤️'
        onClose={() => {
            PostDialogStore.close()
        }}
        >
            <div
                style={{
                    display: 'flex'
                }}
            >
                <Skeleton.Image
                    width={500}
                    height={550}
                    src='//ci.xiaohongshu.com/a65dec9a-99ae-41e6-af72-d259e9571eaa?imageView2/2/w/1080/format/jpg'
                />
                {/* comment box */}
                <CommentBox />
            </div>
        </Dialog>
    )
}

export default inject('store')(observer(PostDialog))