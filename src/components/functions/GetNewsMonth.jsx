
const GetNewsMonth = (date) => {

    let month = date.slice(5, 7)

    switch (month) {
        case "01":
        return "Jan"
        case "02":
        return "Feb"
        case "03":
        return "Mar"
        case "04":
        return "Apr"
        case "05":
        return "May"
        case "06":
        return "Jun"
        case "07":
        return "Jul"
        case "08":
        return "Aug"
        case "09":
        return "Sep"
        case "10":
        return "Okt"
        case "11":
        return "Nov"
        case "12":
        return "Dec"
    }
}

export default GetNewsMonth