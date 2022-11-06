var chartTMGlobal = {};
var chartTMCount = 0;

function loadSymbolChartTM(excludeIndex) {
    var arrSymbols = [];
    for (var key in symbols) {
        var symbol = symbols[key];
        if (excludeIndex && symbol.Type == 5) continue;
        arrSymbols.push({
            symbol: symbol.Symbol,
            company: symbol.Company,
            exchange: symbolTypeToString(symbol.Type)
        });
    }
    return arrSymbols;
}

function symbolTypeToString(type) {
    return type == 5 ? "Index" : type == 4 ? "Tfex" : "Equity";
}

function getIdChartTM(tag) {
    //return tag + '_' + (typeof getCookie("username") !== "undefined" ? getCookie("username") : "");
    return tag + '_' + 't001';
}

class PortfolioObject {
    constructor() {
        this.InstrumentSymbol = "";
        this.InstrumentType = "";
        this.AvailableVolume = 0;
        this.ActualVolume = 0;
        this.AvgPrice = 0;
        this.MarketPrice = 0;
        this.AmountCost = 0;
        this.Multiplier = 0;
        this.Unrealized = 0;
        this.PercentUnrealize = 0;
        this.Realize = 0;
    }

    CalculateUnrealize() {
        //Side Buy
        if (Tools.stringIsNullOrEmpty(this.InstrumentType) == false) {
            if (this.InstrumentType == "31") {
                if (this.AvgPrice > 0 && this.ActualVolume > 0 && this.MarketPrice > 0) {
                    this.Unrealized = (this.MarketPrice - this.AvgPrice) * this.ActualVolume * this.Multiplier;
                    this.PercentUnrealize = (this.MarketPrice - this.AvgPrice) * 100 / this.AvgPrice;
                }
                else {
                    this.Unrealized = 0;
                    this.PercentUnrealize = 0;
                }
            }
            //Side Sell
            else if (this.InstrumentType == "32") {
                if (this.AvgPrice > 0 && this.ActualVolume > 0 && this.MarketPrice > 0) {
                    this.Unrealized = (this.AvgPrice - this.MarketPrice) * this.ActualVolume * this.Multiplier;
                    this.PercentUnrealize = (this.AvgPrice - this.MarketPrice) * 100 / this.AvgPrice;
                }
                else {
                    this.Unrealized = 0;
                    this.PercentUnrealize = 0;
                }
            }
        }
        else {
            if (this.AvgPrice > 0 && this.ActualVolume > 0 && this.MarketPrice > 0) {
                this.Unrealized = (this.MarketPrice - this.AvgPrice) * this.ActualVolume;
                this.PercentUnrealize = (this.MarketPrice - this.AvgPrice) * 100 / this.AvgPrice;
            }
            else {
                this.Unrealized = 0;
                this.PercentUnrealize = 0;
            }
        }
    }
}

function createPositionEx() {
    return {
        Account: "",
        Portfolio: new PortfolioObject()
    }
}

function InitializeChartTM(id, symbol) {

    return {
        loadInitializeChart: false,
        Symbol: typeof symbol != "undefined" ? symbols[symbol] : 'PTT',
        Periodicity: Periodicity.DAY,
        Interval: 1,
        BarsCount: 500,
        from: null,
        to: null,
        uid: id,
        subscribeSymbol: null,
        oneclick: null,
        chartContainer: null,//frameChild(id),
        loadOneclick: function () {
            $("#" + this.oneclick.id + ' input[name="Symbol"]').val(this.Symbol.Symbol);
            $("#" + this.oneclick.id + ' .Symbol').text(this.Symbol.Symbol);
            this.oneclick.refreshSubscribe();
        },
        initializeChart: function () {
            //if (enableTrendlineEquity == false) {
            //    if (Global.symbolList.ContainsKey(Symbol) == true && Global.symbolList[Symbol].Type == DataContract.IWCFService.Instrument.Equity) {
            //        VisibleTrendline(false);
            //    }
            //    else {
            //        VisibleTrendline(true);
            //    }
            //}
            this.loadPortfolioExchange();
            this.getHistory();

        },
        getHistory: function () {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            //FIX symbol
            if (!this.Symbol) {
                this.Symbol = symbols['PTT'];
                //for (var key in symbols) {
                //    var symbol = symbols[key];
                //    if (symbol.Symbol == 'PTT') this.Symbol = symbol;
                //}
            }

            var raw = JSON.stringify({
                "ID": "a82738d7-3a7d-4949-8450-283b346064ff",
                "Symbol": this.Symbol.Symbol,
                "Periodicity": periodicityToShortString(this.Periodicity).toLocaleLowerCase(),
                "Interval": this.Interval,
                "BarCount": this.BarsCount
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://27.254.47.6/DataServerAPI/api/ChartHistory", requestOptions)
                .then(response => response.text())
                .then(result => {
                    var data = JSON.parse(result);
                    var aList = [];
                    for (var i = 0; i < data.Bars.length; i++) {
                        var barData = data.Bars[i];
                        barData.TradeDateTimeString = moment(barData.Date).format("YYYY-MM-DD HH:mm:ss");
                        aList.push(barData);
                    }

                    var json = JSON.stringify(aList);
                    this.chartContainer.loadHistoryData(this.Symbol.Symbol, this.Interval, this.Periodicity, json, data.TotalVolume);
                    //this.updateTrendlineObjects();
                    //this.subscribe();

                    //save cache symbol
                    localStorage.setItem(this.uid, this.Symbol.Symbol);
                    //this.loadOneclick();
                })
                .catch(error => console.log('error', error));

     //       dataStore.History.get(function (self) {
     //           return function (data) {
     //               var aList = [];
     //               for (var i = 0; i < data.Bars.length; i++) {
     //                   var barData = data.Bars[i];
     //                   barData.TradeDateTimeString = moment(barData.Date).format("YYYY-MM-DD HH:mm:ss");
     //                   aList.push(barData);
     //               }

     //               var json = JSON.stringify(aList);
     //               self.chartContainer.loadHistoryData(self.Symbol.Symbol, self.Interval, self.Periodicity, json, data.TotalVolume);
     //               self.updateTrendlineObjects();
     //               self.subscribe();

     //               //save cache symbol
     //               localStorage.setItem(self.uid, self.Symbol.Symbol);
					//self.loadOneclick();

     //           }
     //       }(this), this);

            //auto hide loading
            setTimeout(function (self) {
                return function () {
                    self.chartContainer.gChart.hideWaitingBar(true);
                }
            }(this), 5000);

        },
        subscribe: function () {
            if (this.Symbol == null) return;

            if (this.subscribeSymbol == null || (this.subscribeSymbol.Symbol != this.Symbol.Symbol)) {

                if (this.subscribeSymbol != null) {
                    this.unsubscribe();
                }
                this.subscribeSymbol = jQuery.extend(true, {}, this.Symbol);

                this.onQuoteReceivedCallbackFunc = function (self) {
                    return function (quote) {
                        if (typeof quote == "undefined") return;
                        if(self.uid.indexOf("dasboard") > -1){
                            if(currentPage != enumPage.dashboard){
                                return;
                            }
                        }else if(self.uid.indexOf("pageChart") > -1){
                            if(currentPage != enumPage.chart){
                                return;
                            }
                        }
                        //quote.TradeDateTimeString = moment(quote.Date).format("YYYY-MM-DD HH:mm:ss");
                        self.chartContainer.onQuoteReceivedProcess(quote);
                    }
                }(this);

                dataStore.Quotes.subscribe(this.onQuoteReceivedCallbackFunc, this.subscribeSymbol);
            }
        },
        unsubscribe: function () {
            dataStore.Quotes.unsubscribe(this.onQuoteReceivedCallbackFunc, this.subscribeSymbol);
        },
        dispose: function () {
            this.unsubscribe();
        },
        onQuoteReceivedCallbackFunc: null,
        dictTrendLineObj: {},
        _needUpdateTrendline: false,
        positionsEx:[],
        updateTrendlineObjects: function () {
            var update = false;
            var key = "";
            var name = "";

            var keysRemove = Object.keys(this.dictTrendLineObj);

            //Portfolio trendline
            for (var i = 0; i < this.positionsEx.length; i++)
            {
                var pos = this.positionsEx[i];
                if (this.Symbol.Symbol != pos.Portfolio.InstrumentSymbol) continue;
                key = ("ord_{0}_{1}").format(pos.Portfolio.InstrumentSymbol, pos.Portfolio.InstrumentType);
                name = ("#{0} Qty {1}").format(Tools.formatNumber(pos.Portfolio.AvgPrice), Tools.formatNumber(pos.Portfolio.ActualVolume, 0));
                keysRemove.remove(key);
                //new order
                if (!this.dictTrendLineObj[key]) {
                    if (pos.Portfolio.ActualVolume == 0) continue;
                    this.dictTrendLineObj[key] = {
                        Key : key,
                        Qty : pos.Portfolio.ActualVolume,
                        Name : name,
                        Price : parseFloat(pos.Portfolio.AvgPrice),
                        TLOrderType : ObjectOrderType.Market,
                        Account: pos.Account,
                        InstrumentType: parseInt(pos.Portfolio.InstrumentType)
                    };
                    //add trendline
                    update = true;
                    if (pos.Portfolio.InstrumentType == "31" || pos.Portfolio.InstrumentType == "0") this.dictTrendLineObj[key].LineColor = Theme.LineBuy;
                    else this.dictTrendLineObj[key].LineColor = Theme.LineSell;
                    this.chartContainer.addTrendlineOrder(key, name, pos.Portfolio.AvgPrice, this.dictTrendLineObj[key].LineColor, EnumTypeOrder.Portfolio, true, false);
                }
                else {
                    //remove trendline
                    if (pos.Portfolio.ActualVolume == 0) {
                        update = true;
                        this.chartContainer.removeTrendlineOrder(key);
                        delete this.dictTrendLineObj[key];
                    }
                    //update trendline
                    else {
                        if (this.dictTrendLineObj[key].Name != name) update = true;
                        else if (this.dictTrendLineObj[key].Price != pos.Portfolio.AvgPrice) update = true;
                        this.dictTrendLineObj[key].Name = name;
                        this.dictTrendLineObj[key].Qty = pos.Portfolio.ActualVolume;
                        this.dictTrendLineObj[key].Price = pos.Portfolio.AvgPrice;
                        this.chartContainer.updateTrendlineOrder(key, name, this.dictTrendLineObj[key].Price, this.dictTrendLineObj[key].LineColor);
                    }
                }
            }

            //Conditions Trendline
            var conditionOrders = dataStore.ConditionOrders();
            for (var i = 0; i < conditionOrders.length; i++) {
                var order = conditionOrders[i];
                if (this.Symbol.Symbol != order.Symbol.Name || !(order.ExecStatus == StatusCondition.Opened || order.ExecStatus == StatusCondition.Activated)) continue;

                //################  Limit Price ##################################
                key = ("cond_limit_{0}").format(order.ID);
                name = ("#{2} {0} Qty {1}").format(Tools.formatNumber(order.TrendLinePrice), Tools.formatNumber(order.Quantity, 0)
                    , order.ExecStatus == StatusCondition.Opened ? "Waiting" : "Pending");
                keysRemove.remove(key);

                //new order
                if (!this.dictTrendLineObj[key]) {
                    if (!(order.Quantity == 0 || order.TrendLinePrice == 0 || order.ExecStatus == StatusCondition.Activated)) {
                        this.dictTrendLineObj[key] = {
                            Key: key,
                            Qty: order.Quantity,
                            Name: name,
                            Price: order.TrendLinePrice,
                            OrderID: order.ID,
                            TLOrderType: ObjectOrderType.Condition
                        };
                        //add trendline
                        update = true;
                        var oType = EnumTypeOrder.Buy;
                        if (order.Side == OrderSide.LONG || order.Side == OrderSide.BUY) this.dictTrendLineObj[key].LineColor = Theme.LineWaitingBuy;
                        else {
                            this.dictTrendLineObj[key].LineColor = Theme.LineWaitingSell;
                            oType = EnumTypeOrder.Sell;
                        }
                        this.chartContainer.addTrendlineOrder(key, name, order.TrendLinePrice, this.dictTrendLineObj[key].LineColor, oType);
                    }
                }
                else {
                    //remove trendline
                    if (order.Quantity == 0 || order.TrendLinePrice == 0 || order.ExecStatus == StatusCondition.Activated) {
                        update = true;
                        this.chartContainer.removeTrendlineOrder(key);
                        delete this.dictTrendLineObj[key];
                    }
                    //update trendline
                    else {
                        if (this.dictTrendLineObj[key].Name != name) update = true;
                        else if (this.dictTrendLineObj[key].Price != order.TrendLinePrice) update = true;
                        this.dictTrendLineObj[key].Name = name;
                        this.dictTrendLineObj[key].Qty = order.Quantity;
                        this.dictTrendLineObj[key].Price = order.TrendLinePrice;
                        this.chartContainer.updateTrendlineOrder(key, name, this.dictTrendLineObj[key].Price, this.dictTrendLineObj[key].LineColor);
                    }
                }

                //################  StopLoss ##################################
                key = ("cond_sl_{0}").format(order.ID);
                name = ("#{2} {0} Qty {1}").format(Tools.formatNumber(order.StoplossPrice), Tools.formatNumber(order.Quantity, 0)
                    , order.ExecStatus == StatusCondition.Opened ? "Waiting SL" : "SL");
                keysRemove.remove(key);

                //new order
                if (!this.dictTrendLineObj[key]) {
                    if (order.Quantity == 0 || order.StoplossPrice == 0 || !(order.ExecStatus == StatusCondition.Opened || order.ExecStatus == StatusCondition.Activated)) {

                    }
                    else {
                        this.dictTrendLineObj[key] = {
                            Key: key,
                            Qty: order.Quantity,
                            Name: name,
                            Price: order.StoplossPrice,
                            OrderID: order.ID,
                            TLOrderType: ObjectOrderType.Condition
                        };
                        //add trendline
                        update = true;
                        var oColor = Theme.LineWaiting;
                        if (order.ExecStatus == StatusCondition.Activated) oColor = Theme.LineStopLoss;
                        this.dictTrendLineObj[key].LineColor = oColor;
                        this.chartContainer.addTrendlineOrder(key, name, order.StoplossPrice, this.dictTrendLineObj[key].LineColor, EnumTypeOrder.StopLoss);
                    }
                }
                else {
                    //remove trendline
                    if (order.Quantity == 0 || order.StoplossPrice == 0 || !(order.ExecStatus == StatusCondition.Opened || order.ExecStatus == StatusCondition.Activated)) {
                        update = true;
                        this.chartContainer.removeTrendlineOrder(key);
                        delete this.dictTrendLineObj[key];
                    }
                    //update trendline
                    else {
                        var oColor = Theme.LineWaiting;
                        if (order.ExecStatus == StatusCondition.Activated) oColor = Theme.LineStopLoss;
                        if (this.dictTrendLineObj[key].Name != name) update = true;
                        else if (this.dictTrendLineObj[key].LineColor != oColor) update = true;
                        else if (this.dictTrendLineObj[key].Price != order.StoplossPrice) update = true;
                        this.dictTrendLineObj[key].Name = name;
                        this.dictTrendLineObj[key].Qty = order.Quantity;
                        this.dictTrendLineObj[key].Price = order.StoplossPrice;
                        this.dictTrendLineObj[key].LineColor = oColor;
                        this.chartContainer.updateTrendlineOrder(key, name, this.dictTrendLineObj[key].Price, this.dictTrendLineObj[key].LineColor);
                    }
                }

                //################  TakeProfit ##################################
                key = ("cond_tp_{0}").format(order.ID);
                name = ("#{2} {0} Qty {1}").format(Tools.formatNumber(order.TakeprofitPrice), Tools.formatNumber(order.Quantity, 0)
                    , order.ExecStatus == StatusCondition.Opened ? "Waiting TP" : "TP");
                keysRemove.remove(key);

                //new order
                if (!this.dictTrendLineObj[key]) {
                    if (order.Quantity == 0 || order.TakeprofitPrice == 0 || !(order.ExecStatus == StatusCondition.Opened || order.ExecStatus == StatusCondition.Activated)) {

                    }
                    else {
                        this.dictTrendLineObj[key] = {
                            Key: key,
                            Qty: order.Quantity,
                            Name: name,
                            Price: order.TakeprofitPrice,
                            OrderID: order.ID,
                            TLOrderType: ObjectOrderType.Condition
                        };
                        //add trendline
                        update = true;
                        var oColor = Theme.LineWaiting;
                        if (order.ExecStatus == StatusCondition.Activated) oColor = Theme.LineTakeProfit;
                        this.dictTrendLineObj[key].LineColor = oColor;
                        this.chartContainer.addTrendlineOrder(key, name, order.TakeprofitPrice, this.dictTrendLineObj[key].LineColor, EnumTypeOrder.TakeProfit);
                    }
                }
                else {
                    //remove trendline
                    if (order.Quantity == 0 || order.TakeprofitPrice == 0 || !(order.ExecStatus == StatusCondition.Opened || order.ExecStatus == StatusCondition.Activated)) {
                        update = true;
                        this.chartContainer.removeTrendlineOrder(key);
                        delete this.dictTrendLineObj[key];
                    }
                    //update trendline
                    else {
                        var oColor = Theme.LineWaiting;
                        if (order.ExecStatus == StatusCondition.Activated) oColor = Theme.LineTakeProfit;
                        if (this.dictTrendLineObj[key].Name != name) update = true;
                        else if (this.dictTrendLineObj[key].LineColor != oColor) update = true;
                        else if (this.dictTrendLineObj[key].Price != order.TakeprofitPrice) update = true;
                        this.dictTrendLineObj[key].Name = name;
                        this.dictTrendLineObj[key].Qty = order.Quantity;
                        this.dictTrendLineObj[key].Price = order.TakeprofitPrice;
                        this.dictTrendLineObj[key].LineColor = oColor;
                        this.chartContainer.updateTrendlineOrder(key, name, this.dictTrendLineObj[key].Price, this.dictTrendLineObj[key].LineColor);
                    }
                }
            }

            //Open orders
            var orders = dataStore.Orders();
            for (var i = 0; i < orders.length; i++) {
                var order = orders[i];
                if (order.OrderType != OrderType.LIMIT || order.LimitPrice == 0) continue;
                if (this.Symbol.Symbol != order.Symbol.Name) continue;
                var execution = dataStore.getExecutionById(order.ID);
                if (execution == null) continue;

                //################  Limit Price ##################################
                key = ("open_limit_{0}").format(order.ID);
                name = ("#{2} {0} Qty {1}").format(Tools.formatNumber(order.LimitPrice), Tools.formatNumber(order.Quantity, 0)
                    , orderStateToString(execution.Status));
                keysRemove.remove(key);

                //new order
                if (!this.dictTrendLineObj[key]) {
                    if (order.Quantity > 0 &&
                        (execution.Status == OrderState.OPEN || execution.Status == OrderState.ACTIVATED || execution.Status == OrderState.PARTIAL_FILLED)) {
                        this.dictTrendLineObj[key] = {
                            Key: key,
                            Qty: order.Quantity,
                            Name: name,
                            Price: order.LimitPrice,
                            OrderID: order.ID,
                            TLOrderType: ObjectOrderType.OpenOrder
                        };
                        //add trendline
                        update = true;
                        this.dictTrendLineObj[key].LineColor = Theme.LinePending;
                        this.chartContainer.addTrendlineOrder(key, name, order.LimitPrice, this.dictTrendLineObj[key].LineColor, EnumTypeOrder.MarketOrder, false, false);  //enable drag / disable selected line
                    }
                }
                else {
                    //remove trendline
                    if (order.Quantity == 0 || order.LimitPrice == 0 ||
                        (execution.Status != OrderState.OPEN && execution.Status != OrderState.ACTIVATED && execution.Status != OrderState.PARTIAL_FILLED)) {
                        update = true;
                        this.chartContainer.removeTrendlineOrder(key);
                        delete this.dictTrendLineObj[key];
                    }
                    //update trendline
                    else {
                        if (this.dictTrendLineObj[key].Name != name) update = true;
                        else if (this.dictTrendLineObj[key].Price != order.LimitPrice) update = true;
                        this.dictTrendLineObj[key].Name = name;
                        this.dictTrendLineObj[key].Qty = order.Quantity;
                        this.dictTrendLineObj[key].Price = order.LimitPrice;
                        this.chartContainer.updateTrendlineOrder(key, name, this.dictTrendLineObj[key].Price, this.dictTrendLineObj[key].LineColor);
                    }
                }

            }

            for (var i = 0; i < keysRemove.length; i++) {
                var strKey = keysRemove[i];
                update = true;
                this.chartContainer.removeTrendlineOrder(strKey);
                delete this.dictTrendLineObj[strKey];
            }
            if (this._needUpdateTrendline) {
                this._needUpdateTrendline = false;
                update = true;
            }
            if (update) this.chartContainer.updateChartOnly();
        },
        //clearAllConditionOrders: function () {
        //    if (!confirm("This action WILL clear all condition chart orders but will NOT close any existing open positions.")) return;
        //    var IDCancelOrder = [];

        //    for (var strKey in dictTrendLineObj) {
        //        if (dictTrendLineObj[strKey].TLOrderType == ObjectOrderType.Condition) {
        //            if (IDCancelOrder.indexOf(dictTrendLineObj[strKey].OrderID) == -1) IDCancelOrder.push(dictTrendLineObj[strKey].OrderID);
        //        }
        //    }

        //    //ThreadPool.QueueUserWorkItem(obj => {

        //    //    List < string > items = (List<string>)obj;
        //    //    foreach(string strID in items)
        //    //    {
        //    //        var order = _frmMain.OrderExchangeManager.ConditionOrders.FirstOrDefault(o => o.ID == strID);
        //    //        if (order != null) {
        //    //            _frmMain.OrderExchangeManager.SendCancelOrderCondition(order.ID);
        //    //        }
        //    //        Thread.Sleep(10);
        //    //    }

        //    //}, IDCancelOrder);
        //},
        ModifyConditionOrder: function (keyTarget, newprice, typeOrderChart) {
            if (typeof this.dictTrendLineObj[keyTarget] == "undefined") return;
            var order = dataStore.getConditionOrderById(this.dictTrendLineObj[keyTarget].OrderID);
            if (order == null) return;
            this._needUpdateTrendline = true;
            conditional_order_modify(order.ID, newprice, typeOrderChart);
        },
        CancelConditionOrder: function (keyTarget) {
            if (typeof this.dictTrendLineObj[keyTarget] == "undefined") return;
            var order = dataStore.getConditionOrderById(this.dictTrendLineObj[keyTarget].OrderID);
            if (order != null) {
                conditional_order_cancel(order.ID);
            }
        },
        ClearAllConditionsOrder: function () {
            if (!confirm("This action WILL clear all condition chart orders but will NOT close any existing open positions.")) return;
            var ms = 1;
            for (var key in this.dictTrendLineObj) {
                var order = dataStore.getConditionOrderById(this.dictTrendLineObj[key].OrderID);
                if (order != null) {
                    setTimeout(function (orderID) {
                        return function () {
                            conditional_order_cancel(orderID);
                        }
                    }(order.ID), 50 * ms);
                    //conditional_order_cancel(order.ID);
                    ms++;
                }
            }
        },
        ModifyMarketOrder: function (keyTarget, newprice) {            
            if (typeof this.dictTrendLineObj[keyTarget] == "undefined") return;
            var order = dataStore.getOrderById(this.dictTrendLineObj[keyTarget].OrderID);
            if (order == null) return;
            var execution = dataStore.getExecutionById(order.ID);
            if (execution == null) return;
            var account = dataStore.Accounts(order.Account);
            if (account == null) return;

            var isActiveModify = false;
            if (account.AccountType == AccountType.Derivative) {
                isActiveModify = (order.OrderType == OrderType.LIMIT || order.OrderType == OrderType.ATO)
                    && (order.TimeInForce == TIFType.DAY || order.TimeInForce == TIFType.GTC ||
                        order.TimeInForce == TIFType.AUT || order.TimeInForce == TIFType.NONE);
            }
            else {
                isActiveModify = (order.OrderType == OrderType.LIMIT || order.OrderType == OrderType.ATO || order.OrderType == OrderType.ATC || order.OrderType == OrderType.MARKET || order.OrderType == OrderType.MKT || order.OrderType == OrderType.MTL)
                    && (order.TimeInForce == TIFType.DAY || order.TimeInForce == TIFType.GTC ||
                        order.TimeInForce == TIFType.AUT || order.TimeInForce == TIFType.ATO || order.TimeInForce == TIFType.ATC || order.TimeInForce == TIFType.NONE || order.TimeInForce == TIFType.MP);
            }

            var isActiveCancel = execution.Status == OrderState.OPEN || execution.Status == OrderState.PARTIAL_FILLED || execution.Status == OrderState.ACTIVATED || execution.Status == OrderState.FILLED;
            if (isActiveModify && isActiveCancel) {                
                this._needUpdateTrendline = true;
                footer_modifyOrder(order.ID);
            }
        },
        CancelMarketOrder: function (keyTarget) {
            if (typeof this.dictTrendLineObj[keyTarget] == "undefined") return;
            var order = dataStore.getOrderById(this.dictTrendLineObj[keyTarget].OrderID);
            if (order == null) return;
            var execution = dataStore.getExecutionById(order.ID);
            if (execution == null) return;
            var isActiveCancel = execution.Status == OrderState.OPEN || execution.Status == OrderState.PARTIAL_FILLED || execution.Status == OrderState.ACTIVATED || execution.Status == OrderState.FILLED;
            if (isActiveCancel) {
                footer_cancelOrder(order.ID);
            }
        },
		ClosePosition: function (keyTarget) {
            if (typeof this.dictTrendLineObj[keyTarget] == "undefined") return;
            var obj =  this.dictTrendLineObj[keyTarget];
            var symbol = this.Symbol.Symbol;
            var side = obj.InstrumentType;
            var account = obj.Account;
            closePosition(symbol,account,side);
        },
        loadPortfolioExchange: function () {
            this.positionsEx = [];
            //disable  - need data from exchange to create line price in chart 
            var accounts = [];//dataStore.Accounts();
            for (var i = 0; i < accounts.length; i++) {
                var acc = accounts[i];
                if (acc != null) {
                    if (acc.AccountType == AccountType.Derivative && acc.Portfolio != null) {
                        for (var j = 0; j < acc.Portfolio.length; j++) {
                            var port = acc.Portfolio[j];
                            var obj = createPositionEx();
                            obj.Account = acc.Name;
                            obj.Portfolio.InstrumentSymbol = port.InstrumentSymbol;
                            obj.Portfolio.InstrumentType = port.InstrumentType.toString();
                            obj.Portfolio.AvailableVolume = port.AvailableVolume;
                            obj.Portfolio.ActualVolume = port.ActualVolume;
                            obj.Portfolio.AvgPrice = port.AvgPrice;
                            obj.Portfolio.MarketPrice = port.LastSale;
                            obj.Portfolio.AmountCost = port.ActualAmount;
                            obj.Portfolio.Multiplier = port.Multiplier;
                            obj.Portfolio.Unrealized = port.Unrealize;
                            obj.Portfolio.PercentUnrealize = port.PercentUnrealize;
                            obj.Portfolio.Realize = port.Realize;
                            this.positionsEx.push(obj);
                        }
                    }
                    else {
                        if (acc.CreditType == CreditType.CreditBalance && acc.PortfolioEquityCreditBalance != null) {
                            for (var j = 0; j < acc.PortfolioEquityCreditBalance.length; j++) {
                                var port = acc.PortfolioEquityCreditBalance[j];
                                var obj = createPositionEx();
                                obj.Account = acc.Name;
                                obj.Portfolio.InstrumentSymbol = port.Secsymbol;
                                obj.Portfolio.InstrumentType = "0";
                                obj.Portfolio.AvailableVolume = port.AvaiVolume;
                                obj.Portfolio.ActualVolume = port.ActualVolume;
                                obj.Portfolio.AvgPrice = port.AVGPRICE;
                                obj.Portfolio.MarketPrice = port.STARTPRICE;
                                obj.Portfolio.AmountCost = port.AMOUNT;
                                obj.Portfolio.Multiplier = 1;
                                obj.Portfolio.Unrealized = port.Unrealize;
                                obj.Portfolio.PercentUnrealize = port.PercentUnrealize;
                                obj.Portfolio.Realize = port.TodayRealize;
                                this.positionsEx.push(obj);
                            }
                        }
                        else if (acc.PortfolioEquity != null) {
                            for (var j = 0; j < acc.PortfolioEquity.length; j++) {
                                var port = acc.PortfolioEquity[j];
                                var obj = createPositionEx();
                                obj.Account = acc.Name;
                                obj.Portfolio.InstrumentSymbol = port.SecSymbol;
                                obj.Portfolio.InstrumentType = "0";
                                obj.Portfolio.AvailableVolume = port.AvaiVolume;
                                obj.Portfolio.ActualVolume = port.ActualVolume;
                                obj.Portfolio.AvgPrice = port.AvgPrice;
                                obj.Portfolio.MarketPrice = port.StartPrice;
                                obj.Portfolio.AmountCost = port.Amount;
                                obj.Portfolio.Multiplier = 1;
                                obj.Portfolio.Unrealized = port.Unrealize;
                                obj.Portfolio.PercentUnrealize = port.PercentUnrealize;
                                obj.Portfolio.Realize = port.TodayRealize;
                                this.positionsEx.push(obj);


                            }
                        }
                        else {
                            return;
                        }
                    }
                }
            }
        },
        refresh: function () {
            this.chartContainer.gChart.setNeedsUpdate(true);
        },

    };
}

function LoadConditionTrendlineChart() {
    for (var key in chartTMGlobal) {
        chartTMGlobal[key].updateTrendlineObjects();
    }
}

function LoadPositionExchangeChart() {
    for (var key in chartTMGlobal) {
        chartTMGlobal[key].loadPortfolioExchange();
        chartTMGlobal[key].updateTrendlineObjects();
    }
}

function iframeInvokeJS() {

    switch (this.functionName) {
        case "loadSymbols":
            var excludeIndex = this.uid.indexOf("chart_dashboard") != -1;
            var arrSymbols = loadSymbolChartTM(excludeIndex);
            var json = JSON.stringify(arrSymbols);
            if (typeof chartTMGlobal[this.uid] == "undefined") chartTMGlobal[this.uid] = InitializeChartTM(this.uid);

            //frameChild(this.uid).initialChart(json);

            chartTMGlobal[this.uid].chartContainer = frameChild(chartTMGlobal[this.uid].uid);

            //var dashboard_oneClick = new OneClick({
            //    container: "#tm_chart-dashboard"
            //});

            // $(".toggleOneClick").click(function () {
            //    dashboard_oneClick.toggleOneClick();
            //});

            //chartTMGlobal[this.uid].oneclick = dashboard_oneClick;
            chartTMGlobal[this.uid].chartContainer.initialChart(json);

            if (typeof this.value != "undefined" && typeof this.value[0] == "string" && this.value[0] != "") {
                chartTMGlobal[this.uid].Symbol = symbols[this.value[0]];
                chartTMGlobal[this.uid].initializeChart();
            }
            break;
        case "requestInitialData":
            if (chartTMGlobal[this.uid].loadInitializeChart) {
                chartTMGlobal[this.uid].loadInitializeChart = false;
                chartTMGlobal[this.uid].initializeChart();
            }
            break;
        case "getHistory":

            var symbol = this.value[0];

            $(".AccountSymbols").val(symbol);
            
            var periodType = this.value[1];

            if (typeof symbols[symbol] == "undefined") {
                alert("Not found symbol.");
                return;
            }
            var period = this.value[1].toString();
            switch (this.value[2].toString()) {
                case "": period += " Minute"; break;
                case "h": period += " Hour"; break;
                case "d": period = "Day"; break;
                case "w": period = "Week"; break;
                case "m": period = "Month"; break;
                case "y": period = "Year"; break;
                default: period += " Minute"; break;
            }


            //chartTMGlobal[this.uid].Periodicity = Periodicity.Minutely;
            //chartTMGlobal[this.uid].Interval = 1;
            //int _barsCount = 500;
            //DateTime _from;
            //DateTime _to;
            //_to = DateTime.MinValue;
            //_from = DateTime.MinValue;

            chartTMGlobal[this.uid].Symbol = symbols[symbol];

            switch (period) {
                case "1 Minute":
                    chartTMGlobal[this.uid].Periodicity = Periodicity.MINUTE;
                    chartTMGlobal[this.uid].Interval = 1;
                    break;

                case "5 Minute":
                    chartTMGlobal[this.uid].Periodicity = Periodicity.MINUTE;
                    chartTMGlobal[this.uid].Interval = 5;
                    break;

                case "10 Minute":
                    chartTMGlobal[this.uid].Periodicity = Periodicity.MINUTE;
                    chartTMGlobal[this.uid].Interval = 10;
                    break;

                case "15 Minute":
                    chartTMGlobal[this.uid].Periodicity = Periodicity.MINUTE;
                    chartTMGlobal[this.uid].Interval = 15;
                    break;

                case "30 Minute":
                    chartTMGlobal[this.uid].Periodicity = Periodicity.MINUTE;
                    chartTMGlobal[this.uid].Interval = 30;
                    break;

                case "1 Hour":
                    chartTMGlobal[this.uid].Periodicity = Periodicity.HOUR;
                    chartTMGlobal[this.uid].Interval = 1;
                    break;

                case "2 Hour":
                    chartTMGlobal[this.uid].Periodicity = Periodicity.HOUR;
                    chartTMGlobal[this.uid].Interval = 2;
                    break;

                case "4 Hour":
                    chartTMGlobal[this.uid].Periodicity = Periodicity.HOUR;
                    chartTMGlobal[this.uid].Interval = 4;
                    break;

                case "Day":
                case "DAY":
                    chartTMGlobal[this.uid].Periodicity = Periodicity.DAY;
                    chartTMGlobal[this.uid].Interval = 1;
                    break;

                case "Week":
                case "WEEK":
                    chartTMGlobal[this.uid].Periodicity = Periodicity.WEEK;
                    chartTMGlobal[this.uid].Interval = 1;
                    break;

                case "Month":
                case "MONTH":
                    chartTMGlobal[this.uid].Periodicity = Periodicity.MONTH;
                    chartTMGlobal[this.uid].Interval = 1;
                    break;

                case "Year":
                case "YEAR":
                    chartTMGlobal[this.uid].Periodicity = Periodicity.YEAR;
                    chartTMGlobal[this.uid].Interval = 1;
                    break;
            }
            chartTMGlobal[this.uid].getHistory();


            //update bidask
            var bidaskSymbol = $("#dashboard .symbolBox .td-y").html();
            if (symbol != bidaskSymbol) {
                getBidOfferDashboard(symbol);
            }
            break;
        case "callConditionform":
            conditional_showFormChart(this.value[0], this.value[1], this.value[2]);
            break;
        case "clearAllConditions":
            chartTMGlobal[this.uid].ClearAllConditionsOrder();
            break;
        case "oneclick":
            chartTMGlobal[this.uid].oneclick.toggleOneClick();
            break;
        case "modifyConditionOrder":
            chartTMGlobal[this.uid].ModifyConditionOrder(this.value[0]);
            break;
        case "deleteConditionOrder":
            chartTMGlobal[this.uid].CancelConditionOrder(this.value[0]); 
            break;
        case "dragModifyCondition":
            chartTMGlobal[this.uid].ModifyConditionOrder(this.value[0], this.value[1], this.value[2]);
            break;
        case "dragModifyMarketOrder":
            chartTMGlobal[this.uid].ModifyMarketOrder(this.value[0], this.value[1]);
            break;
        case "modifyMarketOrder":
            chartTMGlobal[this.uid].ModifyMarketOrder(this.value[0]);
            break;
        case "deleteMarketOrder":
            chartTMGlobal[this.uid].CancelMarketOrder(this.value[0]);
            break;
        case "closeMarketOrder":
            chartTMGlobal[this.uid].ClosePosition(this.value[0]);
            break;
    }

}


function chartTM_init() {
    //$("#chartTM .btn-ticker-pick").click(function (e) {
    //    e.preventDefault();
    //    if ($(this).attr('id') == "chart-togglebs") return;
    //    $("#chartTM .btn-ticker-pick").removeClass("active");
    //    $(this).addClass("active");
    //    chartTM_addCharts($(this).data('filter'))
    //});

    chartTM_addCharts(1);
}

function chartTM_addCharts(number) {
    if (number == chartTMCount) return;
    chartTMCount = number;
    $("#chartTM .chart_content").html('');
    var lastrow = 0;
    for (var i = 0; i < number; i++) {
        if (i % 2 == 0) {
            if (!$("#chartTM-row" + i).length && !$("#row" + (i - 1)).length) {
                lastrow = i;
                $("#chartTM .chart_content").append('<div class="row m-0" id="chartTM-row' + i + '"></div>');
            }
        }
        $("#chartTM-row" + lastrow).append('<div class="col p-0 fh"><input type="hidden" class="chart-symbol-chart-chart' + i + '"><div id="chartTM-chart' + i + '" class="chart_container fh"></div></div>');
    }
    $("#chartTM .chart_content .row").css("height", (number == 1 ? "100%" : (100 / (number / 2)) + "%"));
    chartTM_initiCharts();

}

var chartTM_buySells = [];
var ChartTM_default = ["SET","SET50","SET100","MAI"];

function chartTM_initiCharts() {
    for (var i = 0; i < chartTM_buySells.length; i++) {
        chartTM_buySells[i].destruct();
    }
    chartTM_buySells = [];
    $("#chartTM .chart_container").each(function (e) {
        chartTM_initChartElement($(this).prop('id'));
    });
}

function chartTM_initChartElement(id) {

    var chartSymbol = localStorage.getItem(getIdChartTM("pageChart_" + id));
    if (chartSymbol == null || chartSymbol == "") {
        var index = parseInt(id.replace("chartTM-chart", ""));
        chartSymbol = ChartTM_default[index];
    }

    //var eleoneClick = new OneClick({
    //    container: "#" + id
    //});

    //chartTM_buySells.push(eleoneClick);

    var iframeChart = initChartTM($$$(id), 'pageChart_' + id, '&symbol=' + chartSymbol);

    if (typeof chartTMGlobal[iframeChart.id] != "undefined") {
        chartTMGlobal[iframeChart.id].dispose();
        delete chartTMGlobal[iframeChart.id];
    }
    chartTMGlobal[iframeChart.id] = InitializeChartTM(iframeChart.id);
    //chartTMGlobal[iframeChart.id].oneclick = chartTM_buySells[chartTM_buySells.length - 1];
}

function toggleOneclickChartTM() {
    var divChart = document.getElementById("chartTM");
    var iframes = divChart.querySelectorAll("iframe")
    for (var i = 0; i < iframes.length; i++) {
        if (typeof chartTMGlobal[iframes[i].id] != "undefined") {
            chartTMGlobal[iframes[i].id].oneclick.toggleOneClick();
        }
    }
}

