import { Box, colors, Tab, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { object } from "../testing/test";

interface Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
const data = [
  {
    name: "London",
    local_names: {
      kn: "ಲಂಡನ್",
      es: "Londres",
      ml: "ലണ്ടൻ",
      wo: "Londar",
      mt: "Londra",
      th: "ลอนดอน",
      fo: "London",
      si: "ලන්ඩන්",
      bo: "ལོན་ཊོན།",
      rm: "Londra",
      gl: "Londres",
      ascii: "London",
      hr: "London",
      feature_name: "London",
      su: "London",
      mk: "Лондон",
      kk: "Лондон",
      yi: "לאנדאן",
      lt: "Londonas",
      io: "London",
      ro: "Londra",
      tr: "Londra",
      tk: "London",
      ur: "علاقہ لندن",
      fy: "Londen",
      qu: "London",
      af: "Londen",
      el: "Λονδίνο",
      uk: "Лондон",
      st: "London",
      pl: "Londyn",
      te: "లండన్",
      ne: "लन्डन",
      it: "Londra",
      to: "Lonitoni",
      eu: "Londres",
      ky: "Лондон",
      ha: "Landan",
      sl: "London",
      mr: "लंडन",
      cs: "Londýn",
      de: "London",
      cy: "Llundain",
      ie: "London",
      li: "Londe",
      mg: "Lôndôna",
      oc: "Londres",
      tt: "Лондон",
      mi: "Rānana",
      kl: "London",
      se: "London",
      ka: "ლონდონი",
      gn: "Lóndyre",
      ca: "Londres",
      nn: "London",
      sh: "London",
      gu: "લંડન",
      sw: "London",
      an: "Londres",
      or: "ଲଣ୍ଡନ",
      sm: "Lonetona",
      az: "London",
      ny: "London",
      kw: "Loundres",
      nv: "Tooh Dineʼé Bikin Haalʼá",
      hi: "लंदन",
      da: "London",
      ht: "Lonn",
      sv: "London",
      ff: "London",
      pt: "Londres",
      am: "ለንደን",
      ba: "Лондон",
      ta: "இலண்டன்",
      ug: "لوندۇن",
      mn: "Лондон",
      ko: "런던",
      hy: "Լոնդոն",
      tl: "Londres",
      kv: "Лондон",
      so: "London",
      my: "လန်ဒန်မြို့",
      bm: "London",
      om: "Landan",
      ja: "ロンドン",
      ga: "Londain",
      ig: "London",
      cv: "Лондон",
      bi: "London",
      sd: "لنڊن",
      vo: "London",
      ms: "London",
      fj: "Lodoni",
      wa: "Londe",
      be: "Лондан",
      yo: "Lọndọnu",
      ps: "لندن",
      he: "לונדון",
      km: "ឡុងដ៍",
      zu: "ILondon",
      cu: "Лондонъ",
      id: "London",
      is: "London",
      av: "Лондон",
      sr: "Лондон",
      os: "Лондон",
      bn: "লন্ডন",
      ku: "London",
      sc: "Londra",
      sa: "लन्डन्",
      bs: "London",
      co: "Londra",
      sq: "Londra",
      br: "Londrez",
      ee: "London",
      en: "London",
      hu: "London",
      tw: "London",
      lo: "ລອນດອນ",
      bg: "Лондон",
      fi: "Lontoo",
      et: "London",
      gd: "Lunnainn",
      ru: "Лондон",
      ab: "Лондон",
      eo: "Londono",
      sn: "London",
      uz: "London",
      zh: "伦敦",
      no: "London",
      fr: "Londres",
      nl: "Londen",
      jv: "London",
      lb: "London",
      vi: "Luân Đôn",
      ce: "Лондон",
      lv: "Londona",
      ln: "Lóndɛlɛ",
      ay: "London",
      gv: "Lunnin",
      bh: "लंदन",
      sk: "Londýn",
      na: "London",
      fa: "لندن",
      tg: "Лондон",
      ia: "London",
      ar: "لندن",
      pa: "ਲੰਡਨ",
    },
    lat: 51.5073219,
    lon: -0.1276474,
    country: "GB",
    state: "England",
  },
  {
    name: "City of London",
    local_names: {
      ko: "시티 오브 런던",
      ur: "لندن شہر",
      uk: "Лондонське Сіті",
      he: "הסיטי של לונדון",
      zh: "倫敦市",
      en: "City of London",
      hi: "सिटी ऑफ़ लंदन",
      es: "City de Londres",
      ru: "Сити",
      lt: "Londono Sitis",
      pt: "Cidade de Londres",
      fr: "Cité de Londres",
    },
    lat: 51.5156177,
    lon: -0.0919983,
    country: "GB",
    state: "England",
  },
  {
    name: "London",
    local_names: {
      he: "לונדון",
      ga: "Londain",
      ja: "ロンドン",
      cr: "ᓬᐊᐣᑕᐣ",
      bn: "লন্ডন",
      lt: "Londonas",
      ka: "ლონდონი",
      en: "London",
      be: "Лондан",
      th: "ลอนดอน",
      ru: "Лондон",
      ko: "런던",
      hy: "Լոնտոն",
      fr: "London",
      oj: "Baketigweyaang",
      iu: "ᓚᓐᑕᓐ",
      ar: "لندن",
      yi: "לאנדאן",
      ug: "لوندۇن",
      lv: "Landona",
      fa: "لندن",
      el: "Λόντον",
    },
    lat: 42.9832406,
    lon: -81.243372,
    country: "CA",
    state: "Ontario",
  },
  {
    name: "Chelsea",
    local_names: {
      sh: "Chelsea, London",
      pt: "Chelsea",
      hu: "Chelsea",
      da: "Chelsea",
      no: "Chelsea",
      vi: "Chelsea, Luân Đôn",
      fr: "Chelsea",
      uk: "Челсі",
      hi: "चेल्सी, लंदन",
      id: "Chelsea, London",
      az: "Çelsi",
      sk: "Chelsea",
      el: "Τσέλσι",
      tr: "Chelsea, Londra",
      ko: "첼시",
      sv: "Chelsea, London",
      it: "Chelsea",
      ar: "تشيلسي",
      fa: "چلسی",
      ga: "Chelsea",
      ja: "チェルシー",
      de: "Chelsea",
      ru: "Челси",
      ur: "چیلسی، لندن",
      zh: "車路士",
      af: "Chelsea, Londen",
      es: "Chelsea",
      eu: "Chelsea",
      nl: "Chelsea",
      en: "Chelsea",
      he: "צ'לסי",
      et: "Chelsea",
      pl: "Chelsea",
    },
    lat: 51.4875167,
    lon: -0.1687007,
    country: "GB",
    state: "England",
  },
  {
    name: "London",
    lat: 37.1289771,
    lon: -84.0832646,
    country: "US",
    state: "Kentucky",
  },
];

const Navbar = ({ searchValue, setSearchValue }: Props) => {
  const productionBuild = true;

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            userSelect: "none",
          }}>
          <AcUnitIcon
            sx={{
              transform: "rotate(45deg)",
            }}
          />{" "}
          WeatherApp
        </Typography>

        <Box sx={{ minWidth: "400px", position: "relative" }}>
          <TextField
            id="search-bar"
            className="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            label="Enter a city name"
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{
              width: "100%",
              height: "100%",
              transition: "all 0.3s ease",
              input: {
                color: "white",
              },
              "& .MuiInputLabel-root": { color: "white" },
              field: {
                borderColor: "white",
              },
              fieldset: {
                borderColor: "white",
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              right: "2%",
              transform: "translate(0, -50%)",
            }}
            aria-label="search"
            onClick={() => {
              productionBuild ? console.log(object) : getData();
            }}>
            <SearchIcon style={{ fill: "white" }} />
          </IconButton>
        </Box>

        <Tabs sx={{ color: "white" }}>
          <Tab
            sx={{ color: "inherit" }}
            label="Home"
          />
          <Tab
            sx={{ color: "inherit" }}
            label="About"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
