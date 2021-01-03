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
        // image="//ci.xiaohongshu.com/a65dec9a-99ae-41e6-af72-d259e9571eaa?imageView2/2/w/1080/format/jpg"
        onClose={() => {
            PostDialogStore.close()
        }}
        >
            <div
                style={{
                    display: 'flex'
                }}
            >
                <Skeleton
                    width={500}
                    height={550}
                />
                {/* <img
                    width={500}
                    height={550}
                    // src='//ci.xiaohongshu.com/a65dec9a-99ae-41e6-af72-d259e9571eaa?imageView2/2/w/1080/format/jpg'
                    // png
                    src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc2MEQyQTc5NDFDMTExRUJCOTI3RTUxQkM4OTA4MTU2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc2MEQyQTdBNDFDMTExRUJCOTI3RTUxQkM4OTA4MTU2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzYwRDJBNzc0MUMxMTFFQkI5MjdFNTFCQzg5MDgxNTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzYwRDJBNzg0MUMxMTFFQkI5MjdFNTFCQzg5MDgxNTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAAACwAAAAAAQABAAACAkQBADs='
                    // gif
                    // src='data:image/gif;base64,R0lGODlhAQABAIAAAO7u7gAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyRDFBRkY5NDAyQjExRUI5RjA0QUFDMkVCREJEMzBEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAyRDFBRkZBNDAyQjExRUI5RjA0QUFDMkVCREJEMzBEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDJEMUFGRjc0MDJCMTFFQjlGMDRBQUMyRUJEQkQzMEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDJEMUFGRjg0MDJCMTFFQjlGMDRBQUMyRUJEQkQzMEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAAAQABAAACAkQBADs='
                    style={{
                        verticalAlign: 'top',
                        objectFit: 'cover'
                    }}
                /> */}
                {/* comment box */}
                <CommentBox />
            </div>
        </Dialog>
    )
}

export default inject('store')(observer(PostDialog))