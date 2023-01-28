import Lottie from "react-lottie";

const LottieAnimation = ({ animationData }) => {
    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return <Lottie options={animationOptions} height={126} width={126} />;
};

export default LottieAnimation;
