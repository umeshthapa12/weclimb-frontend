// This file was auto-generated by graphql-fragment-codegen. Do not edit it by hand.

export const ListResult = `fragment ListResult on ListResult {
  pagination {
    total
    size
    pageCount
    currentPage
  }
}
`;

export const Crag = `fragment Crag on Crag {
  _stats {
    routesCount
    sectorsCount
  }
  slug
  title
  descr
  accessInfo
  coords {
    lat
    lng
  }
  altitude
  exposition
  boltingType
  rockType
  qualityRank {
    score
    crowdedness
    weather
    weatherExtended {
    coeff
    time
    value
  }
    position
    difficulty
    average
    max
    votes
  }
  period
  notes
  resourceUrl
  sectors {
    crag
    parent {
      _stats {
        routesCount
        sectorsCount
      }
      slug
      title
      descr
      accessInfo
      coords {
        lat
        lng
      }
      altitude
      exposition
      boltingType
      rockType
      qualityRank {
        score
        crowdedness
        weather
        weatherExtended {
    coeff
    time
    value
  }
        position
        difficulty
        average
        max
        votes
      }
      period
      notes
      resourceUrl
    }
    slug
    title
    coords {
      lat
      lng
    }
    notes
    qualityRank {
      score
      crowdedness
      weather
      weatherExtended {
    coeff
    time
    value
  }
      position
      difficulty
      average
      max
      votes
    }
    minGrade
    maxGrade
    resourceUrl
    routes {
    sector
    parent {
      crag
      parent {
        _stats {
          routesCount
          sectorsCount
        }
        slug
        title
        descr
        accessInfo
        coords {
          lat
          lng
        }
        altitude
        exposition
        boltingType
        rockType
        qualityRank {
          score
          crowdedness
          weather
          weatherExtended {
    coeff
    time
    value
  }
          position
          difficulty
          average
          max
          votes
        }
        period
        notes
        resourceUrl
      }
      slug
      title
      coords {
        lat
        lng
      }
      notes
      qualityRank {
        score
        crowdedness
        weather
        weatherExtended {
    coeff
    time
    value
  }
        position
        difficulty
        average
        max
        votes
      }
      minGrade
      maxGrade
      resourceUrl
    }
    slug
    seqNum
    title
    coords {
      lat
      lng
    }
    grade
    pitonsNum
    length
    routeType
    gearType
    notes
    qualityRank {
      score
      crowdedness
      weather
      weatherExtended {
    coeff
    time
    value
  }
      position
      difficulty
      average
      max
      votes
    }
    resourceUrl
    searchScore
  }
    searchScore
  }
  searchScore
}
`;

export const CragStats = `fragment CragStats on CragStats {
  routesCount
  sectorsCount
}
`;

export const Coords = `fragment Coords on Coords {
  lat
  lng
}
`;

export const QualityRank = `fragment QualityRank on QualityRank {
  score
  crowdedness
  weather
  weatherExtended {
    coeff
    time
    value
  }
  position
  difficulty
  average
  max
  votes
}
`;

export const WeatherExtended = `fragment WeatherExtended on WeatherExtended {
  coeff
  time
  value
}
`;

export const Sector = `fragment Sector on Sector {
  crag
  parent {
    _stats {
      routesCount
      sectorsCount
    }
    slug
    title
    descr
    accessInfo
    coords {
      lat
      lng
    }
    altitude
    exposition
    boltingType
    rockType
    qualityRank {
      score
      crowdedness
      weather
      weatherExtended {
    coeff
    time
    value
  }
      position
      difficulty
      average
      max
      votes
    }
    period
    notes
    resourceUrl
  }
  slug
  title
  coords {
    lat
    lng
  }
  notes
  qualityRank {
    score
    crowdedness
    weather
    weatherExtended {
    coeff
    time
    value
  }
    position
    difficulty
    average
    max
    votes
  }
  minGrade
  maxGrade
  resourceUrl
  routes {
    sector
    parent {
      crag
      parent {
        _stats {
          routesCount
          sectorsCount
        }
        slug
        title
        descr
        accessInfo
        coords {
          lat
          lng
        }
        altitude
        exposition
        boltingType
        rockType
        qualityRank {
          score
          crowdedness
          weather
          weatherExtended {
    coeff
    time
    value
  }
          position
          difficulty
          average
          max
          votes
        }
        period
        notes
        resourceUrl
      }
      slug
      title
      coords {
        lat
        lng
      }
      notes
      qualityRank {
        score
        crowdedness
        weather
        weatherExtended {
    coeff
    time
    value
  }
        position
        difficulty
        average
        max
        votes
      }
      minGrade
      maxGrade
      resourceUrl
    }
    slug
    seqNum
    title
    coords {
      lat
      lng
    }
    grade
    pitonsNum
    length
    routeType
    gearType
    notes
    qualityRank {
      score
      crowdedness
      weather
      weatherExtended {
    coeff
    time
    value
  }
      position
      difficulty
      average
      max
      votes
    }
    resourceUrl
    searchScore
  }
  searchScore
}
`;

export const SectorCrag = `fragment SectorCrag on SectorCrag {
  _stats {
    routesCount
    sectorsCount
  }
  slug
  title
  descr
  accessInfo
  coords {
    lat
    lng
  }
  altitude
  exposition
  boltingType
  rockType
  qualityRank {
    score
    crowdedness
    weather
    weatherExtended {
    coeff
    time
    value
  }
    position
    difficulty
    average
    max
    votes
  }
  period
  notes
  resourceUrl
}
`;

export const Route = `fragment Route on Route {
  sector
  parent {
    crag
    parent {
      _stats {
        routesCount
        sectorsCount
      }
      slug
      title
      descr
      accessInfo
      coords {
        lat
        lng
      }
      altitude
      exposition
      boltingType
      rockType
      qualityRank {
        score
        crowdedness
        weather
        weatherExtended {
    coeff
    time
    value
  }
        position
        difficulty
        average
        max
        votes
      }
      period
      notes
      resourceUrl
    }
    slug
    title
    coords {
      lat
      lng
    }
    notes
    qualityRank {
      score
      crowdedness
      weather
      weatherExtended {
    coeff
    time
    value
  }
      position
      difficulty
      average
      max
      votes
    }
    minGrade
    maxGrade
    resourceUrl
  }
  slug
  seqNum
  title
  coords {
    lat
    lng
  }
  grade
  pitonsNum
  length
  routeType
  gearType
  notes
  qualityRank {
    score
    crowdedness
    weather
    weatherExtended {
    coeff
    time
    value
  }
    position
    difficulty
    average
    max
    votes
  }
  resourceUrl
  searchScore
}
`;

export const RouteSector = `fragment RouteSector on RouteSector {
  crag
  parent {
    _stats {
      routesCount
      sectorsCount
    }
    slug
    title
    descr
    accessInfo
    coords {
      lat
      lng
    }
    altitude
    exposition
    boltingType
    rockType
    qualityRank {
      score
      crowdedness
      weather
      weatherExtended {
    coeff
    time
    value
  }
      position
      difficulty
      average
      max
      votes
    }
    period
    notes
    resourceUrl
  }
  slug
  title
  coords {
    lat
    lng
  }
  notes
  qualityRank {
    score
    crowdedness
    weather
    weatherExtended {
    coeff
    time
    value
  }
    position
    difficulty
    average
    max
    votes
  }
  minGrade
  maxGrade
  resourceUrl
}
`;

export const Place = `fragment Place on Place {
  _id
  socialId
  slug
  title
  descr
  coords {
    lat
    lng
  }
  openings {
    l
  }
  notes
  resourceUrl
  searchScore
  picture
}
`;

export const Openings = `fragment Openings on Openings {
  l
}
`;

export const Event = `fragment Event on Event {
  socialId
  slug
  title
  descr
  coords {
    lat
    lng
  }
  place
  startTime
  endTime
  resourceUrl
  searchScore
}
`;

export const Competition = `fragment Competition on Competition {
  coords {
    lat
    lng
  }
  info {
    categories
    details {
      eventWebsite
      infoSheet
      text
    }
    place
    specialties
    types
  }
  people {
    what
    who
  }
  poster
  resourceUrl
  schedule
  slug
  startTime
  endTime
  title
  searchScore
}
`;

export const CompetitionInfo = `fragment CompetitionInfo on CompetitionInfo {
  categories
  details {
    eventWebsite
    infoSheet
    text
  }
  place
  specialties
  types
}
`;

export const CompetitionDetails = `fragment CompetitionDetails on CompetitionDetails {
  eventWebsite
  infoSheet
  text
}
`;

export const CompetitionPerson = `fragment CompetitionPerson on CompetitionPerson {
  what
  who
}
`;

export const News = `fragment News on News {
  media {
    thumb
  }
  resourceUrl
  slug
  summary
  title
  lang
  searchScore
  creationTime
}
`;

export const NewsMedia = `fragment NewsMedia on NewsMedia {
  thumb
}
`;

export const Shelter = `fragment Shelter on Shelter {
  slug
  name
  descr
  coords {
    lat
    lng
  }
  accessInfo
  altitude
  opening
  accomodationsFood
  accomodationsRooms
  beds
  owners
  keepers
  email
  phone
  mobile
  web
  facebook
  media
  searchScore
  resourceUrl
}
`;

export const Hike = `fragment Hike on Hike {
  slug
  title
  trailLabel
  difficulty
  exposition
  elevation {
    asc
    desc
    low
    high
    ascDiffTot
  }
  grade {
    avg
    max
  }
  length
  startingPoint
  accessInfo
  notes
  descr
  coords {
    lat
    lng
  }
  tracks
  media
  searchScore
  resourceUrl
}
`;

export const HikeElevation = `fragment HikeElevation on HikeElevation {
  asc
  desc
  low
  high
  ascDiffTot
}
`;

export const HikeGrade = `fragment HikeGrade on HikeGrade {
  avg
  max
}
`;

export const Pagination = `fragment Pagination on Pagination {
  total
  size
  pageCount
  currentPage
}
`;

export const UserInfo = `fragment UserInfo on UserInfo {
  geo {
    isoCode
    timeZone
    city
    coords {
      lat
      lng
    }
  }
}
`;

export const UserGeo = `fragment UserGeo on UserGeo {
  isoCode
  timeZone
  city
  coords {
    lat
    lng
  }
}
`;

export const SearchResult = `fragment SearchResult on SearchResult {
  locations {
    name
    coords {
      lat
      lng
    }
  }
  crags {
    _stats {
      routesCount
      sectorsCount
    }
    slug
    title
    descr
    accessInfo
    coords {
      lat
      lng
    }
    altitude
    exposition
    boltingType
    rockType
    qualityRank {
      score
      crowdedness
      weather
      weatherExtended {
    coeff
    time
    value
  }
      position
      difficulty
      average
      max
      votes
    }
    period
    notes
    resourceUrl
    sectors {
    crag
    parent {
      _stats {
        routesCount
        sectorsCount
      }
      slug
      title
      descr
      accessInfo
      coords {
        lat
        lng
      }
      altitude
      exposition
      boltingType
      rockType
      qualityRank {
        score
        crowdedness
        weather
        weatherExtended {
    coeff
    time
    value
  }
        position
        difficulty
        average
        max
        votes
      }
      period
      notes
      resourceUrl
    }
    slug
    title
    coords {
      lat
      lng
    }
    notes
    qualityRank {
      score
      crowdedness
      weather
      weatherExtended {
    coeff
    time
    value
  }
      position
      difficulty
      average
      max
      votes
    }
    minGrade
    maxGrade
    resourceUrl
    routes {
    sector
    parent {
      crag
      parent {
        _stats {
          routesCount
          sectorsCount
        }
        slug
        title
        descr
        accessInfo
        coords {
          lat
          lng
        }
        altitude
        exposition
        boltingType
        rockType
        qualityRank {
          score
          crowdedness
          weather
          weatherExtended {
    coeff
    time
    value
  }
          position
          difficulty
          average
          max
          votes
        }
        period
        notes
        resourceUrl
      }
      slug
      title
      coords {
        lat
        lng
      }
      notes
      qualityRank {
        score
        crowdedness
        weather
        weatherExtended {
    coeff
    time
    value
  }
        position
        difficulty
        average
        max
        votes
      }
      minGrade
      maxGrade
      resourceUrl
    }
    slug
    seqNum
    title
    coords {
      lat
      lng
    }
    grade
    pitonsNum
    length
    routeType
    gearType
    notes
    qualityRank {
      score
      crowdedness
      weather
      weatherExtended {
    coeff
    time
    value
  }
      position
      difficulty
      average
      max
      votes
    }
    resourceUrl
    searchScore
  }
    searchScore
  }
    searchScore
  }
  sectors {
    crag
    parent {
      _stats {
        routesCount
        sectorsCount
      }
      slug
      title
      descr
      accessInfo
      coords {
        lat
        lng
      }
      altitude
      exposition
      boltingType
      rockType
      qualityRank {
        score
        crowdedness
        weather
        weatherExtended {
    coeff
    time
    value
  }
        position
        difficulty
        average
        max
        votes
      }
      period
      notes
      resourceUrl
    }
    slug
    title
    coords {
      lat
      lng
    }
    notes
    qualityRank {
      score
      crowdedness
      weather
      weatherExtended {
    coeff
    time
    value
  }
      position
      difficulty
      average
      max
      votes
    }
    minGrade
    maxGrade
    resourceUrl
    routes {
    sector
    parent {
      crag
      parent {
        _stats {
          routesCount
          sectorsCount
        }
        slug
        title
        descr
        accessInfo
        coords {
          lat
          lng
        }
        altitude
        exposition
        boltingType
        rockType
        qualityRank {
          score
          crowdedness
          weather
          weatherExtended {
    coeff
    time
    value
  }
          position
          difficulty
          average
          max
          votes
        }
        period
        notes
        resourceUrl
      }
      slug
      title
      coords {
        lat
        lng
      }
      notes
      qualityRank {
        score
        crowdedness
        weather
        weatherExtended {
    coeff
    time
    value
  }
        position
        difficulty
        average
        max
        votes
      }
      minGrade
      maxGrade
      resourceUrl
    }
    slug
    seqNum
    title
    coords {
      lat
      lng
    }
    grade
    pitonsNum
    length
    routeType
    gearType
    notes
    qualityRank {
      score
      crowdedness
      weather
      weatherExtended {
    coeff
    time
    value
  }
      position
      difficulty
      average
      max
      votes
    }
    resourceUrl
    searchScore
  }
    searchScore
  }
  routes {
    sector
    parent {
      crag
      parent {
        _stats {
          routesCount
          sectorsCount
        }
        slug
        title
        descr
        accessInfo
        coords {
          lat
          lng
        }
        altitude
        exposition
        boltingType
        rockType
        qualityRank {
          score
          crowdedness
          weather
          weatherExtended {
    coeff
    time
    value
  }
          position
          difficulty
          average
          max
          votes
        }
        period
        notes
        resourceUrl
      }
      slug
      title
      coords {
        lat
        lng
      }
      notes
      qualityRank {
        score
        crowdedness
        weather
        weatherExtended {
    coeff
    time
    value
  }
        position
        difficulty
        average
        max
        votes
      }
      minGrade
      maxGrade
      resourceUrl
    }
    slug
    seqNum
    title
    coords {
      lat
      lng
    }
    grade
    pitonsNum
    length
    routeType
    gearType
    notes
    qualityRank {
      score
      crowdedness
      weather
      weatherExtended {
    coeff
    time
    value
  }
      position
      difficulty
      average
      max
      votes
    }
    resourceUrl
    searchScore
  }
  events {
    socialId
    slug
    title
    descr
    coords {
      lat
      lng
    }
    place
    startTime
    endTime
    resourceUrl
    searchScore
  }
  competitions {
    coords {
      lat
      lng
    }
    info {
      categories
      details {
        eventWebsite
        infoSheet
        text
      }
      place
      specialties
      types
    }
    people {
    what
    who
  }
    poster
    resourceUrl
    schedule
    slug
    startTime
    endTime
    title
    searchScore
  }
  news {
    media {
      thumb
    }
    resourceUrl
    slug
    summary
    title
    lang
    searchScore
    creationTime
  }
  places {
    _id
    socialId
    slug
    title
    descr
    coords {
      lat
      lng
    }
    openings {
      l
    }
    notes
    resourceUrl
    searchScore
    picture
  }
  shelters {
    slug
    name
    descr
    coords {
      lat
      lng
    }
    accessInfo
    altitude
    opening
    accomodationsFood
    accomodationsRooms
    beds
    owners
    keepers
    email
    phone
    mobile
    web
    facebook
    media
    searchScore
    resourceUrl
  }
  hikes {
    slug
    title
    trailLabel
    difficulty
    exposition
    elevation {
      asc
      desc
      low
      high
      ascDiffTot
    }
    grade {
      avg
      max
    }
    length
    startingPoint
    accessInfo
    notes
    descr
    coords {
      lat
      lng
    }
    tracks
    media
    searchScore
    resourceUrl
  }
  pagination {
    total
    size
    pageCount
    currentPage
  }
}
`;

export const City = `fragment City on City {
  name
  coords {
    lat
    lng
  }
}
`;

export const ForecastResult = `fragment ForecastResult on ForecastResult {
  now {
    time
    summary
    icon
    nearestStormDistance
    nearestStormBearing
    precipIntensity
    precipProbability
    temperature
    apparentTemperature
    dewPoint
    humidity
    pressure
    windSpeed
    windGust
    windBearing
    cloudCover
    uvIndex
    visibility
    ozone
  }
  forecast {
    time
    summary
    icon
    sunriseTime
    sunsetTime
    moonPhase
    precipIntensity
    precipIntensityMax
    precipIntensityMaxTime
    precipProbability
    precipType
    temperatureHigh
    temperatureHighTime
    temperatureLow
    temperatureLowTime
    apparentTemperatureHigh
    apparentTemperatureHighTime
    apparentTemperatureLow
    apparentTemperatureLowTime
    dewPoint
    humidity
    pressure
    windSpeed
    windGust
    windGustTime
    windBearing
    cloudCover
    uvIndex
    uvIndexTime
    visibility
    ozone
    temperatureMin
    temperatureMinTime
    temperatureMax
    temperatureMaxTime
    apparentTemperatureMin
    apparentTemperatureMinTime
    apparentTemperatureMax
    apparentTemperatureMaxTime
  }
  message
}
`;

export const CurrentWeather = `fragment CurrentWeather on CurrentWeather {
  time
  summary
  icon
  nearestStormDistance
  nearestStormBearing
  precipIntensity
  precipProbability
  temperature
  apparentTemperature
  dewPoint
  humidity
  pressure
  windSpeed
  windGust
  windBearing
  cloudCover
  uvIndex
  visibility
  ozone
}
`;

export const Forecast = `fragment Forecast on Forecast {
  time
  summary
  icon
  sunriseTime
  sunsetTime
  moonPhase
  precipIntensity
  precipIntensityMax
  precipIntensityMaxTime
  precipProbability
  precipType
  temperatureHigh
  temperatureHighTime
  temperatureLow
  temperatureLowTime
  apparentTemperatureHigh
  apparentTemperatureHighTime
  apparentTemperatureLow
  apparentTemperatureLowTime
  dewPoint
  humidity
  pressure
  windSpeed
  windGust
  windGustTime
  windBearing
  cloudCover
  uvIndex
  uvIndexTime
  visibility
  ozone
  temperatureMin
  temperatureMinTime
  temperatureMax
  temperatureMaxTime
  apparentTemperatureMin
  apparentTemperatureMinTime
  apparentTemperatureMax
  apparentTemperatureMaxTime
}
`;

export const Subscription = `fragment Subscription on Subscription {
  onData {
    id
    data
  }
}
`;

export const SubscriptionResult = `fragment SubscriptionResult on SubscriptionResult {
  id
  data
}
`;
