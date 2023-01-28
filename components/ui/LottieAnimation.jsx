import Lottie from "react-lottie";

const LottieAnimation = ({ animationData, size }) => {
    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return <Lottie options={animationOptions} height={size} width={size} />;
};

export default LottieAnimation;
