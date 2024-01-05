import Lottie from "lottie-react";

const LottieAnimation = ({ animationData, size }) => {
    const componentStyle = {
        height: `${size}px`,
        width: `${size}px`,
      };
    return <Lottie animationData={animationData} style={componentStyle}/>;
};

export default LottieAnimation;
