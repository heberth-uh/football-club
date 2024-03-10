import { Context } from "../../context/Context";
import { useContext } from "react";
import SquadCardPlayer from "./SquadCardPlayer";

export default function Squad() {
    const { squad } = useContext(Context);

    return (
        <div className="bg-slate-800" id="plantilla_section">
            <div className="container mx-auto text-center py-16 px-2 md:px-0 md:w-3/4 xxoverflow-hidden">
                <h4 className="text-gray-100 text-2xl md:text-3xl font-semibold mb-16">
                    Plantilla
                </h4>

                <div>
                    <div className="relative mb-10 pb-4 border-b-2 border-gray-500">
                        <p className="absolute left-0 right-0 -top-8 text-6xl font-extrabold text-indigo-400 opacity-10">
                            Porteros
                        </p>
                        <p className="text-2xl font-extrabold text-cyan-100">
                            Porteros
                        </p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-14 my-4">
                        {squad
                            .filter((player) => player.position == "Goalkeeper")
                            .map((goalkeeper) => (
                                <SquadCardPlayer
                                    key={goalkeeper.id}
                                    firstName={goalkeeper.firstName}
                                    lastName={goalkeeper.lastName}
                                    img_url={goalkeeper.img_url}
                                    shirtNumber={goalkeeper.shirtNumber}
                                />
                            ))}
                    </div>

                    <div className="relative mb-10 pb-4 border-b-2 border-gray-500">
                        <p className="absolute left-0 right-0 -top-8 text-6xl font-extrabold text-indigo-400 opacity-10">
                            Defensas
                        </p>
                        <p className="text-2xl font-extrabold text-cyan-100">
                            Defensas
                        </p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-14 my-4">
                        {squad
                            .filter((player) => player.position == "Defence")
                            .map((defender) => (
                                <SquadCardPlayer
                                    key={defender.id}
                                    firstName={defender.firstName}
                                    lastName={defender.lastName}
                                    img_url={defender.img_url}
                                    shirtNumber={defender.shirtNumber}
                                />
                            ))}
                    </div>

                    <div className="relative mb-10 pb-4 border-b-2 border-gray-500">
                        <p className="absolute left-0 right-0 -top-8 text-6xl font-extrabold text-indigo-400 opacity-10">
                            Medios
                        </p>
                        <p className="text-2xl font-extrabold text-cyan-100">
                            Medios
                        </p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-14 my-4">
                        {squad
                            .filter((player) => player.position == "Midfield")
                            .map((midfielder) => (
                                <SquadCardPlayer
                                    key={midfielder.id}
                                    firstName={midfielder.firstName}
                                    lastName={midfielder.lastName}
                                    img_url={midfielder.img_url}
                                    shirtNumber={midfielder.shirtNumber}
                                />
                            ))}
                    </div>

                    <div className="relative mb-10 pb-4 border-b-2 border-gray-500">
                        <p className="absolute left-0 right-0 -top-8 text-6xl font-extrabold text-indigo-400 opacity-10">
                            Delanteros
                        </p>
                        <p className="text-2xl font-extrabold text-cyan-100">
                            Delanteros
                        </p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-14 my-4">
                        {squad
                            .filter((player) => player.position == "Offence")
                            .map((striker) => (
                                <SquadCardPlayer
                                    key={striker.id}
                                    firstName={striker.firstName}
                                    lastName={striker.lastName}
                                    img_url={striker.img_url}
                                    shirtNumber={striker.shirtNumber}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
