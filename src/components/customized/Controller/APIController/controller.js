<<<<<<< HEAD
function getCountryCodes(countries) {
  // Dictionary mapping country names to ISO 3166-1 Alpha-2 codes
  const countryCodes = {
    Argentina: "AR",
    Australia: "AU",
    Austria: "AT",
    Belgium: "BE",
    Brazil: "BR",
    Canada: "CA",
    China: "CN",
    "Czech Republic": "CZ",
    Denmark: "DK",
    Egypt: "EG",
    Finland: "FI",
    France: "FR",
    Germany: "DE",
    "Hong Kong": "HK",
    Hungary: "HU",
    India: "IN",
    Ireland: "IE",
    Italy: "IT",
    Japan: "JP",
    Luxembourg: "LU",
    Mexico: "MX",
    Netherlands: "NL",
    "New Zealand": "NZ",
    Norway: "NO",
    Poland: "PL",
    Romania: "RO",
    Russia: "RU",
    "South Africa": "ZA",
    "South Korea": "KR",
    Spain: "ES",
    Sweden: "SE",
    Switzerland: "CH",
    Taiwan: "TW",
    Thailand: "TH",
    "United Kingdom": "GB",
    "United States of America": "US",
  };
  // Convert the input country name to title case for matching
  const formattedCountryName = countries.trim();

  // Return the country code if found, or a default message
  return countryCodes[formattedCountryName] || "Country code not found";
}
function getPrimaryLanguage(countryName) {
  // Dictionary mapping country names to their primary official languages and ISO codes
  const countryLanguages = {
    Argentina: { language: "Spanish", code: "es" },
    Australia: { language: "English", code: "en" },
    Austria: { language: "German", code: "de" },
    Belgium: { language: "Dutch", code: "nl" }, // Primary language
    Brazil: { language: "Portuguese", code: "pt" },
    Canada: { language: "English", code: "en" }, // Primary language
    China: { language: "Chinese", code: "zh" },
    "Czech Republic": { language: "Czech", code: "cs" },
    Denmark: { language: "Danish", code: "da" },
    Egypt: { language: "Arabic", code: "ar" },
    Finland: { language: "Finnish", code: "fi" }, // Primary language
    France: { language: "French", code: "fr" },
    Germany: { language: "German", code: "de" },
    "Hong Kong": { language: "Chinese", code: "zh" }, // Primary language
    Hungary: { language: "Hungarian", code: "hu" },
    India: { language: "Hindi", code: "hi" }, // Primary language
    Ireland: { language: "Irish", code: "ga" }, // Primary language
    Italy: { language: "Italian", code: "it" },
    Japan: { language: "Japanese", code: "ja" },
    Luxembourg: { language: "Luxembourgish", code: "lb" }, // Primary language
    Mexico: { language: "Spanish", code: "es" },
    Netherlands: { language: "Dutch", code: "nl" },
    "New Zealand": { language: "English", code: "en" }, // Primary language
    Norway: { language: "Norwegian", code: "no" },
    Poland: { language: "Polish", code: "pl" },
    Romania: { language: "Romanian", code: "ro" },
    Russia: { language: "Russian", code: "ru" },
    "South Africa": { language: "Afrikaans", code: "af" }, // Primary language
    "South Korea": { language: "Korean", code: "ko" },
    Spain: { language: "Spanish", code: "es" },
    Sweden: { language: "Swedish", code: "sv" },
    Switzerland: { language: "German", code: "de" }, // Primary language
    Taiwan: { language: "Chinese", code: "zh" },
    Thailand: { language: "Thai", code: "th" },
    "United Kingdom": { language: "English", code: "en" },
    "United States of America": { language: "English", code: "en" },
  };

  // Get the primary language for the specified country
  const language = countryLanguages[countryName];

  // Return the primary language or a default message if not found
  return language ? language.code : "Country not found";
}

function getGenreCodes(genres) {
  const genreMap = {
    Action: 28,
    "Action & Adventure": [28, 12], // Action + Adventure
    Adventure: 12,
    Animation: 16,
    Biography: null, // Biography doesn't have a direct match in TMDb
    Comedy: 35,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Kids: 10762, // TMDb has a "Kids" genre for TV shows
    Music: 10402,
    Mystery: 9648,
    News: null, // News doesn't have a direct match in TMDb
    Reality: 10764, // TMDb has "Reality" for TV shows
    Romance: 10749,
    "Sci-Fi & Fantasy": [878, 14], // Science Fiction + Fantasy
    "Science Fiction": 878,
    Soap: 10766, // TMDb has "Soap" for TV shows
    Talk: null, // Talk doesn't have a direct match in TMDb
    Thriller: 53,
    "TV Movie": 10770,
    War: 10752,
    "War & Politics": [10752, 10768], // War + Politics
    Western: 37,
  };

  let genreCodes = [];

  genres.forEach((genre) => {
    const code = genreMap[genre];
    if (Array.isArray(code)) {
      genreCodes = [...genreCodes, ...code]; // Spread the array if the genre has multiple codes
    } else if (code !== null) {
      genreCodes.push(code);
    }
  });

  // Remove duplicates from the genre codes array
  return [...new Set(genreCodes)];
}
function getTvGenreCodes(genres) {
  const tvGenreMap = {
    Action: 10759,
    "Action & Adventure": [10759, 12], // Action + Adventure
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    "Game Show": 10763,
    Kids: 10762,
    Mystery: 9648,
    News: 10768, // News shows
    Reality: 10764,
    Romance: 10749,
    "Sci-Fi & Fantasy": [878, 14], // Science Fiction + Fantasy
    "Science Fiction": 878,
    Soap: 10766,
    Talk: 10767, // Talk shows
    Thriller: 53,
    "War & Politics": 10768, // War + Politics
    Western: 37,
  };

  let genreCodes = [];

  genres.forEach((genre) => {
    const code = tvGenreMap[genre];
    if (Array.isArray(code)) {
      genreCodes = [...genreCodes, ...code]; // Spread the array if the genre has multiple codes
    } else if (code !== null) {
      genreCodes.push(code);
    }
  });

  // Remove duplicates from the genre codes array
  return [...new Set(genreCodes)];
}
export function getAPI(filter) {
  if (filter.filter.type === "movie" || filter.filter.type === "all") {
    return "https://api.themoviedb.org/3/discover/movie";
  } else if (filter.filter.type === "tv") {
    return "https://api.themoviedb.org/3/discover/tv";
  } else if (filter.filter.type === "search") {
    return "https://api.themoviedb.org/3/search/multi";
  } else if (filter.filter.type === "now playing") {
    return "https://api.themoviedb.org/3/movie/now_playing";
  } else if (filter.filter.type === "popular") {
    return "https://api.themoviedb.org/3/movie/popular";
  } else if (filter.filter.type === "top rated") {
    return "https://api.themoviedb.org/3/movie/top_rated";
  } else if (filter.filter.type === "upcoming") {
    return "https://api.themoviedb.org/3/movie/upcoming";
  }
}

function getMovieParams(filter) {
  let params = "";
  if (filter.filter.year != "all") {
    if (filter.filter.year === "older") {
      params += "release_date.lte=" + `${2019}-12-31&`;
    } else {
      params += "primary_release_year=" + filter.filter.year + "&";
    }
  }

  if (filter.filter.country) {
    let countries = filter.filter.country
      .map((country) => getCountryCodes(country))
      .join("|");
    let languages = filter.filter.country
      .map((country) => getPrimaryLanguage(country))
      .join("|");

    console.log(filter.filter.country);
    params += "with_origin_country=" + countries + "&";
    params += "language=" + languages + "&";
  }
  if (filter.filter.genre) {
    let genres = getGenreCodes(filter.filter.genre).join(",");
    params += "with_genres=" + genres + "&";
  }
  return params;
}

function getTVParams(filter) {
  let params = "";
  if (filter.filter.year != "all") {
    if (filter.filter.year === "older") {
      params += "first_air_date.lte=" + `${2019}-12-31&`;
    } else {
      params += "first_air_date_year=" + filter.filter.year + "&";
    }
  }

  if (filter.filter.country) {
    let countries = filter.filter.country
      .map((country) => getCountryCodes(country))
      .join("|");
    let languages = filter.filter.country
      .map((country) => getPrimaryLanguage(country))
      .join("|");

    console.log(filter.filter.country);
    params += "with_origin_country=" + countries + "&";

    params += "language=" + languages + "&";
  }
  if (filter.filter.genre) {
    let genres = getTvGenreCodes(filter.filter.genre).join(",");
    params += "with_genres=" + genres + "&";
  }
  return params;
}

function getSearchParams(filter) {
  let params = "";
  params += "query=" + filter.filter.search;
  return params;
}

function getNowPlayingParams(filter) {
  let params = "";
  return params;
}
function getPopularParams(filter) {
  let params = "";
  return params;
}
function getTopRatedParams(filter) {
  let params = "";
  return params;
}
function getUpcomingParams(filter) {
  let params = "";
  return params;
}
export function getParams(filter) {
  let params = "?";
  if (filter.page) {
    params += "page=" + filter.page + "&";
=======
import {
  getMovieParams,
  getNowPlayingParams,
  getPeopleParams,
  getPersonParams,
  getPopularParams,
  getSearchParams,
  getTVParams,
  getTopRatedParams,
  getUpcomingParams,
} from "./Params";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjBhM2ViMDhhMWQ5Y2RjY2E1NGZjNjcwMTgxMmFjOCIsIm5iZiI6MTcyODM5OTU2NS43NTE0Miwic3ViIjoiNjZmOTgyNjIxYTljOTE4OGZlY2M2M2RjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.keNsd-uSLYEfqV7UebVqVQcph1bHJFI1bdE-Wn7_FNU",
  },
};
export const options2 = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjBhM2ViMDhhMWQ5Y2RjY2E1NGZjNjcwMTgxMmFjOCIsIm5iZiI6MTcyODgzNzEzNS4wNDc0NDMsInN1YiI6IjY2Zjk4MjYyMWE5YzkxODhmZWNjNjNkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zxd5_bfFTMTI8-WCbWxQqFbNjgdIBQi80U1n9PekP4c",
  },
};
export function getAPI(filter) {
  if (filter.filter.type === "all") {
    return [
      "https://api.themoviedb.org/3/discover/movie",
      "https://api.themoviedb.org/3/discover/tv",
    ];
  } else if (filter.filter.type === "movie") {
    return ["https://api.themoviedb.org/3/discover/movie"];
  } else if (filter.filter.type === "tv") {
    return ["https://api.themoviedb.org/3/discover/tv"];
  } else if (filter.filter.type === "search") {
    return ["https://api.themoviedb.org/3/search/multi"];
  } else if (filter.filter.type === "now playing") {
    return [
      "https://api.themoviedb.org/3/movie/now_playing",
      "https://api.themoviedb.org/3/tv/on_the_air",
    ];
  } else if (filter.filter.type === "popular") {
    return [
      "https://api.themoviedb.org/3/movie/popular",
      "https://api.themoviedb.org/3/tv/popular",
    ];
  } else if (filter.filter.type === "top rated") {
    return [
      "https://api.themoviedb.org/3/movie/top_rated",
      "https://api.themoviedb.org/3/tv/top_rated",
    ];
  } else if (filter.filter.type === "upcoming") {
    return [
      "https://api.themoviedb.org/3/movie/upcoming",
      "https://api.themoviedb.org/3/tv/on_the_air",
    ];
  } else if (filter.filter.type === "people") {
    return ["https://api.themoviedb.org/3/person/popular"];
  } else if (filter.filter.type === "person") {
    return [
      `https://api.themoviedb.org/3/person/${filter.filter.person}/combined_credits`,
    ];
  }
}
export function getParams(filter) {
  let params = "?";
  if (filter.filter.page) {
    params += "page=" + filter.filter.page + "&";
>>>>>>> eec6d5d93ef76fb5e6022635fdcfeeec07e6c7b8
  }

  if (filter.filter.type === "movie" || filter.filter.type === "all") {
    params += getMovieParams(filter);
  } else if (filter.filter.type === "tv") {
    params += getTVParams(filter);
  } else if (filter.filter.type === "search") {
    params += getSearchParams(filter);
  } else if (filter.filter.type === "now playing") {
    params += getNowPlayingParams(filter);
  } else if (filter.filter.type === "popular") {
    params += getPopularParams(filter);
  } else if (filter.filter.type === "top rated") {
    params += getTopRatedParams(filter);
  } else if (filter.filter.type === "upcoming") {
    params += getUpcomingParams(filter);
<<<<<<< HEAD
=======
  } else if (filter.filter.type === "people") {
    params += getPeopleParams(filter);
  } else if (filter.filter.type === "person") {
    params += getPersonParams(filter);
>>>>>>> eec6d5d93ef76fb5e6022635fdcfeeec07e6c7b8
  }
  if (params === "?") {
    return "";
  }
  if (params[params.length - 1] === "&") {
    params = params.substring(0, params.length - 1);
  }
<<<<<<< HEAD
  console.log(params);
  return params;
}

/*
export function getParams(filter) {
  let params = "?";
  if (filter.page) {
    params += "page=" + filter.page + "&";
  }
  if (filter.filter.search && filter.filter.type === "search") {
    params += "query=" + filter.filter.search;
    return params;
  }
  if (filter.filter.year != "all") {
    if (filter.filter.type === "movie") {
      if (filter.filter.year === "older") {
        params += "release_date.lte=" + `${2019}-12-31&`;
      } else {
        params += "primary_release_year=" + filter.filter.year + "&";
      }
    } else {
      if (filter.filter.year === "older") {
        params += "first_air_date.lte=" + `${2019}-12-31&`;
      } else {
        params += "first_air_date_year=" + filter.filter.year + "&";
      }
    }
  }

  if (filter.filter.country) {
    let countries = filter.filter.country
      .map((country) => getCountryCodes(country))
      .join("|");
    let languages = filter.filter.country
      .map((country) => getPrimaryLanguage(country))
      .join("|");

    console.log(filter.filter.country);
    params += "with_origin_country=" + countries + "&";

    params += "language=" + languages + "&";
  }
  if (filter.filter.genre) {
    if (filter.filter.type === "movie") {
      let genres = getGenreCodes(filter.filter.genre).join(",");
      params += "with_genres=" + genres + "&";
    } else {
      let genres = getTvGenreCodes(filter.filter.genre).join(",");
      params += "with_genres=" + genres + "&";
    }
  }
  if (params === "?") {
    return "";
  }
  if (params[params.length - 1] === "&") {
    params = params.substring(0, params.length - 1);
  }
  console.log(params);
  return params;
}
*/
=======
  return params;
}
>>>>>>> eec6d5d93ef76fb5e6022635fdcfeeec07e6c7b8
