import foto from "../assets/gato.jpg"
export const postArray = [

    {
        id: Math.random(),
        author: {
            name: "Luiza Marins",
            avatarUrl: <img src={foto} alt="foto-perfil" />
        },

        content: [
            {
                id: Math.random(),
                //post: "lavar a louça :)"
            }
        ]    
    }
]