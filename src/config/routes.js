import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../pages/home/Home.vue"),
    name: "Home",
  },

  {
    path: "/login",
    component: () => import("../pages/uc/login"),
    name: "Login",
  },
  {
    path: "/login/success",
    component: () => import("../pages/uc/Success"),
    name: "Success",
  },
  {
    path: "/download",
    component: () => import("../pages/uc/download"),
    name: "Download",
  },
  {
    path: "/exchange",
    component: () => import("../pages/exchange/exchange.vue"),
    name: "exchange",
  },
  {
    path: "/order-history",
    component: () => import("../pages/exchange/components/OrderHistory.vue"),
    name: "order-history",
  },

  {
    path: "/news",
    component: () => import("../pages/news/news"),
    name: "News",
  },
  {
    path: "/news/:news",
    component: () => import("../pages/news/news-detail"),
    name: "NewsDetail",
  },
  {
    path: "/chart",
    component: () => import("../pages/chart/chart"),
    name: "Chart",
  },
  {
    path: "/chart/:pair",
    component: () => import("../pages/chart/chart"),
    name: "ChartPair",
  },
  {
    path: "/notification",
    component: () => import("../pages/cms/notification"),
    name: "Notification",
  },
  {
    path: "/coin-detail",
    component: () => import("../pages/CoinDetail/CoinDetail"),
    name: "coinDetail",
  },
  {
    path: "/market",
    component: () => import("../components/market/market-center"),
    children: [
      {
        path: "",
        component: () => import("../pages/market/all-coins"),
        name: "MarketAllCoin",
      },
      {
        path: "favorite",
        component: () => import("../pages/market/favorite"),
        name: "MarketFavorite",
      },
      {
        path: "all-coins",
        component: () => import("../pages/market/all-coins"),
        name: "MarketAllCoin",
      },
      {
        path: "categories",
        component: () => import("../pages/market/categories"),
        name: "MarketCategories",
      },
      {
        path: "themes",
        component: () => import("../pages/market/themes"),
        name: "MarketThemes",
      },
      {
        path: "heatmap",
        component: () => import("../pages/market/heatmap"),
        name: "MarketHeatmap",
      },
      {
        path: "Gain/Loss",
        component: () => import("../pages/market/gainloss"),
        name: "Gainloss",
      },
      {
        path: "marketupdate",
        component: () => import("../pages/market/marketupdate"),
        name: "marketupdate",
      },
      {
        path: "news",
        component: () => import("../pages/market/news"),
        name: "news",
      },
      {
        path: "category-coin-list",
        component: () => import("../pages/market/coin-list"),
        name: "MarketCategoryCoinList",
      },
      {
        path: "themes-coin-list",
        component: () => import("../pages/market/coin-list"),
        name: "MarketThemesCoinList",
      },
    ],
  },
  {
    path: "/scan",
    component: () => import("../pages/scanner/scanner.vue"),
    name: "ScannerList",
  },
  {
    path: "/pre-test",
    component: () => import("../pages/pre-test/PreTest.vue"),
    name: "PreTest",
  },
  {
    path: "/pre-test/pass",
    component: () => import("../pages/pre-test/PreTestPass.vue"),
    name: "PreTestPass",
  },
  {
    path: "/pre-test/fail",
    component: () => import("../pages/pre-test/PreTestFail.vue"),
    name: "PreTestFail",
  },
  {
    path: "/knowledge-test",
    component: () => import("../pages/pre-test/KnowledgeTest.vue"),
    name: "KnowledgeTest",
  },
  {
    path: "/uc",
    component: () => import("../pages/uc/member-center"),
    children: [
      {
        path: "deposit",
        component: () => import("../pages/wallet/deposit"),
        children: [
          {
            path: "",
            component: () => import("../components/deposit/DepositCash"),
            name: "DepositCashWallet",
          },
          {
            path: "cash",
            component: () => import("../components/deposit/DepositCash"),
            name: "DepositCashWallet",
          },
          {
            path: "coin",
            component: () => import("../components/deposit/DepositCoin"),
            name: "DepositCoinWallet",
          },
        ],
      },
      {
        path: "withdraw",
        component: () => import("../pages/wallet/withdraw"),
        children: [
          {
            path: "",
            component: () => import("../components/withdraw/WithdrawCash"),
            name: "WithdrawCashWallet",
          },
          {
            path: "cash",
            component: () => import("../components/withdraw/WithdrawCash"),
            name: "WithdrawCashWallet",
          },
          {
            path: "coin",
            component: () => import("../components/withdraw/WithdrawCoin"),
            name: "WithdrawCoinWallet",
          },
        ],
      },
      {
        path: "auto-mode",
        component: () => import("../pages/portfolio/auto-mode"),
        name: "AutoMode",
      },
      {
        path: "my-portfolio",
        component: () => import("../pages/portfolio/my-portfolio"),
        name: "MyPortfolio",
        children: [
          {
            path: "",
            component: () => import("../pages/portfolio/MyPortfolio/mycoins"),
            name: "MyCoins",
          },
          {
            path: "Coinheatmap",
            component: () =>
              import("../pages/portfolio/MyPortfolio/coinheatmap"),
            name: "CoinHeatmap",
          },
        ],
      },
      {
        path: "order-history",
        component: () => import("../pages/portfolio/order-history"),
        name: "OrderHistory",
      },
      {
        path: "history",
        component: () => import("../pages/portfolio/history"),
        name: "history",
        children: [
          {
            path: "",
            component: () => import("../pages/portfolio/History/ByDetail"),
            name: "ByDetail",
          },
          {
            path: "ByDate",
            component: () => import("../pages/portfolio/History/ByDate"),
            name: "ByDate",
          },
          {
            path: "ByCoin",
            component: () => import("../pages/portfolio/History/ByCoin"),
            name: "ByCoin",
          },
        ],
      },
      {
        path: "deposit-withdraw-report",
        component: () => import("../pages/portfolio/deposit-withdraw-report"),
        name: "DepositWithdrawReport",
      },
    ],
  },

  {
    path: "/deposit/cash",
    component: () => import("../pages/deposit-withdraw/deposit/Cash.vue"),
    name: "DepositeCash",
  },
  {
    path: "/deposit/coin",
    component: () => import("../pages/deposit-withdraw/deposit/Coin.vue"),
    name: "DepositeCoin",
  },
  {
    path: "/withdraw/cash",
    component: () => import("../pages/deposit-withdraw/withdraw/Cash.vue"),
    name: "WithdrawCash",
  },
  {
    path: "/withdraw/coin",
    component: () => import("../pages/deposit-withdraw/withdraw/Coin.vue"),
    name: "WithdrawCoin",
  },
  {
    path: "/withdraw/main_account",
    component: () =>
      import("../pages/deposit-withdraw/withdraw/MainAccount.vue"),
    name: "WithdrawCoin",
  },

  {
    path: "/wallet",
    component: () => import("../pages/wallet/deposit"),

    children: [
      {
        path: "DepositCash",
        component: () => import("../components/deposit/DepositCash"),
        name: "DepositCashWallet",
      },
      {
        path: "DepositCoin",
        component: () => import("../components/deposit/DepositCoin"),
        name: "DepositCoinWallet",
      },
    ],
  },
  {
    path: "/ProfileSetting",
    component: () => import("../pages/ProfileSetting/ProfileSetting"),
    children: [
      {
        path: "",
        component: () => import("../pages/ProfileSetting/PersonalInformation"),
        name: "PersonalInformation",
      },
      {
        path: "BankAccountSuccessful",
        component: () =>
          import("../pages/ProfileSetting/BankAccountSuccessful"),
        name: "BankAccountSuccessful",
      },
      {
        path: "PinPassword",
        component: () => import("../pages/ProfileSetting/PinPassword"),
        name: "PinPassword",
      },
      {
        path: "TouchFaceID",
        component: () => import("../pages/ProfileSetting/TouchFaceID"),
        name: "TouchFaceID",
      },
      {
        path: "RequestIncrease",
        component: () => import("../pages/ProfileSetting/RequestIncrease"),
        name: "RequestIncrease",
      },
      {
        path: "DetermineCost",
        component: () => import("../pages/ProfileSetting/DetermineCost"),
        name: "DetermineCost",
      },
      {
        path: "ReceivingInformation",
        component: () => import("../pages/ProfileSetting/ReceivingInformation"),
        name: "ReceivingInformation",
      },
      {
        path: "LoginHistory",
        component: () => import("../pages/ProfileSetting/LoginHistory"),
        name: "LoginHistory",
      },
      {
        path: "SetNotifications",
        component: () => import("../pages/ProfileSetting/SetNotifications"),
        name: "SetNotifications",
      },
      {
        path: "AboutUs",
        component: () => import("../pages/ProfileSetting/AboutUs"),
        name: "AboutUs",
      },
      {
        path: "ContactUs",
        component: () => import("../pages/ProfileSetting/ContactUs"),
        name: "ContactUs",
      },
      {
        path: "LogOut",
        component: () => import("../pages/ProfileSetting/LogOut"),
        name: "LogOut",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
