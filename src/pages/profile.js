// Importacion para recuperar informacion que se pasa por parametros en la ruta
import { useParams } from "react-router-dom"

export default function Profile() {
    // Desestructurizando el parámetro `name`
    const {name} = useParams();
    return (
        <div>
            {/* Renderizando el parámetro `name` */}
            <p>Profile {name} </p>
        </div>
    );
}