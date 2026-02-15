---
layout: project
title: Cat-Culus
description: >
    A simple Pygame that was built with Machine Learning and Artificial Intelligence to save a cat by solving math problems. The design and game logic were primarily inspired by the Google Cat Academy Third edition.

date: 2021-05-01
category: personal # work | personal | hackathons

hackathon_winner: false
hackathon_event:
hackathon_org:

tech: [Python, Gemini, OpenCV, PyGames, Mediapipe]
image: /assets/images/Cat-Culus.png
---

Cat-Culus is a PyGame project inspired by Google’s Cat Academy (Third Edition). Instead of drawing patterns with a mouse to save the cat, players solve dynamically generated math problems. If they answer correctly, the cat is saved; if not, it gets haunted by a ghost that slowly approaches while the problem is active.

I worked with two other developers on this project (shoutout to Jasmina and Gabby), where my role was integrating hand detection and orchestrating the game logic. The game reads numbers from the player’s left and right hands and uses them to generate math problems that must be solved using those values. For example, if the target equation is left hand + right hand = 8, the player could display combinations like 4 and 4, 3 and 5, or 5 and 3. If the correct combination is shown, the cat advances to the next challenge; otherwise, the ghost reaches it.

This project was a lot of fun. We built it for a hackathon (which I honestly forgot the name of), and I liked it so much that I kept working on it afterward. The final design created ended up being closer to Google’s style than the original one Gabby and Jasmina made, mainly because I couldn’t recreate their design as well as they could, and we didn’t have much time during the event to refine it together.

-   [Github Link](https://github.com/mravaloarison/cat-culus)
