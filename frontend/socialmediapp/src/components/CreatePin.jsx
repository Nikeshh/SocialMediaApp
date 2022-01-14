import { useState } from "react";
import Spinner from "./Spinner";

const CreatePin = ({ user }) => {

    const [fields, setFields] = useState();
    const [loading, setLoading] = useState(false);
    const [wrongImageType, setWrongImageType] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center mt-5 lg:h-4/5">
            {fields && (
                <p className="text-red-500 mb-5 text-xl transition-all duration-150 ease-in">Please add all fields.</p>
            )}
            <div className=" flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full">
                <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
                    <div className="flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
                        {loading && (
                            <Spinner />
                        )}
                        {
                            wrongImageType && (
                                <p>It&apos;s wrong file type.</p>
                            )
                        }
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default CreatePin;