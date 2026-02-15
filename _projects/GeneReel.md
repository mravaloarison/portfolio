---
layout: project
title: GeneReel
description: >
    An Adobe Express Add-On that generates a Reel/Short video from prompt. Awarded Most Creative Adobe Express Add-On at Yale University during YHack in 2024. I built the Adobe add On and led the whole workflow of the project.

date: 2021-01-01
category: hackathons # work | personal | hackathons

hackathon_winner: true
hackathon_event: [" Most Creative Adobe Express Add-On"]
hackathon_org: "Yale University"

tech: [Python, Gemini, Giphy API, Flask, JavaScript]
image: /assets/images/GeneReel.png
---

<div class="ratio ratio-16x9 mb-4">
<iframe width="560" height="315" src="https://www.youtube.com/embed/dZgIqzT754Y?si=13BAWYjRr4EKe_hU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Teenagers are more likely to be influenced by social media than by articles. We believed that if we want to make a positive impact on the future, we need to influence them in a meaningful way, which led us to build an add-on for Adobe Express to make content creators’ workflows faster and more productive.

We built an Adobe Express add-on that helps users create educational or awareness Reels and Shorts faster by generating half of the content for them.

The UI was built as an Adobe Express add-on, while the backend was developed using Flask. We implemented multiple AI models for content generation: Gemini (handled by Brady), Cloudflare’s model (handled by Alex), and Fetch.ai (handled by Will). The system supports both image and text generation. We also integrated GIPHY to generate GIFs based on keywords extracted from transcripts, and used ElevenLabs for text-to-speech narration in generated videos.

My role was to build and set up the Adobe add-on and connect it to the backend. At first, I thought it would work like a typical HTML/CSS/JavaScript setup, but the structure turned out to be quite different. Here are a few examples of how the components are connected:

-   manifest.json: configuration file

```json
"version": "1.0.0",
    "manifestVersion": 2,
    "requirements": {
        "apps": [
            {
                "name": "Express",
                "apiVersion": 1
            }
        ]

    },

    "entryPoints": [
        {
            "type": "panel",
            "id": "panel1",
            "main": "index.html",
            // for audio
            "permissions": {
                "microphone": "*"
            }
        }
    ]
```

-   index.ts: for API calls

```javascript
import AddOnSdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

AddOnSdk.ready.then(async () => {
	// Call apis here
});
```

-   index.js: for audio

```javascript
import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

addOnUISdk.ready.then(async () => {
	function addToDoc() {
		addOnUISdk.app.document.addAudio(blob, { title: "test.wav" });
	}
});
```

-   [Github link](https://github.com/mravaloarison/genereel)
