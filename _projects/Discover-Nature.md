---
layout: project
title: Discover Nature
description: >
    This project makes biodiversity education accessible and exciting by mixing gamified learning with hard science. The ultimate goal is helping anyone to understand and ultimately protect the ecosystems they encounter every day.

date: 2023-01-01
category: personal # work | personal | hackathons

hackathon_winner: false
hackathon_event:
hackathon_org:

tech:
    [
        SwiftUI,
        Swift,
        Gemini,
        NewsAPI,
        Nasa API,
        Flask,
        Firebase,
        Firestore,
        iNaturalist API,
    ]
image: /assets/images/DiscoverNature.png
---

Despite the hype around new technologies and vast environmental datasets, it seems like the general public needs advanced biological training to interpret the data. As a result, many people simply give up. The next generation spends increasing amounts of time on mobile devices and I firmly believe we miss a critical opportunity if we view this technology solely as a distraction rather than a tool for exploration.

I started building Discover Nature as a more accessible version of iNaturalist for non-scientists. But I also wanted users to enjoy the experience, so I added daily quizzes based on species they love or want to learn about, along with random facts to keep learning engaging.

Most apps either focus on collecting data (like iNaturalist, Merlin, and eBird) or on gamified learning (like Kahoot!, Duolingo, and Quizlet). My goal is to bring both into one app so people learn, understand, and protect the ecosystems around them.

---

##### Comparison with Existing Platforms

| Feature                                                                             | Discover Nature | iNaturalist, eBird, Merlin | Duolingo, Kahoot!, Quizlet |
| ----------------------------------------------------------------------------------- | --------------- | -------------------------- | -------------------------- |
| Direct integration with real-time, local ecological data and biodiversity discovery | ✅              | ✅                         | ❌                         |
| Search/learn about different Species                                                | ✅              | ✅                         | ❌                         |
| Easy Engaging UI for Non-Biologists                                                 | ✅              | ❌                         | ✅                         |
| Daily, personalized, and adaptive gamified education to build knowledge             | ✅              | ❌                         | ✅                         |
| Latest science News + daily science/species fun fact (Curated)                      | ✅              | ❌                         | ❌                         |

---

##### App Architecture & Features

The app features five interconnected views designed to spark curiosity, encourage exploration, and reinforce learning through personalized experiences.

-   `Home View`

Each day, users discover five curated species through “Did You Know?” cards that highlight fun facts about wildlife or the environment. There are also a few featured news highlights related to science.

-   `Explore View`

Users can search for species just as they would in iNaturalist, by entering a species name and selecting a location. All data here is sourced from iNaturalist.

-   `Favorites View`

When users like a species, it is added to their favorites and used to feed the algorithm, which suggests similar species and generates quizzes for them.

-   `Quizzes View`

Users can test their knowledge through AI-generated daily quizzes based on their saved favorites or, for new users, based on randomly selected species.

-   `Search View`

The goal of this feature is to allow users to search for species using natural language. For example, a user could type: “I was in New York and saw a big bird, but I don’t know what it is.” The app then searches through bird species recorded in New York via iNaturalist to find the closest matches.

---

##### Current Codebase

-   [iOS Repository](https://github.com/mravaloarison/nat-geo-ios-mvp)
-   [Python API Repository](https://github.com/mravaloarison/nat-geo-api-mvp)

---

##### Mar – Apr 2026

Beta Testing & Launch Prep
