export default {
    common: {
        area: '/uc/support/country'
    },
    uc: { //Member Center Interface
        login: '/uc/login',
        register: '/uc/register',
        wallet: '/uc/asset/wallet/',
        captcha: '/uc/start/captcha',
        identification: '/uc/approve/certified/business/status', //Merchant Certification
        apply: '/uc/approve/certified/business/apply', //Merchant Certification Application
        announcement: '/uc/announcement/page', //Announcement list
        paydividends: "/uc/bonus/user/page", //Dividends for holding coins
        mylistrecord: "/uc/mine/detail/", //Transaction Mining Details
        activitylist: "/uc/activity/page-query", // Events List
        memberactivity: "/uc/activity/getmemberrecords", // User Engagement Activities List
        attendActivity: "/uc/activity/attend", // Participate
        mypromotion: "/uc/promotion/mypromotion", // My promotion commission
        toppromotion: "/uc/promotion/toprank", // Promotion partner ranking
        getfreecard: "/uc/promotion/promotioncard/getfreecard", // Get a Free Promotional Card
        exchangecard: "/uc/promotion/promotioncard/exchangecard", // Redeem Promotional Cards
        mycardlist: "/uc/promotion/promotioncard/mycard", // Redeem Promotional Cards
        toppromotionmonth: "/uc/promotion/monthtoprank", // Promotion partner ranking
        toppromotionweek: "/uc/promotion/weektoprank", // Promotion partner ranking
        memberInfo: "/uc/member/my-info", // Get user information
        mypromotionrecord: "/uc/promotion/record", //Get the promotion inviter record
        myInnovationOrderList: "/uc/activity/getmyorders", // List of Participation Orders in the Innovation Experimental Zone
        myInnovationMinings: "/uc/miningorder/my-minings", // Get my miner list
        myInnovationLocked: "/uc/lockedorder/my-locked" // Get my miner list
    },
    market: { //Currency trading market interface
        ws: '/market/market-ws',
        thumb: '/market/symbol-thumb',
        thumbTrend: '/market/symbol-thumb-trend',
        plate: '/market/exchange-plate', //Actively queried market information
        platemini: '/market/exchange-plate-mini', //Get 10 pieces of data
        platefull: '/market/exchange-plate-full', //Get all data
        trade: '/market/latest-trade', //Actively queried real-time transaction information
        symbolInfo: '/market/symbol-info',
        coinInfo: '/market/coin-info',
        indexData: "/market/index_info"
    },
    exchange: { //Token transaction commission submission and query interface
        orderAdd: '/exchange/order/add', //Submit order interface
        current: '/exchange/order/current', //Current delegate interface
        history: '/exchange/order/history', //History delegation interface
        detail: '/exchange/order/detail/', //Detailed order interface
        favorFind: '/exchange/favor/find', //Query optional
        favorAdd: '/exchange/favor/add', //Add optional
        favorDelete: '/exchange/favor/delete', //Delete optional
        orderCancel: '/exchange/order/cancel' //Cancel delegation
    },
    otc: {
        coin: '/otc/coin/all', //Query supported currencies
        advertise: '/otc/advertise/page-by-unit', //Get ads
        createAd: '/uc/ad/create', //Create an ad
        adDetail: '/otc/advertise/detail'
    },
    activity: {
        activity: "/activity/page-query"
    }
}
