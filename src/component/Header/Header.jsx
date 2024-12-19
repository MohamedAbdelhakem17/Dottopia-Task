const Header = () => {
    return (
        <div className="flex items-center justify-between  ms:flex-col ms:gap-2 ms:py-2 ms:text-center smTab:flex-col smTab:text-center smTab:py-3" >
            <div className="w-[560px] ms:w-[90%] smLab:w-[450px]">
                <p className="pb-1 text-[#F04E29] font-bold text-[14px] ms:text-xl m-0 p-0">our Services</p>
                <h1 className="font-extrabold text-[2.2rem] ms:text-[1.8rem] m-0 p-0">Qara’s Digital Eco System</h1>
            </div>
            <p className="text-[12px] text-container ms:w-[95%] w-[650px] smLab:w-[550px] smTab:w-[500px]">
                Qara’s platform is made up of four core products for authentication, traceability, supply chain management, marketing program management, in-app marketplace, and much more. Each product in the platform is connected to the same underlying CRM database, giving you incredible insight into every contact at each stage in the product journey. Although our products are powerful on their own, the real magic happens when you use them together.
            </p>
        </div>
    )
}

export default Header