---
title: "Leveraging LLMs for Concrete Design: OpenAI Custom GPTs vs Obsidian+Gemini 2.0"
date: 2025-03-10
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - AI
  - LLMs
  - engineering
---

**Topic:** This post explores creating a concrete engineering knowledge assistant using Large Language Models (LLMs). It compares OpenAI's Custom GPTs and Obsidian's AI Copilot in addressing technical questions about concrete design.

In structural engineering, there is a vast amount of technical knowledge available to assist engineers, but there is too much to absorb. Solutions to many engineering challenges are well-documented, but finding them is often hindered by time constraints and limitations inherent in traditional keyword-based searches.

While general models like ChatGPT-4o have gained popularity, relying on them for specialized engineering queries—even with web search enabled—frequently results in sourcing generic web articles rather than authoritative technical guidance.

To bridge this gap, I evaluated two readily available personal-use tools: OpenAI's Custom GPTs and Obsidian's AI-assisted Copilot. Both solutions enable integration of specialized engineering documentation into an LLM pipeline, thereby enhancing access to relevant knowledge.

## Investigation Overview

The aim of this experiment was to develop a chatbot capable of providing expert-level answers regarding concrete design and assessment, comparing its effectiveness against the baseline provided by ChatGPT-4o.

To enhance the engineering knowledge for my two test solutions, I incorporated 40+ documents relating to concrete design and assessment, including:

- Eurocodes and British Standards
- Design guides from institutions like the IStructE and TCC
- Technical notes on specific concrete topics such as cracking, shrinkage, and movement joints

I posed technical questions that typically cannot be resolved with basic keyword searches, for instance:

> I am designing a concrete column using C50/60 concrete in a slab of C32/40. What considerations should I account for?

I also assessed whether the LLMs could accurately interpret and apply formulas and tabular data from the provided documents by asking more analytical questions such as:

> For an 8x8 meter concrete slab, what thickness is required to support a residential load of 2.5 kPa, including a 50 mm screed superimposed dead load and typical service loads?

> Determine the required concrete cover for an internal C32/40 concrete column measuring 600x600 mm with a 60-minute fire rating.

## Benchmark: ChatGPT-4o Limitations

Using ChatGPT-4o (with web search) as a baseline, I found that the model predominantly drew information from web articles and forums (e.g., eng-tips.com, concrete.org.uk), lacking access to licensed authoritative documents.

Responses varied notably in quality, referencing different sources for identical queries. Additionally, the absence of consistent guidance from reputable institutions reduced the reliability of provided information.

Answers were frequently vague or incorrect, lacking detailed technical recommendations and numerical insights. While it occasionally demonstrated familiarity with certain codes like EC2 (EN 1992-1-1) and NHBC, the model inconsistently mixed American and European standards, falling short of my requirement for Eurocodes aligned with UK National Annexes.

<div style="text-align: center;">
  <img class="solo-round-img" src="{{ '/assets/images/blog/engineering_llm/EngLLM_Chat4o_8x8SlabThickness.png' | relative_url }}" alt="A typical ChatGPT 4o response to an engineering query" style="width: 600px;">
</div>

## OpenAI Custom GPTs

OpenAI's Custom GPT platform enables users to create tailored chatbot versions of ChatGPT by defining specific instructions and uploading relevant documents.. For my experiment, I uploaded 20 concrete-focused PDF documents.

<div style="text-align: center;">
  <img class="solo-round-img" src="{{ '/assets/images/blog/engineering_llm/EngLLM_CustomGPT_Setup.png' | relative_url }}" alt="A typical ChatGPT 4o response to an engineering query" style="width: 1000px;">
</div>

Note: Using Custom GPTs requires a ChatGPT Plus subscription costing $20/month.

**Benefits:**

- Responses aligned correctly with Eurocodes and UK-specific standards. While further testing is needed for thorough National Annex applications, incorporating UK design guides partially addressed this.
- Answers to technical queries were generally accurate, providing appropriate and clear guidance. For instance, responses for the 8x8m slab thickness effectively identified critical design considerations and appropriately suggested checking for punching shear in slab design scenarios.

**Limitations:**

- Restricted to 20 documents, necessitating careful selection or merging of resources.
- Inconsistent referencing back to source documents, especially for merged materials, complicating validation and further research.

<div style="text-align: center;">
  <img class="solo-round-img" src="{{ '/assets/images/blog/engineering_llm/EngLLM_CustomGPT_8x8SlabThickness.png' | relative_url }}" alt="A typical ChatGPT 4o response to an engineering query" style="width: 600px;">
</div>

## Obsidian with AI Copilot

Obsidian, a flexible markdown-based note-taking app, integrates an AI assistant through the Copilot plugin, enabling the assistant to answer questions directly from stored notes.

The markdown format required converting engineering PDFs into markdown files using a Python script capable of handling complex tables and formulas. This conversion incurred approximately £2 in Google Cloud credits for about 60 varied-size documents. The detailed conversion process and script could be covered in a future post if readers express interest.

<div style="text-align: center;">
  <img class="solo-round-img" src="{{ '/assets/images/blog/engineering_llm/EngLLM_Obsidian_AppView.png' | relative_url }}" alt="A typical ChatGPT 4o response to an engineering query" style="width: 1000px;">
</div>

Copilot for Obsidian supports multiple LLM providers through API keys, on a pay-per-use basis. I utilised Google's Gemini 2, which is both more cost-effective and offers a larger context window than OpenAI’s ChatGPT-4o.

**Benefits:** In addition to the knowledge and relevance characteristics demonstrated by ChatGPT's Custom GPTs, Obsidian with Copilot also had the following benefits:

- Clickable links directly referencing source documents, streamlining validation and further study.
- Compatibility with various LLMs (e.g., Gemini 2), allowing larger context handling and improved analytical reasoning capabilities, including chain-of-thought reasoning and clarification-seeking behaviours.
- Greater accuracy in reading tabular data, notably lookup tables, potentially due to superior document conversion processes.

**Limitations:**

- Occasional inaccuracies on analysis questions. For example there were some errors regarding loading assumptions (e.g., screed and service loads).
- Performance implications when scaled beyond individual usage to enterprise-level document volumes due to reliance on local file storage rather than databases.
<div style="text-align: center;">
  <img class="solo-round-img" src="{{ '/assets/images/blog/engineering_llm/EngLLM_Obsidian_CoverQuestion.png' | relative_url }}" alt="A typical ChatGPT 4o response to an engineering query" style="width: 800px;">
</div>

## Key takeaways

Both OpenAI Custom GPTs and Obsidian Copilot with Gemini 2 effectively integrate specialized engineering knowledge into LLM-based assistants. Key findings:

- Both systems successfully integrated authoritative documentation and aligned responses to the relevant codes (Eurocodes, UK design guides).
- Both significantly improved upon conventional keyword searches in retrieving relevant and precise knowledge.

**Custom GPT Strengths:**

- Easier to set up (uploading pdf's onto a web interface) and without the need to acquire cloud API keys.

**Obsidian Copilot Advantages:**

- Enhanced referencing and validation via clickable references.
- Flexibility with multiple LLM providers offering stronger analytical capabilities (Gemini 2 pro).
- Better data extraction from complex formats like tables, potentially due to my more robust document conversion workflow.

Overall, each solution has it's use case, but I was particularly impressed by the ability of Gemini 2 pro's ability to apply engineering knowledge and perform some basic calculations / interpretation.
