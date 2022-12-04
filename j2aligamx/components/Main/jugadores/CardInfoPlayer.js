import React from "react";
import Image from "next/image";

const CardInfoPlayer = ({data}) => {
    console.log(data[0]);
    return(
        <div
        className="bg-white max-w-sm rounded overflow-hidden shadow-lg m-3 w-240"
        >
            <Image
            src={data[0].player.photo}
            className="sm:h-8 sm:w-8"
            height="150"
            width="100"
            alt={`Foto de ${data[0].player.name == null ? "desconocido" : data[0].player.name}`}
            />
            <div>
            <h1>INFORMACION PERSONAL</h1>
            <p>
                {`Nombre: ${data[0].player.firstname == null ? "desconocido" : data[0].player.firstname} ${data[0].player.lastname == null ? "desconocido" : data[0].player.lastname}`}
                <br/>
                {`Fecha de Nacimiento: ${data[0].player.birth.date == null ? "desconocido" : data[0].player.birth.date}`}
                <br/>
                {`Ciudad: ${data[0].player.birth.place == null ? "desconocido" : data[0].player.birth.place}`}
                <br/>
                {`Lesionado: ${data[0].player.injured == false ? "No" : "Si"}`}
                <br/>
                {data[0].statistics[0].games.captain == true ? `CAPITAN` : null}
            </p>
            </div>
            <div>
            <h1>ESTADISTICAS</h1>
            <p>
                {`Posicion: ${data[0].statistics[0].games.position == null ? "desconocido" : data[0].statistics[0].games.position}`}
                <br/>
                {`Apariciones: ${data[0].statistics[0].games.appearences == null ? "---" : data[0].statistics[0].games.appearences}`}
                <br/>
                {`Minutos: ${data[0].statistics[0].games.minutes == null ? "----" : data[0].statistics[0].games.minutes}`}
                <br/>
            </p>
            </div>
            <div>
            <h1>GOLES</h1>
            <p>
                {`Total: ${data[0].statistics[0].goals.total == null ? "0" : data[0].statistics[0].goals.total}`}
                <br/>
                {`Concedidos: ${data[0].statistics[0].goals.conceded == null ? "0" : data[0].statistics[0].goals.conceded}`}
                <br/>
                {`Asistidos: ${data[0].statistics[0].goals.assists == null ? "0" : data[0].statistics[0].goals.assists}`}
                <br/>
            </p>
            </div>
            <div>
            <h1>PASES</h1>
            <p>
                {`Total: ${data[0].statistics[0].passes.total == null ? "0" : data[0].statistics[0].passes.total}`}
                <br/>
            </p>
            </div>
            <div>
            <h1>TARJETAS</h1>
            <p>
                {`🟥 ${data[0].statistics[0].cards.red == null ? "0" : data[0].statistics[0].cards.red}`}
                <br/>
                {`🟨 ${data[0].statistics[0].cards.yellow == null ? "0" : data[0].statistics[0].cards.yellow}`}
                <br/>
            </p>
            </div>
        </div>
    )
}

export default CardInfoPlayer;