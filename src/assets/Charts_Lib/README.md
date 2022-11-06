## URL chart 
https://www.missionsoftwarethailand.com/StockChartX/index.html?uid=xxxx&user=yyyyy&v=1

uid = uniq id for save/load data(indicator, drawing , color , custom setting) to localstorage reference by this id
user = userid for upload/download template chart from server
v = cache version (if change chart will clear cache)

(if iframe can not call chart via url , can use source library charty in folder "Chart Library Source" call from localhost instead of url)

## example code in folder "example_code"
must to run in browser with disable scurity
for chrome use this command in RUN 
```
chrome.exe --disable-web-security  --user-data-dir=C:\ChromeDev 
```

## overview cominicate between chart library and iframe 
##### side chart pass to parent via iframe
- check function "iframeInvokeJS"
parameter
1. invoke name
2. parameter as array

##### side parent pass to chart via iframe
check variable "chartContainer"

### json formal symbols list
```
[
  {
    "symbol": "BDMS-F",
    "company": "BANGKOK DUSIT MEDICAL SERVICES",
    "exchange": "Equity"
  },
  {
    "symbol": "BDMSH23",
    "company": "BDMS Futures",
    "exchange": "Tfex"
  },
  {
    "symbol": "BDMSM23",
    "company": "BDMS Futures",
    "exchange": "Tfex"
  },
  {
    "symbol": "BDMSU22",
    "company": "BDMS Futures",
    "exchange": "Tfex"
  }
]
```

### json formal histoty data
```
[
    {
      "BuyVolume": 15138600,
      "Close": 40.5,
      "TradeDateTimeString": "2021-06-08 00:00:00",
      "High": 41.5,
      "Low": 40.5,
      "Open": 41.25,
      "SellVolume": 28309600,
      "Value": 0,
      "Volume": 49609300
    },
    {
      "BuyVolume": 16774200,
      "Close": 40.75,
      "TradeDateTimeString": "2021-06-09 00:00:00",
      "High": 41.25,
      "Low": 40.75,
      "Open": 40.75,
      "SellVolume": 11203400,
      "Value": 0,
      "Volume": 36053500
    }
  ]
```

### json formal update quote realtime tick data
```
{
	"Price":49,
	"Side":"B",   // B = Buy , S = Sell
	"Symbol":"BTCUSDT",
	"TotalValue":0,
	"TotalVolume":0,
	"TradeDateTimeString":"2020-04-23 22:07:21",
	"Volume":200
}
```

### Period Enum
| Type  | Description  |
| ------------ | ------------ |
|  1 | MINUTE  |
|  2 |  HOUR |
|  3 | DAY  |
|  4 | WEEK  |
|  5 |  MONTH |
|  6 |  YEAR |

### event interface type
| Platform         | Description                            |
| ---------------- | -------------------------------------- |
| PC (.net c#)     | EO browser library interface           |
| Web              | javascript iframe call parent function |
| Mobile (flutter) | use webview interface                  |


### event from chart to webview component
| event name         | param (array)                                                                                                                                        | TO DO                                                | function require to call js script                                                                       | description                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| loadSymbols        | \-                                                                                                                                                   | get symbol list                                      | "initialChart({json symbol list data})"                                                                  | first event after chart load code complete , chart will auto send this event for require to init symbol list                       |
| requestInitialData | \-                                                                                                                                                   | get history data , get portfolio to display in chart | \- fn set history chart data<br>"loadHistoryData(Symbol, Interval, Periodicity,{ json history data}, 0)" | event after call script js  "initialChart" , after process symbollist from load symbols complete , chart will auto send this event |
| getHistory         | symbol ,<br>peroid(int),<br>period type (string)<br>"" or default = minute<br>"h" = hour<br>"d" = day<br>"w" = week<br>"m" = "month"<br>"y" = "year" | get history data                                     | \- fn set history chart data<br>"loadHistoryData(Symbol, Interval, Periodicity,{ json history data}, 0)" | event at change symbol , time frame in chart                                                                                       |
