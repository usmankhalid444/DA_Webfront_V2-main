var Periodicity = {
    MINUTE : 1,
    HOUR   : 2,
    DAY    : 3,
    WEEK   : 4,
    MONTH  : 5,
    YEAR   : 6
};

function periodicityToString(arg) {
    switch (arg) {
        case Periodicity.MINUTE:
            return AppLocalizer.Dictionary.MINUTE;
        case Periodicity.HOUR:
            return AppLocalizer.Dictionary.HOUR;
        case Periodicity.DAY:
            return AppLocalizer.Dictionary.DAY;
        case Periodicity.WEEK:
            return AppLocalizer.Dictionary.WEEK;
        case Periodicity.MONTH:
            return AppLocalizer.Dictionary.MONTH;
        case Periodicity.YEAR:
            return AppLocalizer.Dictionary.YEAR;
        default:
            return "";
    }
}

function periodicityToShortString(arg) {
    switch (arg) {
        case Periodicity.MINUTE:
            return "";
        case Periodicity.HOUR:
            return "H";
        case Periodicity.DAY:
            return "D";
        case Periodicity.WEEK:
            return "W";
        case Periodicity.MONTH:
            return "M";
        case Periodicity.YEAR:
            return "Y";
        default:
            return "";
    }
}

function chartPeriodicityToAppPeriodicity(arg) {
    switch (arg) {
        case "":
            return Periodicity.MINUTE;
        case "h":
            return Periodicity.HOUR;
        case "d":
            return Periodicity.DAY;
        case "w":
            return Periodicity.WEEK;
        case "m":
            return Periodicity.MONTH;
        case "y":
            return Periodicity.YEAR;
        default:
            return Periodicity.MINUTE;
    }
}