import React from 'react';
import ReactLoading from 'react-loading';
const Loading = () => {
    return (
        <div className="absolute h-screen w-screen bg-black flex justify-center items-center gap-5">
            FitnessCentre
            <ReactLoading type="spin" color="#fff"  width={70} />
        </div>
    );
};

export default Loading;