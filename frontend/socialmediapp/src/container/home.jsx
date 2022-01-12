const Home = () => {

    const userInfo = localStorage.getItem('user') !=='undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear(); 

    return (
        <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
            <div className="hidden md:flex h-screen flex-initial">
            
            </div>
            <div className="">

            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Home;