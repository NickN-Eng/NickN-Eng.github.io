---
title: "Grasshopper Coding Comparison: OpenAI vs. DeepSeek"
date: 2025-02-05
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - AI
  - LLMs
  - Grasshopper
---

With the release of OpenAI’s o3-mini and DeepSeek R1, I wanted to evaluate how these models compare to the established options—Claude Sonnet 3.5 and ChatGPT o1—specifically for coding Grasshopper script components.

<div style="text-align: center;">
  <img class="solo-round-img" src="{{ '/assets/images/blog/grasshopper_coding_llm/SummaryImage.png' | relative_url }}" alt="LLMs and script component" style="width: 800px;">
</div>

# The Challenge

The task involved writing a script to generate the analysis model geometry for a simple rectangular building. This required knowledge of the RhinoCommon geometry API and the ability to interpret a brief relating to generating geometry with a few added complexities.

## The task

The models were given a prompt outlining a task **create analytical geometry** of a concrete frame, with the following elements:

- Surface elements for slabs and walls
- Stick elements (lines) for columns

The key inputs include a 2D rectangular curve defining the slab edge,  2D lines defining the core walls and numerical inputs including: storey height and the column grid distances in the X and Y directions:

<div style="text-align: center;">
  <img class="solo-round-img" src="{{ '/assets/images/blog/grasshopper_coding_llm/Input.png' | relative_url }}" alt="inputs and result" style="width: 500px;">
</div>

A key challenge was that the rectangular slab edge could be **at any rotation**. The model needed to infer that column gridlines aligned with the rotation of the rectangular slab would be appropriate, based on limited instructions. Additionally, I did not explicitly specify that the building should **include a roof**, but that should be obvious right?

Each model was **tested four times** to account for inconsistency in LLM output (except Claude Sonnet 3.5, which was discontinued after two attempts due to significant issues). You can find the exact prompt at the bottom of this page.

## Scoring Criteria

My evaluation was not exactly a rigorous process and more repeated attempts would be required to get proper metrics, but I scored the models in two areas:

1. **Code correctness** – Ability to generate syntactically correct code using the RhinoCommon API. C# code was run in the script component exactly as provided, and any compilation errors were fed back to the model for correction. Each count of incorrect code relates to one compile time error from model output.
2. **Geometry accuracy & following the brief** – How well the output geometry aligned with the expected result. Common errors included:
   - **NoRoof** – Missing roof
   - **SlabError** – Slab modeled as an extrusion instead of a shell panel
   - **MisalignedGrid** – Column grid misaligned with the rotated slab’s local axis
   - **XInsetColumns** – Columns not inset correctly from the slab edge

## The Results

None of the models fully achieved the correct solution above. In fact, Claude Sonnet 3.5 struggled significantly and required manual intervention, so it was removed from further consideration.

**Key observations:**

- A roof slab was not assumed by any model, and needs to be explicitly stated in future. Only OpenAI o1 included a roof as a fluke in 1 of 4 attempts.
- o3-mini demonstrated the most reliable inference for column grid alignment, with errors in only 1 out of 4 attempts. DeepSeek R1 and o1 made this mistake in 2 out of 4 instances.
- o3-mini performed the best overall, with the lowest average error count (1.2 average). It was also the only model to produce error-free code on the first attempt in two of four cases.
- o1 exhibited the most variation, often adopting different approaches, leading to inconsistencies.

**Performance Breakdown:**

| Model              | Attempt   | Code Errors | Geometrical errors                                  |
| ------------------ | --------- | ----------- | --------------------------------------------------- |
| **OpenAI o3-mini** | **TOTAL** | **4**       | **5**                                               |
|                    | #1        | 2           | 1 - NoRoof                                          |
|                    | #2        | 2           | 2 - NoRoof, SlabError                               |
|                    | #3        | 0           | 1 - NoRoof                                          |
|                    | #4        | 0           | 1 - NoRoof                                          |
| **DeepSeek R1**    | **TOTAL** | **7**       | **5**                                               |
|                    | #1        | 2           | 1 - NoRoof                                          |
|                    | #2        | 2           | 1 - NoRoof                                          |
|                    | #3        | 2           | 1 - NoRoof                                          |
|                    | #4        | 1           | 2 - NoRoof, SlabError                               |
| **OpenAI o1**      | **TOTAL** | **6**       | **8**                                               |
|                    | #1        | 1           | 3 - NoRoof, SlabError, MisalignedGrid               |
|                    | #2        | 3           | 2 - NoRoof, MisalignedGrid                          |
|                    | #3        | 1           | 2 - MisalignedGrid, InsetColumns                    |
|                    | #4        | 1           | 1 - NoRoof                                          |
| **Claude 3.5**     | **TOTAL** | **7+**      | **7**                                               |
|                    | #1        | 4+          | 4 - NoRoof, SlabError, MisalignedGrid, InsetColumns |
|                    | #2        | 3+          | 3 - NoRoof, SlabError, MisalignedGrid               |

<div class="flex-img-container">
    <div class="img-wrapper">
        <img class="flex-round-img" src="{{ '/assets/images/blog/grasshopper_coding_llm/Output_o3.png' | relative_url }}" alt="o3 mini output" style="width: 350px;">
        <div class="caption-in-img">typical o3-mini/DeepSeek</div>
    </div>
    <div class="img-wrapper">
        <img class="flex-round-img" src="{{ '/assets/images/blog/grasshopper_coding_llm/Output_DeepSeek.png' | relative_url }}" alt="deepseek r1 output" style="width: 350px;">
        <div class="caption-in-img">o1 attempt #2</div>
    </div>
    <div class="img-wrapper">
        <img class="flex-round-img" src="{{ '/assets/images/blog/grasshopper_coding_llm/Output_Claude.png' | relative_url }}" alt="claude output" style="width: 350px;">
        <div class="caption-in-img">claude attempt #1</div>
    </div>
</div>

# Traditional Grasshopper Scripting vs. AI Assistance

This experiment got me thinking about potential changes in workflow brought by LLMs to Grasshopper scripting.

Advantages:

- **Efficiency** – A manual Grasshopper component-based approach would take approximately 2 hours without plugins & snippents, whereas using LLMs reduced this to around 20 minutes (including prompt refinement).
- **Accessibility** – Engineers without programming experience can now generate complex scripts without knowledge of C#, Python or even just with beginner level Grasshopper knowledge.

Challenges:

- **Potential errors** – LLMs sometimes omit crucial details unless explicitly stated. For example, the missing roof slab in almost all of the responses shows us that it is possible to create buggy code due to a lack of implicit understanding or an unclear brief.
- **Visualisation & debugging** – Traditional Grasshopper components provide a better debugging experience, as all intermediate geometry can be visualized. However, script components do not provide this.
- **Readability** - A lot of engineers find visual programming easier to read and understand, but this perhaps depends on experience and personal preference!

A balanced approach would be to use LLMs for small script segments rather than relying on them for larger portions of script (like the complex prompt in this example) and would address concerns with visualisation and identification of potential errors.

It is also possible to use these models to summarise and explain the code itself such that it can be reviewed by a non-coder and we can ask for intermediate variables to be captured and displayed in the grasshopper output as shown below:

# Final Thoughts

Regardless of which is marginally better, both o3-mini and DeepSeek R1 are valuable additions to an engineer's toolkit for grasshopper scripting.

Both offer significant time savings and enable civil engineers without coding knowledge to script in grasshopper. We may need to watch out for coding mistakes and reduced debuggability caused by an LLM script workflow, but traditional ways of writing grasshopper scripts are error prone also, so ultimately it is about rigorously checking the outputs and understanding the overall methodology.

Cheers to LLM's for helping us to get more work done!

# Additional notes: The exact prompt

```
# Building geometry generation

Write c# code for a c# script component within grasshopper
(the component with the inbuilt script editor and RunScript method) for the following task.

Create 3d model geometry of a rectangular building.
It is a simplified structural analysis representation where slabs are flat panels (surfaces),
columns are vertical bars (lines) and core walls are vertical panels (surfaces).

You are given:
 - A curve (BuildingRect) which is a rectanglar (but can be any rotation), infer sensible grid lines for the columns.
 - Maximum column spacing in the x and y directions in m. (ColXSpacing, ColYSpacing)
 - Number of storeys (NoStoreys)
 - Storey height (StoreyHeight)
 - A list of curves representing the plan position of walls. (WallCrvs)
 - Column inset distance - distance to inset columns from the edge of the slab (ColInset)

The outputs should be:
 - A list of slab surfaces (Slabs)
 - A list of column lines (Columns)
 - A list of wall sufaces (Walls)

Additional notes:
 - Generate the 3d model using the same column, slab and wall positions at every level.
 - The exact column spacing should be less than the maximum column spacing in each direction and fit within the column inset distance from the slab edge.
 - Ensure that columns are omitted within 1.2m of walls.
```
