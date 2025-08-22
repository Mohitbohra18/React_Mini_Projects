import { useEffect, useState } from "react"


function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${baseCurrency}.json`)

            .then((res) => res.json())
            .then((res) => setData(res[baseCurrency]))
        console.log(data);
    }, [baseCurrency])
    console.log(data);
    return data
}

export default useCurrencyInfo;