import React from "react";

// Aqui React.memo se encarga de memorizar lo que ingresa
export const Incrementar = React.memo(({ incrementar }) => {

    console.log('Me estoy redibujando')

    return (
        <button onClick={() => incrementar(1)}>+1</button>
    )
}
)
