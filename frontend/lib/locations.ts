export interface Player {
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  rank: number;
  previousRank: number;
  clan?: {
    tag: "string";
    name: number;
    badgeId: number;
  };
  arena: {
    id: number;
    name: string;
  };
}

export interface CocPlayer {
  tag: string;
  name: string;
  expLevel: 229;
  trophies: 6681;
  attackWins: 180;
  defenseWins: 2;
  rank: 1;
  previousRank: 1;
  clan: {
    tag: string;
    name: string;
    badgeUrls: {
      small: string;
      large: string;
      medium: string;
    };
  };
  league: {
    id: 29000022;
    name: string;
    iconUrls: {
      small: string;
      tiny: string;
      medium: string;
    };
  };
}

export interface Location {
  id: number;
  name: string;
  countryCode: string;
}

export interface LocationBS {
  name: string;
  countryCode: string;
}

export const locationsBs: LocationBS[] = [
  { name: "Afghanistan", countryCode: "AF" },
  { name: "Åland Islands", countryCode: "AX" },
  { name: "Albania", countryCode: "AL" },
  { name: "Algeria", countryCode: "DZ" },
  { name: "American Samoa", countryCode: "AS" },
  { name: "Andorra", countryCode: "AD" },
  { name: "Angola", countryCode: "AO" },
  { name: "Anguilla", countryCode: "AI" },
  { name: "Antarctica", countryCode: "AQ" },
  {
    name: "Antigua and Barbuda",

    countryCode: "AG",
  },
  { name: "Argentina", countryCode: "AR" },
  { name: "Armenia", countryCode: "AM" },
  { name: "Aruba", countryCode: "AW" },
  {
    name: "Ascension Island",

    countryCode: "AC",
  },
  { name: "Australia", countryCode: "AU" },
  { name: "Austria", countryCode: "AT" },
  { name: "Azerbaijan", countryCode: "AZ" },
  { name: "Bahamas", countryCode: "BS" },
  { name: "Bahrain", countryCode: "BH" },
  { name: "Bangladesh", countryCode: "BD" },
  { name: "Barbados", countryCode: "BB" },
  { name: "Belarus", countryCode: "BY" },
  { name: "Belgium", countryCode: "BE" },
  { name: "Belize", countryCode: "BZ" },
  { name: "Benin", countryCode: "BJ" },
  { name: "Bermuda", countryCode: "BM" },
  { name: "Bhutan", countryCode: "BT" },
  { name: "Bolivia", countryCode: "BO" },
  {
    name: "Bosnia and Herzegovina",

    countryCode: "BA",
  },
  { name: "Botswana", countryCode: "BW" },
  { name: "Bouvet Island", countryCode: "BV" },
  { name: "Brazil", countryCode: "BR" },
  {
    name: "British Indian Ocean Territory",

    countryCode: "IO",
  },
  {
    name: "British Virgin Islands",

    countryCode: "VG",
  },
  { name: "Brunei", countryCode: "BN" },
  { name: "Bulgaria", countryCode: "BG" },
  { name: "Burkina Faso", countryCode: "BF" },
  { name: "Burundi", countryCode: "BI" },
  { name: "Cambodia", countryCode: "KH" },
  { name: "Cameroon", countryCode: "CM" },
  { name: "Canada", countryCode: "CA" },
  { name: "Canary Islands", countryCode: "IC" },
  { name: "Cape Verde", countryCode: "CV" },
  {
    name: "Caribbean Netherlands",

    countryCode: "BQ",
  },
  { name: "Cayman Islands", countryCode: "KY" },
  {
    name: "Central African Republic",

    countryCode: "CF",
  },
  {
    name: "Ceuta and Melilla",

    countryCode: "EA",
  },
  { name: "Chad", countryCode: "TD" },
  { name: "Chile", countryCode: "CL" },
  { name: "China", countryCode: "CN" },
  {
    name: "Christmas Island",

    countryCode: "CX",
  },
  {
    name: "Cocos (Keeling) Islands",

    countryCode: "CC",
  },
  { name: "Colombia", countryCode: "CO" },
  { name: "Comoros", countryCode: "KM" },
  { name: "Congo (DRC)", countryCode: "CG" },
  {
    name: "Congo (Republic)",

    countryCode: "CD",
  },
  { name: "Cook Islands", countryCode: "CK" },
  { name: "Costa Rica", countryCode: "CR" },
  { name: "Côte d’Ivoire", countryCode: "CI" },
  { name: "Croatia", countryCode: "HR" },
  { name: "Cuba", countryCode: "CU" },
  { name: "Curaçao", countryCode: "CW" },
  { name: "Cyprus", countryCode: "CY" },
  { name: "Czech Republic", countryCode: "CZ" },
  { name: "Denmark", countryCode: "DK" },
  { name: "Diego Garcia", countryCode: "DG" },
  { name: "Djibouti", countryCode: "DJ" },
  { name: "Dominica", countryCode: "DM" },
  {
    name: "Dominican Republic",

    countryCode: "DO",
  },
  { name: "Ecuador", countryCode: "EC" },
  { name: "Egypt", countryCode: "EG" },
  { name: "El Salvador", countryCode: "SV" },
  {
    name: "Equatorial Guinea",

    countryCode: "GQ",
  },
  { name: "Eritrea", countryCode: "ER" },
  { name: "Estonia", countryCode: "EE" },
  { name: "Ethiopia", countryCode: "ET" },
  {
    name: "Falkland Islands",

    countryCode: "FK",
  },
  { name: "Faroe Islands", countryCode: "FO" },
  { name: "Fiji", countryCode: "FJ" },
  { name: "Finland", countryCode: "FI" },
  { name: "France", countryCode: "FR" },
  { name: "French Guiana", countryCode: "GF" },
  {
    name: "French Polynesia",

    countryCode: "PF",
  },
  {
    name: "French Southern Territories",

    countryCode: "TF",
  },
  { name: "Gabon", countryCode: "GA" },
  { name: "Gambia", countryCode: "GM" },
  { name: "Georgia", countryCode: "GE" },
  { name: "Germany", countryCode: "DE" },
  { name: "Ghana", countryCode: "GH" },
  { name: "Gibraltar", countryCode: "GI" },
  { name: "Greece", countryCode: "GR" },
  { name: "Greenland", countryCode: "GL" },
  { name: "Grenada", countryCode: "GD" },
  { name: "Guadeloupe", countryCode: "GP" },
  { name: "Guam", countryCode: "GU" },
  { name: "Guatemala", countryCode: "GT" },
  { name: "Guernsey", countryCode: "GG" },
  { name: "Guinea", countryCode: "GN" },
  { name: "Guinea-Bissau", countryCode: "GW" },
  { name: "Guyana", countryCode: "GY" },
  { name: "Haiti", countryCode: "HT" },
  {
    name: "Heard & McDonald Islands",

    countryCode: "HM",
  },
  { name: "Honduras", countryCode: "HN" },
  { name: "Hong Kong", countryCode: "HK" },
  { name: "Hungary", countryCode: "HU" },
  { name: "Iceland", countryCode: "IS" },
  { name: "India", countryCode: "IN" },
  { name: "Indonesia", countryCode: "ID" },
  { name: "Iran", countryCode: "IR" },
  { name: "Iraq", countryCode: "IQ" },
  { name: "Ireland", countryCode: "IE" },
  { name: "Isle of Man", countryCode: "IM" },
  { name: "Israel", countryCode: "IL" },
  { name: "Italy", countryCode: "IT" },
  { name: "Jamaica", countryCode: "JM" },
  { name: "Japan", countryCode: "JP" },
  { name: "Jersey", countryCode: "JE" },
  { name: "Jordan", countryCode: "JO" },
  { name: "Kazakhstan", countryCode: "KZ" },
  { name: "Kenya", countryCode: "KE" },
  { name: "Kiribati", countryCode: "KI" },
  { name: "Kosovo", countryCode: "XK" },
  { name: "Kuwait", countryCode: "KW" },
  { name: "Kyrgyzstan", countryCode: "KG" },
  { name: "Laos", countryCode: "LA" },
  { name: "Latvia", countryCode: "LV" },
  { name: "Lebanon", countryCode: "LB" },
  { name: "Lesotho", countryCode: "LS" },
  { name: "Liberia", countryCode: "LR" },
  { name: "Libya", countryCode: "LY" },
  { name: "Liechtenstein", countryCode: "LI" },
  { name: "Lithuania", countryCode: "LT" },
  { name: "Luxembourg", countryCode: "LU" },
  { name: "Macau", countryCode: "MO" },
  {
    name: "Macedonia (FYROM)",

    countryCode: "MK",
  },
  { name: "Madagascar", countryCode: "MG" },
  { name: "Malawi", countryCode: "MW" },
  { name: "Malaysia", countryCode: "MY" },
  { name: "Maldives", countryCode: "MV" },
  { name: "Mali", countryCode: "ML" },
  { name: "Malta", countryCode: "MT" },
  {
    name: "Marshall Islands",

    countryCode: "MH",
  },
  { name: "Martinique", countryCode: "MQ" },
  { name: "Mauritania", countryCode: "MR" },
  { name: "Mauritius", countryCode: "MU" },
  { name: "Mayotte", countryCode: "YT" },
  { name: "Mexico", countryCode: "MX" },
  { name: "Micronesia", countryCode: "FM" },
  { name: "Moldova", countryCode: "MD" },
  { name: "Monaco", countryCode: "MC" },
  { name: "Mongolia", countryCode: "MN" },
  { name: "Montenegro", countryCode: "ME" },
  { name: "Montserrat", countryCode: "MS" },
  { name: "Morocco", countryCode: "MA" },
  { name: "Mozambique", countryCode: "MZ" },
  { name: "Myanmar (Burma)", countryCode: "MM" },
  { name: "Namibia", countryCode: "NA" },
  { name: "Nauru", countryCode: "NR" },
  { name: "Nepal", countryCode: "NP" },
  { name: "Netherlands", countryCode: "NL" },
  { name: "New Caledonia", countryCode: "NC" },
  { name: "New Zealand", countryCode: "NZ" },
  { name: "Nicaragua", countryCode: "NI" },
  { name: "Niger", countryCode: "NE" },
  { name: "Nigeria", countryCode: "NG" },
  { name: "Niue", countryCode: "NU" },
  { name: "Norfolk Island", countryCode: "NF" },
  { name: "North Korea", countryCode: "KP" },
  {
    name: "Northern Mariana Islands",

    countryCode: "MP",
  },
  { name: "Norway", countryCode: "NO" },
  { name: "Oman", countryCode: "OM" },
  { name: "Pakistan", countryCode: "PK" },
  { name: "Palau", countryCode: "PW" },
  { name: "Palestine", countryCode: "PS" },
  { name: "Panama", countryCode: "PA" },
  {
    name: "Papua New Guinea",

    countryCode: "PG",
  },
  { name: "Paraguay", countryCode: "PY" },
  { name: "Peru", countryCode: "PE" },
  { name: "Philippines", countryCode: "PH" },
  {
    name: "Pitcairn Islands",

    countryCode: "PN",
  },
  { name: "Poland", countryCode: "PL" },
  { name: "Portugal", countryCode: "PT" },
  { name: "Puerto Rico", countryCode: "PR" },
  { name: "Qatar", countryCode: "QA" },
  { name: "Réunion", countryCode: "RE" },
  { name: "Romania", countryCode: "RO" },
  { name: "Russia", countryCode: "RU" },
  { name: "Rwanda", countryCode: "RW" },
  {
    name: "Saint Barthélemy",

    countryCode: "BL",
  },
  { name: "Saint Helena", countryCode: "SH" },
  {
    name: "Saint Kitts and Nevis",

    countryCode: "KN",
  },
  { name: "Saint Lucia", countryCode: "LC" },
  { name: "Saint Martin", countryCode: "MF" },
  {
    name: "Saint Pierre and Miquelon",

    countryCode: "PM",
  },
  { name: "Samoa", countryCode: "WS" },
  { name: "San Marino", countryCode: "SM" },
  {
    name: "São Tomé and Príncipe",

    countryCode: "ST",
  },
  { name: "Saudi Arabia", countryCode: "SA" },
  { name: "Senegal", countryCode: "SN" },
  { name: "Serbia", countryCode: "RS" },
  { name: "Seychelles", countryCode: "SC" },
  { name: "Sierra Leone", countryCode: "SL" },
  { name: "Singapore", countryCode: "SG" },
  { name: "Sint Maarten", countryCode: "SX" },
  { name: "Slovakia", countryCode: "SK" },
  { name: "Slovenia", countryCode: "SI" },
  { name: "Solomon Islands", countryCode: "SB" },
  { name: "Somalia", countryCode: "SO" },
  { name: "South Africa", countryCode: "ZA" },
  { name: "South Korea", countryCode: "KR" },
  { name: "South Sudan", countryCode: "SS" },
  { name: "Spain", countryCode: "ES" },
  { name: "Sri Lanka", countryCode: "LK" },
  {
    name: "St. Vincent & Grenadines",

    countryCode: "VC",
  },
  { name: "Sudan", countryCode: "SD" },
  { name: "Suriname", countryCode: "SR" },
  {
    name: "Svalbard and Jan Mayen",

    countryCode: "SJ",
  },
  { name: "Swaziland", countryCode: "SZ" },
  { name: "Sweden", countryCode: "SE" },
  { name: "Switzerland", countryCode: "CH" },
  { name: "Syria", countryCode: "SY" },
  { name: "Taiwan", countryCode: "TW" },
  { name: "Tajikistan", countryCode: "TJ" },
  { name: "Tanzania", countryCode: "TZ" },
  { name: "Thailand", countryCode: "TH" },
  { name: "Timor-Leste", countryCode: "TL" },
  { name: "Togo", countryCode: "TG" },
  { name: "Tokelau", countryCode: "TK" },
  { name: "Tonga", countryCode: "TO" },
  {
    name: "Trinidad and Tobago",

    countryCode: "TT",
  },
  {
    name: "Tristan da Cunha",

    countryCode: "TA",
  },
  { name: "Tunisia", countryCode: "TN" },
  { name: "Turkey", countryCode: "TR" },
  { name: "Turkmenistan", countryCode: "TM" },
  {
    name: "Turks and Caicos Islands",

    countryCode: "TC",
  },
  { name: "Tuvalu", countryCode: "TV" },
  {
    name: "U.S. Outlying Islands",

    countryCode: "UM",
  },
  {
    name: "U.S. Virgin Islands",

    countryCode: "VI",
  },
  { name: "Uganda", countryCode: "UG" },
  { name: "Ukraine", countryCode: "UA" },
  {
    name: "United Arab Emirates",

    countryCode: "AE",
  },
  { name: "United Kingdom", countryCode: "GB" },
  { name: "United States", countryCode: "US" },
  { name: "Uruguay", countryCode: "UY" },
  { name: "Uzbekistan", countryCode: "UZ" },
  { name: "Vanuatu", countryCode: "VU" },
  { name: "Vatican City", countryCode: "VA" },
  { name: "Venezuela", countryCode: "VE" },
  { name: "Vietnam", countryCode: "VN" },
  {
    name: "Wallis and Futuna",

    countryCode: "WF",
  },
  { name: "Western Sahara", countryCode: "EH" },
  { name: "Yemen", countryCode: "YE" },
  { name: "Zambia", countryCode: "ZM" },
  { name: "Zimbabwe", countryCode: "ZW" },
];

export const locationsCoc: Location[] = [
  { id: 32000007, name: "Afghanistan", countryCode: "AF" },
  { id: 32000008, name: "Åland Islands", countryCode: "AX" },
  { id: 32000009, name: "Albania", countryCode: "AL" },
  { id: 32000010, name: "Algeria", countryCode: "DZ" },
  { id: 32000011, name: "American Samoa", countryCode: "AS" },
  { id: 32000012, name: "Andorra", countryCode: "AD" },
  { id: 32000013, name: "Angola", countryCode: "AO" },
  { id: 32000014, name: "Anguilla", countryCode: "AI" },
  { id: 32000015, name: "Antarctica", countryCode: "AQ" },
  {
    id: 32000016,
    name: "Antigua and Barbuda",

    countryCode: "AG",
  },
  { id: 32000017, name: "Argentina", countryCode: "AR" },
  { id: 32000018, name: "Armenia", countryCode: "AM" },
  { id: 32000019, name: "Aruba", countryCode: "AW" },
  {
    id: 32000020,
    name: "Ascension Island",

    countryCode: "AC",
  },
  { id: 32000021, name: "Australia", countryCode: "AU" },
  { id: 32000022, name: "Austria", countryCode: "AT" },
  { id: 32000023, name: "Azerbaijan", countryCode: "AZ" },
  { id: 32000024, name: "Bahamas", countryCode: "BS" },
  { id: 32000025, name: "Bahrain", countryCode: "BH" },
  { id: 32000026, name: "Bangladesh", countryCode: "BD" },
  { id: 32000027, name: "Barbados", countryCode: "BB" },
  { id: 32000028, name: "Belarus", countryCode: "BY" },
  { id: 32000029, name: "Belgium", countryCode: "BE" },
  { id: 32000030, name: "Belize", countryCode: "BZ" },
  { id: 32000031, name: "Benin", countryCode: "BJ" },
  { id: 32000032, name: "Bermuda", countryCode: "BM" },
  { id: 32000033, name: "Bhutan", countryCode: "BT" },
  { id: 32000034, name: "Bolivia", countryCode: "BO" },
  {
    id: 32000035,
    name: "Bosnia and Herzegovina",

    countryCode: "BA",
  },
  { id: 32000036, name: "Botswana", countryCode: "BW" },
  { id: 32000037, name: "Bouvet Island", countryCode: "BV" },
  { id: 32000038, name: "Brazil", countryCode: "BR" },
  {
    id: 32000039,
    name: "British Indian Ocean Territory",

    countryCode: "IO",
  },
  {
    id: 32000040,
    name: "British Virgin Islands",

    countryCode: "VG",
  },
  { id: 32000041, name: "Brunei", countryCode: "BN" },
  { id: 32000042, name: "Bulgaria", countryCode: "BG" },
  { id: 32000043, name: "Burkina Faso", countryCode: "BF" },
  { id: 32000044, name: "Burundi", countryCode: "BI" },
  { id: 32000045, name: "Cambodia", countryCode: "KH" },
  { id: 32000046, name: "Cameroon", countryCode: "CM" },
  { id: 32000047, name: "Canada", countryCode: "CA" },
  { id: 32000048, name: "Canary Islands", countryCode: "IC" },
  { id: 32000049, name: "Cape Verde", countryCode: "CV" },
  {
    id: 32000050,
    name: "Caribbean Netherlands",

    countryCode: "BQ",
  },
  { id: 32000051, name: "Cayman Islands", countryCode: "KY" },
  {
    id: 32000052,
    name: "Central African Republic",

    countryCode: "CF",
  },
  {
    id: 32000053,
    name: "Ceuta and Melilla",

    countryCode: "EA",
  },
  { id: 32000054, name: "Chad", countryCode: "TD" },
  { id: 32000055, name: "Chile", countryCode: "CL" },
  { id: 32000056, name: "China", countryCode: "CN" },
  {
    id: 32000057,
    name: "Christmas Island",

    countryCode: "CX",
  },
  {
    id: 32000058,
    name: "Cocos (Keeling) Islands",

    countryCode: "CC",
  },
  { id: 32000059, name: "Colombia", countryCode: "CO" },
  { id: 32000060, name: "Comoros", countryCode: "KM" },
  { id: 32000061, name: "Congo (DRC)", countryCode: "CG" },
  {
    id: 32000062,
    name: "Congo (Republic)",

    countryCode: "CD",
  },
  { id: 32000063, name: "Cook Islands", countryCode: "CK" },
  { id: 32000064, name: "Costa Rica", countryCode: "CR" },
  { id: 32000065, name: "Côte d’Ivoire", countryCode: "CI" },
  { id: 32000066, name: "Croatia", countryCode: "HR" },
  { id: 32000067, name: "Cuba", countryCode: "CU" },
  { id: 32000068, name: "Curaçao", countryCode: "CW" },
  { id: 32000069, name: "Cyprus", countryCode: "CY" },
  { id: 32000070, name: "Czech Republic", countryCode: "CZ" },
  { id: 32000071, name: "Denmark", countryCode: "DK" },
  { id: 32000072, name: "Diego Garcia", countryCode: "DG" },
  { id: 32000073, name: "Djibouti", countryCode: "DJ" },
  { id: 32000074, name: "Dominica", countryCode: "DM" },
  {
    id: 32000075,
    name: "Dominican Republic",

    countryCode: "DO",
  },
  { id: 32000076, name: "Ecuador", countryCode: "EC" },
  { id: 32000077, name: "Egypt", countryCode: "EG" },
  { id: 32000078, name: "El Salvador", countryCode: "SV" },
  {
    id: 32000079,
    name: "Equatorial Guinea",

    countryCode: "GQ",
  },
  { id: 32000080, name: "Eritrea", countryCode: "ER" },
  { id: 32000081, name: "Estonia", countryCode: "EE" },
  { id: 32000082, name: "Ethiopia", countryCode: "ET" },
  {
    id: 32000083,
    name: "Falkland Islands",

    countryCode: "FK",
  },
  { id: 32000084, name: "Faroe Islands", countryCode: "FO" },
  { id: 32000085, name: "Fiji", countryCode: "FJ" },
  { id: 32000086, name: "Finland", countryCode: "FI" },
  { id: 32000087, name: "France", countryCode: "FR" },
  { id: 32000088, name: "French Guiana", countryCode: "GF" },
  {
    id: 32000089,
    name: "French Polynesia",

    countryCode: "PF",
  },
  {
    id: 32000090,
    name: "French Southern Territories",

    countryCode: "TF",
  },
  { id: 32000091, name: "Gabon", countryCode: "GA" },
  { id: 32000092, name: "Gambia", countryCode: "GM" },
  { id: 32000093, name: "Georgia", countryCode: "GE" },
  { id: 32000094, name: "Germany", countryCode: "DE" },
  { id: 32000095, name: "Ghana", countryCode: "GH" },
  { id: 32000096, name: "Gibraltar", countryCode: "GI" },
  { id: 32000097, name: "Greece", countryCode: "GR" },
  { id: 32000098, name: "Greenland", countryCode: "GL" },
  { id: 32000099, name: "Grenada", countryCode: "GD" },
  { id: 32000100, name: "Guadeloupe", countryCode: "GP" },
  { id: 32000101, name: "Guam", countryCode: "GU" },
  { id: 32000102, name: "Guatemala", countryCode: "GT" },
  { id: 32000103, name: "Guernsey", countryCode: "GG" },
  { id: 32000104, name: "Guinea", countryCode: "GN" },
  { id: 32000105, name: "Guinea-Bissau", countryCode: "GW" },
  { id: 32000106, name: "Guyana", countryCode: "GY" },
  { id: 32000107, name: "Haiti", countryCode: "HT" },
  {
    id: 32000108,
    name: "Heard & McDonald Islands",

    countryCode: "HM",
  },
  { id: 32000109, name: "Honduras", countryCode: "HN" },
  { id: 32000110, name: "Hong Kong", countryCode: "HK" },
  { id: 32000111, name: "Hungary", countryCode: "HU" },
  { id: 32000112, name: "Iceland", countryCode: "IS" },
  { id: 32000113, name: "India", countryCode: "IN" },
  { id: 32000114, name: "Indonesia", countryCode: "ID" },
  { id: 32000115, name: "Iran", countryCode: "IR" },
  { id: 32000116, name: "Iraq", countryCode: "IQ" },
  { id: 32000117, name: "Ireland", countryCode: "IE" },
  { id: 32000118, name: "Isle of Man", countryCode: "IM" },
  { id: 32000119, name: "Israel", countryCode: "IL" },
  { id: 32000120, name: "Italy", countryCode: "IT" },
  { id: 32000121, name: "Jamaica", countryCode: "JM" },
  { id: 32000122, name: "Japan", countryCode: "JP" },
  { id: 32000123, name: "Jersey", countryCode: "JE" },
  { id: 32000124, name: "Jordan", countryCode: "JO" },
  { id: 32000125, name: "Kazakhstan", countryCode: "KZ" },
  { id: 32000126, name: "Kenya", countryCode: "KE" },
  { id: 32000127, name: "Kiribati", countryCode: "KI" },
  { id: 32000128, name: "Kosovo", countryCode: "XK" },
  { id: 32000129, name: "Kuwait", countryCode: "KW" },
  { id: 32000130, name: "Kyrgyzstan", countryCode: "KG" },
  { id: 32000131, name: "Laos", countryCode: "LA" },
  { id: 32000132, name: "Latvia", countryCode: "LV" },
  { id: 32000133, name: "Lebanon", countryCode: "LB" },
  { id: 32000134, name: "Lesotho", countryCode: "LS" },
  { id: 32000135, name: "Liberia", countryCode: "LR" },
  { id: 32000136, name: "Libya", countryCode: "LY" },
  { id: 32000137, name: "Liechtenstein", countryCode: "LI" },
  { id: 32000138, name: "Lithuania", countryCode: "LT" },
  { id: 32000139, name: "Luxembourg", countryCode: "LU" },
  { id: 32000140, name: "Macau", countryCode: "MO" },
  {
    id: 32000141,
    name: "Macedonia (FYROM)",

    countryCode: "MK",
  },
  { id: 32000142, name: "Madagascar", countryCode: "MG" },
  { id: 32000143, name: "Malawi", countryCode: "MW" },
  { id: 32000144, name: "Malaysia", countryCode: "MY" },
  { id: 32000145, name: "Maldives", countryCode: "MV" },
  { id: 32000146, name: "Mali", countryCode: "ML" },
  { id: 32000147, name: "Malta", countryCode: "MT" },
  {
    id: 32000148,
    name: "Marshall Islands",

    countryCode: "MH",
  },
  { id: 32000149, name: "Martinique", countryCode: "MQ" },
  { id: 32000150, name: "Mauritania", countryCode: "MR" },
  { id: 32000151, name: "Mauritius", countryCode: "MU" },
  { id: 32000152, name: "Mayotte", countryCode: "YT" },
  { id: 32000153, name: "Mexico", countryCode: "MX" },
  { id: 32000154, name: "Micronesia", countryCode: "FM" },
  { id: 32000155, name: "Moldova", countryCode: "MD" },
  { id: 32000156, name: "Monaco", countryCode: "MC" },
  { id: 32000157, name: "Mongolia", countryCode: "MN" },
  { id: 32000158, name: "Montenegro", countryCode: "ME" },
  { id: 32000159, name: "Montserrat", countryCode: "MS" },
  { id: 32000160, name: "Morocco", countryCode: "MA" },
  { id: 32000161, name: "Mozambique", countryCode: "MZ" },
  { id: 32000162, name: "Myanmar (Burma)", countryCode: "MM" },
  { id: 32000163, name: "Namibia", countryCode: "NA" },
  { id: 32000164, name: "Nauru", countryCode: "NR" },
  { id: 32000165, name: "Nepal", countryCode: "NP" },
  { id: 32000166, name: "Netherlands", countryCode: "NL" },
  { id: 32000167, name: "New Caledonia", countryCode: "NC" },
  { id: 32000168, name: "New Zealand", countryCode: "NZ" },
  { id: 32000169, name: "Nicaragua", countryCode: "NI" },
  { id: 32000170, name: "Niger", countryCode: "NE" },
  { id: 32000171, name: "Nigeria", countryCode: "NG" },
  { id: 32000172, name: "Niue", countryCode: "NU" },
  { id: 32000173, name: "Norfolk Island", countryCode: "NF" },
  { id: 32000174, name: "North Korea", countryCode: "KP" },
  {
    id: 32000175,
    name: "Northern Mariana Islands",

    countryCode: "MP",
  },
  { id: 32000176, name: "Norway", countryCode: "NO" },
  { id: 32000177, name: "Oman", countryCode: "OM" },
  { id: 32000178, name: "Pakistan", countryCode: "PK" },
  { id: 32000179, name: "Palau", countryCode: "PW" },
  { id: 32000180, name: "Palestine", countryCode: "PS" },
  { id: 32000181, name: "Panama", countryCode: "PA" },
  {
    id: 32000182,
    name: "Papua New Guinea",

    countryCode: "PG",
  },
  { id: 32000183, name: "Paraguay", countryCode: "PY" },
  { id: 32000184, name: "Peru", countryCode: "PE" },
  { id: 32000185, name: "Philippines", countryCode: "PH" },
  {
    id: 32000186,
    name: "Pitcairn Islands",

    countryCode: "PN",
  },
  { id: 32000187, name: "Poland", countryCode: "PL" },
  { id: 32000188, name: "Portugal", countryCode: "PT" },
  { id: 32000189, name: "Puerto Rico", countryCode: "PR" },
  { id: 32000190, name: "Qatar", countryCode: "QA" },
  { id: 32000191, name: "Réunion", countryCode: "RE" },
  { id: 32000192, name: "Romania", countryCode: "RO" },
  { id: 32000193, name: "Russia", countryCode: "RU" },
  { id: 32000194, name: "Rwanda", countryCode: "RW" },
  {
    id: 32000195,
    name: "Saint Barthélemy",

    countryCode: "BL",
  },
  { id: 32000196, name: "Saint Helena", countryCode: "SH" },
  {
    id: 32000197,
    name: "Saint Kitts and Nevis",

    countryCode: "KN",
  },
  { id: 32000198, name: "Saint Lucia", countryCode: "LC" },
  { id: 32000199, name: "Saint Martin", countryCode: "MF" },
  {
    id: 32000200,
    name: "Saint Pierre and Miquelon",

    countryCode: "PM",
  },
  { id: 32000201, name: "Samoa", countryCode: "WS" },
  { id: 32000202, name: "San Marino", countryCode: "SM" },
  {
    id: 32000203,
    name: "São Tomé and Príncipe",

    countryCode: "ST",
  },
  { id: 32000204, name: "Saudi Arabia", countryCode: "SA" },
  { id: 32000205, name: "Senegal", countryCode: "SN" },
  { id: 32000206, name: "Serbia", countryCode: "RS" },
  { id: 32000207, name: "Seychelles", countryCode: "SC" },
  { id: 32000208, name: "Sierra Leone", countryCode: "SL" },
  { id: 32000209, name: "Singapore", countryCode: "SG" },
  { id: 32000210, name: "Sint Maarten", countryCode: "SX" },
  { id: 32000211, name: "Slovakia", countryCode: "SK" },
  { id: 32000212, name: "Slovenia", countryCode: "SI" },
  { id: 32000213, name: "Solomon Islands", countryCode: "SB" },
  { id: 32000214, name: "Somalia", countryCode: "SO" },
  { id: 32000215, name: "South Africa", countryCode: "ZA" },
  { id: 32000216, name: "South Korea", countryCode: "KR" },
  { id: 32000217, name: "South Sudan", countryCode: "SS" },
  { id: 32000218, name: "Spain", countryCode: "ES" },
  { id: 32000219, name: "Sri Lanka", countryCode: "LK" },
  {
    id: 32000220,
    name: "St. Vincent & Grenadines",

    countryCode: "VC",
  },
  { id: 32000221, name: "Sudan", countryCode: "SD" },
  { id: 32000222, name: "Suriname", countryCode: "SR" },
  {
    id: 32000223,
    name: "Svalbard and Jan Mayen",

    countryCode: "SJ",
  },
  { id: 32000224, name: "Swaziland", countryCode: "SZ" },
  { id: 32000225, name: "Sweden", countryCode: "SE" },
  { id: 32000226, name: "Switzerland", countryCode: "CH" },
  { id: 32000227, name: "Syria", countryCode: "SY" },
  { id: 32000228, name: "Taiwan", countryCode: "TW" },
  { id: 32000229, name: "Tajikistan", countryCode: "TJ" },
  { id: 32000230, name: "Tanzania", countryCode: "TZ" },
  { id: 32000231, name: "Thailand", countryCode: "TH" },
  { id: 32000232, name: "Timor-Leste", countryCode: "TL" },
  { id: 32000233, name: "Togo", countryCode: "TG" },
  { id: 32000234, name: "Tokelau", countryCode: "TK" },
  { id: 32000235, name: "Tonga", countryCode: "TO" },
  {
    id: 32000236,
    name: "Trinidad and Tobago",

    countryCode: "TT",
  },
  {
    id: 32000237,
    name: "Tristan da Cunha",

    countryCode: "TA",
  },
  { id: 32000238, name: "Tunisia", countryCode: "TN" },
  { id: 32000239, name: "Turkey", countryCode: "TR" },
  { id: 32000240, name: "Turkmenistan", countryCode: "TM" },
  {
    id: 32000241,
    name: "Turks and Caicos Islands",

    countryCode: "TC",
  },
  { id: 32000242, name: "Tuvalu", countryCode: "TV" },
  {
    id: 32000243,
    name: "U.S. Outlying Islands",

    countryCode: "UM",
  },
  {
    id: 32000244,
    name: "U.S. Virgin Islands",

    countryCode: "VI",
  },
  { id: 32000245, name: "Uganda", countryCode: "UG" },
  { id: 32000246, name: "Ukraine", countryCode: "UA" },
  {
    id: 32000247,
    name: "United Arab Emirates",

    countryCode: "AE",
  },
  { id: 32000248, name: "United Kingdom", countryCode: "GB" },
  { id: 32000249, name: "United States", countryCode: "US" },
  { id: 32000250, name: "Uruguay", countryCode: "UY" },
  { id: 32000251, name: "Uzbekistan", countryCode: "UZ" },
  { id: 32000252, name: "Vanuatu", countryCode: "VU" },
  { id: 32000253, name: "Vatican City", countryCode: "VA" },
  { id: 32000254, name: "Venezuela", countryCode: "VE" },
  { id: 32000255, name: "Vietnam", countryCode: "VN" },
  {
    id: 32000256,
    name: "Wallis and Futuna",

    countryCode: "WF",
  },
  { id: 32000257, name: "Western Sahara", countryCode: "EH" },
  { id: 32000258, name: "Yemen", countryCode: "YE" },
  { id: 32000259, name: "Zambia", countryCode: "ZM" },
  { id: 32000260, name: "Zimbabwe", countryCode: "ZW" },
];

export const locations: Location[] = [
  { id: 57000007, name: "Afghanistan", countryCode: "AF" },
  { id: 57000008, name: "Åland Islands", countryCode: "AX" },
  { id: 57000009, name: "Albania", countryCode: "AL" },
  { id: 57000010, name: "Algeria", countryCode: "DZ" },
  {
    id: 57000011,
    name: "American Samoa",

    countryCode: "AS",
  },
  { id: 57000012, name: "Andorra", countryCode: "AD" },
  { id: 57000013, name: "Angola", countryCode: "AO" },
  { id: 57000014, name: "Anguilla", countryCode: "AI" },
  { id: 57000015, name: "Antarctica", countryCode: "AQ" },
  {
    id: 57000016,
    name: "Antigua and Barbuda",

    countryCode: "AG",
  },
  { id: 57000017, name: "Argentina", countryCode: "AR" },
  { id: 57000018, name: "Armenia", countryCode: "AM" },
  { id: 57000019, name: "Aruba", countryCode: "AW" },
  {
    id: 57000020,
    name: "Ascension Island",

    countryCode: "AC",
  },
  { id: 57000021, name: "Australia", countryCode: "AU" },
  { id: 57000022, name: "Austria", countryCode: "AT" },
  { id: 57000023, name: "Azerbaijan", countryCode: "AZ" },
  { id: 57000024, name: "Bahamas", countryCode: "BS" },
  { id: 57000025, name: "Bahrain", countryCode: "BH" },
  { id: 57000026, name: "Bangladesh", countryCode: "BD" },
  { id: 57000027, name: "Barbados", countryCode: "BB" },
  { id: 57000028, name: "Belarus", countryCode: "BY" },
  { id: 57000029, name: "Belgium", countryCode: "BE" },
  { id: 57000030, name: "Belize", countryCode: "BZ" },
  { id: 57000031, name: "Benin", countryCode: "BJ" },
  { id: 57000032, name: "Bermuda", countryCode: "BM" },
  { id: 57000033, name: "Bhutan", countryCode: "BT" },
  { id: 57000034, name: "Bolivia", countryCode: "BO" },
  {
    id: 57000035,
    name: "Bosnia and Herzegovina",

    countryCode: "BA",
  },
  { id: 57000036, name: "Botswana", countryCode: "BW" },
  { id: 57000037, name: "Bouvet Island", countryCode: "BV" },
  { id: 57000038, name: "Brazil", countryCode: "BR" },
  {
    id: 57000039,
    name: "British Indian Ocean Territory",

    countryCode: "IO",
  },
  {
    id: 57000040,
    name: "British Virgin Islands",

    countryCode: "VG",
  },
  { id: 57000041, name: "Brunei", countryCode: "BN" },
  { id: 57000042, name: "Bulgaria", countryCode: "BG" },
  { id: 57000043, name: "Burkina Faso", countryCode: "BF" },
  { id: 57000044, name: "Burundi", countryCode: "BI" },
  { id: 57000045, name: "Cambodia", countryCode: "KH" },
  { id: 57000046, name: "Cameroon", countryCode: "CM" },
  { id: 57000047, name: "Canada", countryCode: "CA" },
  {
    id: 57000048,
    name: "Canary Islands",

    countryCode: "IC",
  },
  { id: 57000049, name: "Cape Verde", countryCode: "CV" },
  {
    id: 57000050,
    name: "Caribbean Netherlands",

    countryCode: "BQ",
  },
  {
    id: 57000051,
    name: "Cayman Islands",

    countryCode: "KY",
  },
  {
    id: 57000052,
    name: "Central African Republic",

    countryCode: "CF",
  },
  {
    id: 57000053,
    name: "Ceuta and Melilla",

    countryCode: "EA",
  },
  { id: 57000054, name: "Chad", countryCode: "TD" },
  { id: 57000055, name: "Chile", countryCode: "CL" },
  { id: 57000056, name: "China", countryCode: "CN" },
  {
    id: 57000057,
    name: "Christmas Island",

    countryCode: "CX",
  },
  {
    id: 57000058,
    name: "Cocos (Keeling) Islands",

    countryCode: "CC",
  },
  { id: 57000059, name: "Colombia", countryCode: "CO" },
  { id: 57000060, name: "Comoros", countryCode: "KM" },
  { id: 57000061, name: "Congo (DRC)", countryCode: "CG" },
  {
    id: 57000062,
    name: "Congo (Republic)",

    countryCode: "CD",
  },
  { id: 57000063, name: "Cook Islands", countryCode: "CK" },
  { id: 57000064, name: "Costa Rica", countryCode: "CR" },
  { id: 57000065, name: "Côte d’Ivoire", countryCode: "CI" },
  { id: 57000066, name: "Croatia", countryCode: "HR" },
  { id: 57000067, name: "Cuba", countryCode: "CU" },
  { id: 57000068, name: "Curaçao", countryCode: "CW" },
  { id: 57000069, name: "Cyprus", countryCode: "CY" },
  {
    id: 57000070,
    name: "Czech Republic",

    countryCode: "CZ",
  },
  { id: 57000071, name: "Denmark", countryCode: "DK" },
  { id: 57000072, name: "Diego Garcia", countryCode: "DG" },
  { id: 57000073, name: "Djibouti", countryCode: "DJ" },
  { id: 57000074, name: "Dominica", countryCode: "DM" },
  {
    id: 57000075,
    name: "Dominican Republic",

    countryCode: "DO",
  },
  { id: 57000076, name: "Ecuador", countryCode: "EC" },
  { id: 57000077, name: "Egypt", countryCode: "EG" },
  { id: 57000078, name: "El Salvador", countryCode: "SV" },
  {
    id: 57000079,
    name: "Equatorial Guinea",

    countryCode: "GQ",
  },
  { id: 57000080, name: "Eritrea", countryCode: "ER" },
  { id: 57000081, name: "Estonia", countryCode: "EE" },
  { id: 57000082, name: "Ethiopia", countryCode: "ET" },
  {
    id: 57000083,
    name: "Falkland Islands",

    countryCode: "FK",
  },
  { id: 57000084, name: "Faroe Islands", countryCode: "FO" },
  { id: 57000085, name: "Fiji", countryCode: "FJ" },
  { id: 57000086, name: "Finland", countryCode: "FI" },
  { id: 57000087, name: "France", countryCode: "FR" },
  { id: 57000088, name: "French Guiana", countryCode: "GF" },
  {
    id: 57000089,
    name: "French Polynesia",

    countryCode: "PF",
  },
  {
    id: 57000090,
    name: "French Southern Territories",

    countryCode: "TF",
  },
  { id: 57000091, name: "Gabon", countryCode: "GA" },
  { id: 57000092, name: "Gambia", countryCode: "GM" },
  { id: 57000093, name: "Georgia", countryCode: "GE" },
  { id: 57000094, name: "Germany", countryCode: "DE" },
  { id: 57000095, name: "Ghana", countryCode: "GH" },
  { id: 57000096, name: "Gibraltar", countryCode: "GI" },
  { id: 57000097, name: "Greece", countryCode: "GR" },
  { id: 57000098, name: "Greenland", countryCode: "GL" },
  { id: 57000099, name: "Grenada", countryCode: "GD" },
  { id: 57000100, name: "Guadeloupe", countryCode: "GP" },
  { id: 57000101, name: "Guam", countryCode: "GU" },
  { id: 57000102, name: "Guatemala", countryCode: "GT" },
  { id: 57000103, name: "Guernsey", countryCode: "GG" },
  { id: 57000104, name: "Guinea", countryCode: "GN" },
  { id: 57000105, name: "Guinea-Bissau", countryCode: "GW" },
  { id: 57000106, name: "Guyana", countryCode: "GY" },
  { id: 57000107, name: "Haiti", countryCode: "HT" },
  {
    id: 57000108,
    name: "Heard & McDonald Islands",

    countryCode: "HM",
  },
  { id: 57000109, name: "Honduras", countryCode: "HN" },
  { id: 57000110, name: "Hong Kong", countryCode: "HK" },
  { id: 57000111, name: "Hungary", countryCode: "HU" },
  { id: 57000112, name: "Iceland", countryCode: "IS" },
  { id: 57000113, name: "India", countryCode: "IN" },
  { id: 57000114, name: "Indonesia", countryCode: "ID" },
  { id: 57000115, name: "Iran", countryCode: "IR" },
  { id: 57000116, name: "Iraq", countryCode: "IQ" },
  { id: 57000117, name: "Ireland", countryCode: "IE" },
  { id: 57000118, name: "Isle of Man", countryCode: "IM" },
  { id: 57000119, name: "Israel", countryCode: "IL" },
  { id: 57000120, name: "Italy", countryCode: "IT" },
  { id: 57000121, name: "Jamaica", countryCode: "JM" },
  { id: 57000122, name: "Japan", countryCode: "JP" },
  { id: 57000123, name: "Jersey", countryCode: "JE" },
  { id: 57000124, name: "Jordan", countryCode: "JO" },
  { id: 57000125, name: "Kazakhstan", countryCode: "KZ" },
  { id: 57000126, name: "Kenya", countryCode: "KE" },
  { id: 57000127, name: "Kiribati", countryCode: "KI" },
  { id: 57000128, name: "Kosovo", countryCode: "XK" },
  { id: 57000129, name: "Kuwait", countryCode: "KW" },
  { id: 57000130, name: "Kyrgyzstan", countryCode: "KG" },
  { id: 57000131, name: "Laos", countryCode: "LA" },
  { id: 57000132, name: "Latvia", countryCode: "LV" },
  { id: 57000133, name: "Lebanon", countryCode: "LB" },
  { id: 57000134, name: "Lesotho", countryCode: "LS" },
  { id: 57000135, name: "Liberia", countryCode: "LR" },
  { id: 57000136, name: "Libya", countryCode: "LY" },
  { id: 57000137, name: "Liechtenstein", countryCode: "LI" },
  { id: 57000138, name: "Lithuania", countryCode: "LT" },
  { id: 57000139, name: "Luxembourg", countryCode: "LU" },
  { id: 57000140, name: "Macau", countryCode: "MO" },
  {
    id: 57000141,
    name: "Macedonia (FYROM)",

    countryCode: "MK",
  },
  { id: 57000142, name: "Madagascar", countryCode: "MG" },
  { id: 57000143, name: "Malawi", countryCode: "MW" },
  { id: 57000144, name: "Malaysia", countryCode: "MY" },
  { id: 57000145, name: "Maldives", countryCode: "MV" },
  { id: 57000146, name: "Mali", countryCode: "ML" },
  { id: 57000147, name: "Malta", countryCode: "MT" },
  {
    id: 57000148,
    name: "Marshall Islands",

    countryCode: "MH",
  },
  { id: 57000149, name: "Martinique", countryCode: "MQ" },
  { id: 57000150, name: "Mauritania", countryCode: "MR" },
  { id: 57000151, name: "Mauritius", countryCode: "MU" },
  { id: 57000152, name: "Mayotte", countryCode: "YT" },
  { id: 57000153, name: "Mexico", countryCode: "MX" },
  { id: 57000154, name: "Micronesia", countryCode: "FM" },
  { id: 57000155, name: "Moldova", countryCode: "MD" },
  { id: 57000156, name: "Monaco", countryCode: "MC" },
  { id: 57000157, name: "Mongolia", countryCode: "MN" },
  { id: 57000158, name: "Montenegro", countryCode: "ME" },
  { id: 57000159, name: "Montserrat", countryCode: "MS" },
  { id: 57000160, name: "Morocco", countryCode: "MA" },
  { id: 57000161, name: "Mozambique", countryCode: "MZ" },
  {
    id: 57000162,
    name: "Myanmar (Burma)",

    countryCode: "MM",
  },
  { id: 57000163, name: "Namibia", countryCode: "NA" },
  { id: 57000164, name: "Nauru", countryCode: "NR" },
  { id: 57000165, name: "Nepal", countryCode: "NP" },
  { id: 57000166, name: "Netherlands", countryCode: "NL" },
  { id: 57000167, name: "New Caledonia", countryCode: "NC" },
  { id: 57000168, name: "New Zealand", countryCode: "NZ" },
  { id: 57000169, name: "Nicaragua", countryCode: "NI" },
  { id: 57000170, name: "Niger", countryCode: "NE" },
  { id: 57000171, name: "Nigeria", countryCode: "NG" },
  { id: 57000172, name: "Niue", countryCode: "NU" },
  {
    id: 57000173,
    name: "Norfolk Island",

    countryCode: "NF",
  },
  { id: 57000174, name: "North Korea", countryCode: "KP" },
  {
    id: 57000175,
    name: "Northern Mariana Islands",

    countryCode: "MP",
  },
  { id: 57000176, name: "Norway", countryCode: "NO" },
  { id: 57000177, name: "Oman", countryCode: "OM" },
  { id: 57000178, name: "Pakistan", countryCode: "PK" },
  { id: 57000179, name: "Palau", countryCode: "PW" },
  { id: 57000180, name: "Palestine", countryCode: "PS" },
  { id: 57000181, name: "Panama", countryCode: "PA" },
  {
    id: 57000182,
    name: "Papua New Guinea",

    countryCode: "PG",
  },
  { id: 57000183, name: "Paraguay", countryCode: "PY" },
  { id: 57000184, name: "Peru", countryCode: "PE" },
  { id: 57000185, name: "Philippines", countryCode: "PH" },
  {
    id: 57000186,
    name: "Pitcairn Islands",

    countryCode: "PN",
  },
  { id: 57000187, name: "Poland", countryCode: "PL" },
  { id: 57000188, name: "Portugal", countryCode: "PT" },
  { id: 57000189, name: "Puerto Rico", countryCode: "PR" },
  { id: 57000190, name: "Qatar", countryCode: "QA" },
  { id: 57000191, name: "Réunion", countryCode: "RE" },
  { id: 57000192, name: "Romania", countryCode: "RO" },
  { id: 57000193, name: "Russia", countryCode: "RU" },
  { id: 57000194, name: "Rwanda", countryCode: "RW" },
  {
    id: 57000195,
    name: "Saint Barthélemy",

    countryCode: "BL",
  },
  { id: 57000196, name: "Saint Helena", countryCode: "SH" },
  {
    id: 57000197,
    name: "Saint Kitts and Nevis",

    countryCode: "KN",
  },
  { id: 57000198, name: "Saint Lucia", countryCode: "LC" },
  { id: 57000199, name: "Saint Martin", countryCode: "MF" },
  {
    id: 57000200,
    name: "Saint Pierre and Miquelon",

    countryCode: "PM",
  },
  { id: 57000201, name: "Samoa", countryCode: "WS" },
  { id: 57000202, name: "San Marino", countryCode: "SM" },
  {
    id: 57000203,
    name: "São Tomé and Príncipe",

    countryCode: "ST",
  },
  { id: 57000204, name: "Saudi Arabia", countryCode: "SA" },
  { id: 57000205, name: "Senegal", countryCode: "SN" },
  { id: 57000206, name: "Serbia", countryCode: "RS" },
  { id: 57000207, name: "Seychelles", countryCode: "SC" },
  { id: 57000208, name: "Sierra Leone", countryCode: "SL" },
  { id: 57000209, name: "Singapore", countryCode: "SG" },
  { id: 57000210, name: "Sint Maarten", countryCode: "SX" },
  { id: 57000211, name: "Slovakia", countryCode: "SK" },
  { id: 57000212, name: "Slovenia", countryCode: "SI" },
  {
    id: 57000213,
    name: "Solomon Islands",

    countryCode: "SB",
  },
  { id: 57000214, name: "Somalia", countryCode: "SO" },
  { id: 57000215, name: "South Africa", countryCode: "ZA" },
  { id: 57000216, name: "South Korea", countryCode: "KR" },
  { id: 57000217, name: "South Sudan", countryCode: "SS" },
  { id: 57000218, name: "Spain", countryCode: "ES" },
  { id: 57000219, name: "Sri Lanka", countryCode: "LK" },
  {
    id: 57000220,
    name: "St. Vincent & Grenadines",

    countryCode: "VC",
  },
  { id: 57000221, name: "Sudan", countryCode: "SD" },
  { id: 57000222, name: "Suriname", countryCode: "SR" },
  {
    id: 57000223,
    name: "Svalbard and Jan Mayen",

    countryCode: "SJ",
  },
  { id: 57000224, name: "Swaziland", countryCode: "SZ" },
  { id: 57000225, name: "Sweden", countryCode: "SE" },
  { id: 57000226, name: "Switzerland", countryCode: "CH" },
  { id: 57000227, name: "Syria", countryCode: "SY" },
  { id: 57000228, name: "Taiwan", countryCode: "TW" },
  { id: 57000229, name: "Tajikistan", countryCode: "TJ" },
  { id: 57000230, name: "Tanzania", countryCode: "TZ" },
  { id: 57000231, name: "Thailand", countryCode: "TH" },
  { id: 57000232, name: "Timor-Leste", countryCode: "TL" },
  { id: 57000233, name: "Togo", countryCode: "TG" },
  { id: 57000234, name: "Tokelau", countryCode: "TK" },
  { id: 57000235, name: "Tonga", countryCode: "TO" },
  {
    id: 57000236,
    name: "Trinidad and Tobago",

    countryCode: "TT",
  },
  {
    id: 57000237,
    name: "Tristan da Cunha",

    countryCode: "TA",
  },
  { id: 57000238, name: "Tunisia", countryCode: "TN" },
  { id: 57000239, name: "Turkey", countryCode: "TR" },
  { id: 57000240, name: "Turkmenistan", countryCode: "TM" },
  {
    id: 57000241,
    name: "Turks and Caicos Islands",

    countryCode: "TC",
  },
  { id: 57000242, name: "Tuvalu", countryCode: "TV" },
  {
    id: 57000243,
    name: "U.S. Outlying Islands",

    countryCode: "UM",
  },
  {
    id: 57000244,
    name: "U.S. Virgin Islands",

    countryCode: "VI",
  },
  { id: 57000245, name: "Uganda", countryCode: "UG" },
  { id: 57000246, name: "Ukraine", countryCode: "UA" },
  {
    id: 57000247,
    name: "United Arab Emirates",

    countryCode: "AE",
  },
  {
    id: 57000248,
    name: "United Kingdom",

    countryCode: "GB",
  },
  { id: 57000249, name: "United States", countryCode: "US" },
  { id: 57000250, name: "Uruguay", countryCode: "UY" },
  { id: 57000251, name: "Uzbekistan", countryCode: "UZ" },
  { id: 57000252, name: "Vanuatu", countryCode: "VU" },
  { id: 57000253, name: "Vatican City", countryCode: "VA" },
  { id: 57000254, name: "Venezuela", countryCode: "VE" },
  { id: 57000255, name: "Vietnam", countryCode: "VN" },
  {
    id: 57000256,
    name: "Wallis and Futuna",

    countryCode: "WF",
  },
  {
    id: 57000257,
    name: "Western Sahara",

    countryCode: "EH",
  },
  { id: 57000258, name: "Yemen", countryCode: "YE" },
  { id: 57000259, name: "Zambia", countryCode: "ZM" },
  { id: 57000260, name: "Zimbabwe", countryCode: "ZW" },
];
