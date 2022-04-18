const response = require('koa/lib/response')
const companyAction = require('../../actions/Company/companies')

exports.getAllCompanies = (ctx) => {
    ctx.body = companyAction.getCompanies()
    return ctx
}


exports.searchByNameOrLocation = (ctx) => {
    let search = ctx.request.body
    let response = companyAction.searchByNameOrLocation(search)
    if(Object.keys(response).length === 0){
        ctx.body =  {
            status: 200, 
            message : 'No se encontró la compañía buscada'}

    }else{
        ctx.body = {status: 200,
                    Companies: response}
    }
    return ctx
}

