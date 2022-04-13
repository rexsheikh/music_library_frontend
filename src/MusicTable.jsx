import { useState } from "react";

const MusicTable = (props) => {

    return ( 
    <div className="table table-bordered table-striped" >
        <thead>
            <tr> 
                <th className="text-center font-weight-bold"> Title </th>
                <th className="text-center font-weight-bold"> Artist </th>
                <th className="text-center font-weight-bold"> Album </th>
                <th className="text-center font-weight-bold"> Release Date</th>
                <th className="text-center font-weight-bold"> Genre </th>
            </tr>
        </thead>
        <tbody>
        {props.parentSongs.map((song) =>{
            return (
                <tr> 
                    <td className="text-center"> {song.title} </td>
                    <td className="text-center"> {song.artist}</td>
                    <td className="text-center">{song.album} </td>
                    <td className="text-center">{song.release_date} </td>
                    <td className="text-center"> {song.genre} </td> 
                </tr>
            )
        })}
        </tbody>
    </div>
    );
}
 
export default MusicTable;