const companiesData = require('../../data/spaceCompanies.json')

exports.getCompanies = () =>{
    const company = []
    companiesData.companies.forEach((element)=> {
        obj = {}
        obj.companyName = element.company.companyName
        obj.companyLocation = element.company.companyLocation
        obj.backgroundImage = element.company.backgroundImage
        obj.about = element.company.about
        obj.logoURL = element.company.logoURL
        obj.phone = element.company.phone
        obj.email = element.company.email
        company.push(obj)
    })
    return company
}


exports.searchByNameOrLocation = (search) => {
    const object = {
        searchCompany : search.search
    }
    let response = []
    let company = this.getCompanies()

    company.forEach((element) => {
        if(element.companyName == object.searchCompany || element.companyLocation == object.searchCompany){
            response.push(element)
        }
    })
    return response
}