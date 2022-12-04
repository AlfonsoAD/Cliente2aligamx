import React from "react";
import Image from "next/image";

const CardInfoPlayer = ({data}) => {
    console.log(data);
    return(
        <div
        className="bg-white max-w-sm rounded overflow-hidden shadow-lg m-3 w-240"
        >
            {data != null && data.length > 1? 
            <>
            <Image
            src={data.player.photo}
            className="sm:h-8 sm:w-8"
            height="150"
            width="100"
            alt={`Foto de ${data.player.name == null ? "desconocido" : data.player.name}`}
            />
            <div>
            <h1>INFORMACION PERSONAL</h1>
            <p>
                {`Nombre: ${data.player.firstname == null ? "desconocido" : data.player.firstname} ${data.player.lastname == null ? "desconocido" : data.player.lastname}`}
                <br/>
                {`Fecha de Nacimiento: ${data.player.birth.date == null ? "desconocido" : data.player.birth.date}`}
                <br/>
                {`Ciudad: ${data.player.birth.place == null ? "desconocido" : data.player.birth.place}`}
                <br/>
                {`Lesionado: ${data.player.injured == false ? "No" : "Si"}`}
                <br/>
                {data.statistics[0].games.captain == true ? `CAPITAN` : null}
            </p>
            </div>
            <div>
            <h1>ESTADISTICAS</h1>
            <p>
                {`Posicion: ${data.statistics[0].games.position == null ? "desconocido" : data.statistics[0].games.position}`}
                <br/>
                {`Apariciones: ${data.statistics[0].games.appearences == null ? "---" : data.statistics[0].games.appearences}`}
                <br/>
                {`Minutos: ${data.statistics[0].games.minutes == null ? "----" : data.statistics[0].games.minutes}`}
                <br/>
            </p>
            </div>
            <div>
            <h1>GOLES</h1>
            <p>
                {`Total: ${data.statistics[0].goals.total == null ? "0" : data.statistics[0].goals.total}`}
                <br/>
                {`Concedidos: ${data.statistics[0].goals.conceded == null ? "0" : data.statistics[0].goals.conceded}`}
                <br/>
                {`Asistidos: ${data.statistics[0].goals.assists == null ? "0" : data.statistics[0].goals.assists}`}
                <br/>
            </p>
            </div>
            <div>
            <h1>PASES</h1>
            <p>
                {`Total: ${data.statistics[0].passes.total == null ? "0" : data.statistics[0].passes.total}`}
                <br/>
            </p>
            </div>
            <div>
            <h1>TARJETAS</h1>
            <p>
                {`🟥 ${data.statistics[0].cards.red == null ? "0" : data.statistics[0].passes.total}`}
                <br/>
                {`🟨 ${data.statistics[0].cards.yellow == null ? "0" : data.statistics[0].passes.total}`}
                <br/>
            </p>
            </div>
            </>
            : null}
        </div>
    )
}

export default CardInfoPlayer;