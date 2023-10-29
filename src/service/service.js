
const url = "http://localhost:4000/";

const Service = (query,variables={}) => {
    return fetch(url,{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({query,variables})
    }).then(res => res.json())

}

export default Service;