import PropTypes from "prop-types";

const Box = ({ image, title, description, hasButton, buttonText, onButtonClick, effect = false }) => {
    return (
        <div className={`bg-white px-5 rounded-md ${effect && "customShadow"}`}>
            <div className={"flex items-center justify-start w-[300px] ms:w-[320px] py-2 smLab:w-[270px] smTab:w-[230px]"}>
                <img src={image} alt={`${title} illustration`} className="w-[80px]" />
                <h3 className="font-bold text-[1.5rem] p-2">{title}</h3>
            </div>
            {description && <p className="mt-2">{description}</p>}
            {hasButton && (
                <button
                    onClick={onButtonClick}
                    className="rounded-md my-5 py-3 px-4 w-[90%] block mx-auto text-center text-white bg-[#F04E29]"
                >
                    {buttonText}
                </button>
            )}
        </div>
    );
};

Box.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    hasButton: PropTypes.bool,
    buttonText: PropTypes.string,
    onButtonClick: PropTypes.func,
    effect: PropTypes.bool,
};

export default Box;
