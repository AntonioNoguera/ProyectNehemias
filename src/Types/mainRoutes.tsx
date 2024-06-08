import { InfoUser, NewUser } from "./../Pages/User/"; 
import { DefiningSession, PostCodingSession } from "./../Pages/Session/"; 

const mainRoutes = [
    {
        path: "/", 
        page:  InfoUser,
        subPaths: [
            {
                path: "listado", 
                page: InfoUser
            },
            {
                path: "nuevo", 
                page: NewUser
            }, 
        ]
    }, 
    {
        path: "/", 
        page:  InfoUser,
        subPaths: [
            {
                path: "listado", 
                page: DefiningSession
            },
            {
                path: "nuevo", 
                page: PostCodingSession
            }, 
        ]
    }, 
 
]


export default mainRoutes;