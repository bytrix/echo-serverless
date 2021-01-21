import React, { HTMLAttributes } from "react";
import Lottie from 'react-lottie'
import loadingAnimation from './lf30_editor_3gt8shgd.json'

const Loading = (props: HTMLAttributes<HTMLDivElement>) => (
    <Lottie
        isStopped={false}
        isPaused={false}
        width={130}
        height={130}
        options={{
            animationData: loadingAnimation
        }}
        isClickToPauseDisabled={true}
        style={props.style}
    />
)

export default Loading