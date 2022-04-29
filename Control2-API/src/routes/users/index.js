import Token from '../../actions/user'


exports.getToken = (ctx) =>{
    const body = ctx.request.body
    const response = Token.getToken(body)
    if(response == undefined){
        ctx.status = 401
        ctx.body = {
            status: ctx.status,
            message: "No autorizado"
        }
    }else if(response == 0){
        ctx.status = 404
        ctx.body  = {
            status: ctx.status,
            message: "El id que busca no existe"
        }
    }
    else{
        ctx.status = 200
        ctx.body = {
            token: response[1]
        }
    }
    return ctx
}


exports.getData = (ctx) =>{
    const body = ctx.params.token
    const response = Token.getInformation(body)


    if(response == 0){
        ctx.status = 404
        ctx.body = {
            status: ctx.status,
            message: "Token no válido"
        }
    }else{
        ctx.body = response
    }
    return ctx

}