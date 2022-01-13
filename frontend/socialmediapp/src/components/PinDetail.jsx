import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pinDetailMorePinQuery, pinDetailQuery } from '../utils/data';
import { client, urlFor } from '../client';
import Spinner from './Spinner';
import { MdDownloadForOffline } from 'react-icons/md';

const PinDetail = ({ user }) => {

    const { pinId } = useParams();
    const [pins, setPins] = useState();
    const [pinDetail, setPinDetail] = useState();

    const fetchPinDetails = () => {
        const query = pinDetailQuery(pinId);
        if(query) {
            client
                .fetch(`${query}`)
                .then((data) => {
                    setPinDetail(data[0]);
                    if(data[0]) {
                        const query1 = pinDetailMorePinQuery(data[0]);
                        client
                            .fetch(query1)
                            .then((res) => {
                                setPins(res);
                            });
                    }
                });
        }
    }

    useEffect(() => {
        fetchPinDetails();
    }, [pinId]);

    if(!pinDetail) {
        return (
            <Spinner message="Showing pin" />
        );
    }

    return (
        <>
            {pinDetail && (
                <div className="flex xl:flex-row flex-col m-auto bg-white" style={{ maxWidth: '1500px', borderRadius: '32px' }}>
                    <div className="flex justify-center items-center md:items-start flex-initial">
                        <img
                            className="rounded-t-3xl rounded-b-lg"
                            src={(pinDetail?.image && urlFor(pinDetail?.image).url())}
                            alt="user-post"
                        />
                    </div>
                    <div className="w-full p-5 flex-1 xl:min-w-620">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <a
                                    href={`${pinDetail.image.asset.url}?dl=`}
                                    download
                                    className="bg-secondaryColor p-2 text-xl rounded-full flex items-center justify-center text-dark opacity-75 hover:opacity-100"
                                >
                                    <MdDownloadForOffline />
                                </a>
                            </div>
                            <a href={pinDetail.destination} target="_blank" rel="noreferrer">
                                {pinDetail.destination?.slice(8)}
                            </a>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold break-words mt-3">
                                {pinDetail.title}
                            </h1>
                            <p className="mt-3">{pinDetail.about}</p>
                        </div>
                    </div>
                </div>
            )}
            {pins?.length > 0 && (
                <h2 className="text-center font-bold text-2xl mt-8 mb-4">
                    More like this
                </h2>
            )}
        </>
    );
}

export default PinDetail;