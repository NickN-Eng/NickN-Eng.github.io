---
permalink: /about/
title: "About"
---
<style>
.content-container {
  overflow: hidden; /* Ensures the container wraps around floated elements */
}

.iframe-wrapper {
  float: right; /* Aligns the iframe wrapper to the right */
  width: 50%; /* Takes up half of the parent width */
  padding-top: 50%; /* This makes the height equal to the width, making it square */
  position: relative; /* Establishes a positioning context for the absolute positioned iframe */
  border: none;
}

.content-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 600px) { /* Adjust breakpoint as needed */
  .iframe-wrapper {
    float: none; /* Removes float for narrow screens */
    width: 100%; /* Takes full width on narrow screens */
    padding-top: 100%; /* Adjust padding-top to maintain square aspect ratio */
  }
}
</style>
<div class="content-container">
  <div class="iframe-wrapper">
    <iframe src="/assets/three/VoxelFrame/RCFrame.html" class="content-iframe"></iframe>
  </div>
  <p>
Nick started his career as a <strong>structural engineer</strong>, working on a variety of projects including residential, education, healthcare, both in new build and refurbishment.<br>
<br>
Alongside his engineering projects, he also has a passion for <strong>coding</strong>, automation and <strong>game development</strong>. Some example projects can be found <a href="/projects/">here</a>. Familiarity with C# & game development with Unity led to involvement in Ramboll's software development team working on the SiteSolve product (a generative design app for real estate development).<br>
<br>
Post-chartership, Nick has been working as a <strong>computational designer</strong>, developing scripts and apps with a focus on design automation, sustainability and exploring uses of AI within AEC.<br>
<br>
Aside from his engineering career, he is a <strong>3d printing hobbyist</strong> and enjoys working on design and make projects which can be found <a href="/categories/#3dprints">here</a>.</p>
</div>
