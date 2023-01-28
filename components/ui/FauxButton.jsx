
const FauxButton = ({buttonText}) => {
    return (
        <button class="bg-cream w-fit mx-3 my-3 border-2 rounded-md border-red text-black py-3 px-7 hover:bg-red cursor-auto hover:text-white">
        {buttonText}
        </button>
    )
}

export default FauxButton;