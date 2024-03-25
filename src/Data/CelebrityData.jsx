import { useState } from "react";

const CelebrityData = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [editUser, setEditUser] = useState(null);
    
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Aidan Wang",
            description: " This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang.",
            img: "https://randomuser.me/api/portraits/med/men/93.jpg",
            Age: 51,
            Gender: "male",
            Country: "New Zealand",
        },
        {
            id: 2,
            name: "John Doe",
            description: " This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang.",
            img: "https://randomuser.me/api/portraits/med/women/48.jpg",
            Age: 52,
            Gender: "female",
            Country: "Norway",
        },
        {
            id: 3,
            name: "bismila-al-rahman",
            description: "This character description generator will generate a fairly random description of a belonging to محمدپارسا صدر. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of محمدپارسا صدر.",
            img: "https://randomuser.me/api/portraits/med/men/34.jpg",
            Age: 71,
            Gender: "non-binary",
            Country: "Iran",
        },
        {
            id: 4,
            name: "emilia gomez",
            description: "This character description generator will generate a fairly random description of a belonging to Emilia Gonzalez. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emilia Gonzalez.",
            img: "	https://randomuser.me/api/portraits/med/women/90.jpg",
            Age: 75,
            Gender: "female",
            Country: "Spain",
        }
    ]);

    const [userStates, setUserStates] = useState(users.map(user => ({ id: user.id, showDescription: false })));

    const filteredUsers = () => {
        return users.filter(user =>
            user.id.toString().includes(searchQuery) || user.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        console.log("Search query:", e.target.value);
    }

    const toggleDescription = (userId) => {
        setUserStates((prevState) => {
            return prevState.map(state => {

                if (state.id === userId) {

                    return { ...state, showDescription: !state.showDescription };
                } else {

                    return state;
                }
            });
        });
    }

    const deleteById = (id) => {

        const updatedUsers = users.filter(user => user.id !== id);

        setUsers(updatedUsers);
    }

    return (
        <>

            <div className="flex flex-col items-center justify-center w-[100vw]">

               

                <div className=" font-[600] text-[24px] mb-5">Factwise</div>

                <div className="flex justify-start items-center  border border-gray-300 rounded px-2 mt-4 mb-4 w-[600px] gap-2">
                    <form>
                        <input
                            type="text"
                            placeholder="Search User"
                            className="w-[100%] focus:border-transparent outline-none"
                            name="search"
                            value={searchQuery}
                            onChange={handleSearch}>
                        </input>
                    </form>
                </div>


                <div className="flex  flex-col items-center ">
                    {filteredUsers().map(user => (
                        <div key={user.id} className="w-[600px] border-2  rounded-lg mb-4 px-6 py-2 flex flex-col gap-2">
                            <div className="flex justify-between items-center disable-selection mb-2">
                                <div className="flex items-center  gap-4">
                                    <div>
                                        <img className="rounded-[100%]" src={user.img} alt={user.name} height="50" width="50" />
                                    </div>
                                    <div className="font-[600] text-[18px]">
                                        {user.name}
                                    </div>
                                </div>
                                <div className="cursor-pointer disable-selection " onClick={() => toggleDescription(user.id)}>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.78 15.78a.749.749 0 0 1-1.06 0L12 10.061 6.28 15.78a.749.749 0 1 1-1.06-1.06l6.25-6.25a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 0 1 0 1.06Z"></path>
                                    </svg>
                                </div>
                            </div>



                            {/*second -div*/}
                            {userStates.find(state => state.id === user.id)?.showDescription && (
                                <div className="transition-all ease-in-out duration-300">
                                    <div className=" flex justify-between gap-[100px] mb-3">
                                        <div className="flex flex-col items-start">
                                            <div className="font-[500] text-slate-500">Age</div>
                                            <div>{user.Age}</div>
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <div className="font-[500] text-slate-500">Gender</div>
                                            <div>{user.Gender}</div>
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <div className="font-[500] text-slate-500">Country</div>
                                            <div>{user.Country}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-[500] text-slate-500">Description</div>
                                        <div className="text-start">
                                            {user.description}
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-5">
                                        <div className="cursor-pointer" onClick={() => deleteById(user.id)}>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="30" width="30" xmlns="http://www.w3.org/2000/svg" style={{ color: 'red' }}>
                                                <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                            </svg>
                                        </div>
                                        <div className="cursor-pointer">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg" style={{ color: 'blue' }}>
                                                <path d="M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/*second div ends */}

                        </div >
                    ))}
                </div >




            </div >
            {/*  first div-ends*/}
        </>
    );
};

export default CelebrityData;
