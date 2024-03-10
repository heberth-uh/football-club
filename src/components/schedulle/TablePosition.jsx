import { useContext } from "react";
import { Context } from "../../context/Context";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function TablePosition() {
    const { positions } = useContext(Context)

    return (
        <div className="container mx-auto my-20 -bg-slate-500">
            <h3 className="text-gray-200 font-bold text-xl text-center mb-5">Tabla de posiciones</h3>
            <table className="mx-auto w-full text-gray-200">
                <thead className="bg-gray-800">
                    <tr>
                        <th>Pos</th>
                        <th className="text-center">Club</th>
                        <th>JJ</th>
                        <th>JG</th>
                        <th>JE</th>
                        <th>JP</th>
                        <th>GF</th>
                        <th>GC</th>
                        <th>Diff</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {positions.map(club => (
                        <tr key={club.id}
                            className={club.club == "Atletico" ? "bg-slate-600 border-b border-b-slate-600 text-center font-bold" : "bg-slate-700 border-b border-b-slate-600 text-center"}>
                            <td>{club.pos}</td>
                            <td className="text-left">{club.club}</td>
                            <td>{club.jj}</td>
                            <td>{club.jg}</td>
                            <td>{club.je}</td>
                            <td>{club.jp}</td>
                            <td>{club.gf}</td>
                            <td>{club.gc}</td>
                            <td>{club.dif}</td>
                            <td className="font-bold">{club.pts}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-sm text-center mt-2">
                <a href="#" className="text-slate-300 hover:text-slate-200">
                    <span className="flex justify-center items-center">
                        Ver tabla completa
                        <AiOutlineArrowRight/>
                    </span>
                </a>
            </div>
        </div>
    )
}