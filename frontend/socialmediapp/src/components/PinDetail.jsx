import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pinDetailMorePinQuery, pinDetailQuery } from '../utils/data';
import { client, urlFor } from '../client';
import Spinner from './Spinner';

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
                <div>
                    <h1>Pin Detail comes here</h1>
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