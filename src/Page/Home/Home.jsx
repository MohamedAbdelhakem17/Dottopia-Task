import Center from "../../component/Header/Center/Center";
import Header from "../../component/Header/Header";

const Home = () => {
    return (
        <div className="w-full min-h-dvh bg-bg">
            <div className="container min-h-dvh w-[95%] mx-auto flex flex-col items-center justify-center ms:w-full">
                <Header />
                <Center />
            </div>
        </div>
    );
};

export default Home;
