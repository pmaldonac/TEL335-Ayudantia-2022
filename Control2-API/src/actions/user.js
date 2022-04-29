import Users from '../data/users'
import UUIDV4  from '../utils/uuid'
import {KEY, SECRET} from '../utils/constants'


const users = Users.getUsers()

const giveToken = () =>{
    let usersToken = users.map((element) => {
        var user = []
        user.push(element.id - 1,UUIDV4.getUUIDV4())
        return user
    })
    return usersToken
}


let UsersWithTokens = giveToken()


exports.getToken = (body)=>{
    let obj = {
        id: body.id,
        SECRET: body.SECRET,
        KEY: body.KEY
    }
    if (obj.id >= 1 && obj.id <= 10000){
        if(obj.SECRET === SECRET && obj.KEY === KEY){
            return UsersWithTokens[obj.id]
        }else{
            return undefined
        }
    }else{
        return 0
    } 
}

exports.getInformation = (token) => {  
    
    let getId;

    UsersWithTokens.forEach(element => {
        if(element[1] == token){
            getId = element[0]
        }
    })

    let response = []
    users.forEach(element => {
        if(element.id == getId){
            response.push(element)
        }else{
            return 0
        }
    });
    return response
}