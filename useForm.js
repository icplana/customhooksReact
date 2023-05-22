import { useState } from "react"


export const useForm = ( initialForm = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm )
    
    const onResetForm = () => {
        setFormState( initialForm )
    }

    const onInputChange = ({ target }) =>{
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}


// en proyectos con forms complejos podemos usar esto:      https://react-hook-form.com/        sustituira nuestro hook añadiendo funcionalidades
