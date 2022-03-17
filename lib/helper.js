import fetchUtility from "./utlis"

export const fetchAllUser = async () => {
    let getResult = await fetchUtility("https://api.tvmaze.com/search/shows?q=avengers", [])
    return getResult
}

export const fetchShow = async (id) => {
    let getResult = await fetchUtility(`https://api.tvmaze.com/shows/${id}`, [])
    return getResult
}

export const formatDate = (date) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let d = date?.split("-")
    let result = `${d[2]} ${months[parseInt(d[1])-1]}, ${d[0]}`
    return result
}