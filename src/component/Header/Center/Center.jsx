import Box from "../../Box/Box";
import bg from "../../../assets/image/mobile.png";
import Guard from "../../../assets/image/Guard.png";
import Insights from "../../../assets/image/Insights.png";
import Swift from "../../../assets/image/Swift Sell.png";
import Wallets from "../../../assets/image/Wallets.png";

// Reusable Box Component


const Center = () => {
    return (
        <>
            {/* Center Circle */}
            <div className="rounded-full border-[3px] border-dashed border-[#F04E29] w-[450px] h-[450px]  items-center justify-center ms:order-1 ms:w-[350px] ms:h-[350px] smLab:w-[450px] smLab:h-[450px] hidden smTab:flex">
                <img src={bg} alt="Phone illustration" className="w-[68%]" />
            </div>

            <div className="py-10 my-2 flex items-center justify-center ms:flex-col ms:gap-4 ms:py-2 smTab:w-[100%] smTab:justify-evenly" >
                {/* Left Section */}
                <div className="h-100 w-[300px] flex flex-col items-center justify-between translate-x-[.9rem] gap-10 ms:order-2 ms:translate-x-0 smLab:w-[270px] smTab:translate-x-0 smTab:w-[250px]" >
                    <Box
                        image={Guard}
                        effect={true}
                        title="Guard"
                        description="Prevent counterfeiting, safeguard product authenticity, and uphold reputation, customer experience, and trust."
                        hasButton={true}
                        buttonText="Know more"
                        onButtonClick={() => alert('Learn more about Guard')}
                    />
                    <Box image={Swift} title="Swift Sell" />
                </div>

                {/* Center Circle */}
                <div className="rounded-full border-[3px] border-dashed border-[#F04E29] w-[450px] h-[450px] flex items-center justify-center ms:order-1 ms:w-[350px] ms:h-[350px] smLab:w-[450px] smLab:h-[450px] smTab:hidden">
                    <img src={bg} alt="Phone illustration" className="w-[68%]" />
                </div>

                {/* Right Section */}
                <div className="h-100 w-[300px] flex flex-col items-center justify-around gap-16 -translate-x-10 ms:order-3 ms:gap-3 ms:translate-x-0 smLab:w-[270px] smTab:translate-x-0 smTab:w-[250px]">
                    <Box image={Wallets} title="Wallets" effect={true} />
                    <Box image={Insights} title="Insights" />
                </div>

            </div>
        </>
    );
};

export default Center;
