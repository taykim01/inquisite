# Project Overview

## Introduction
This project's name is "Inquisite."

## Problem Statement
The problem this project wishes to handle is that some people want to use different AI models, but hesitate to pay for all subscriptions for those models.

## Solution
An all-inclusive personal knowledge generation and management system, essentially follows the UX format of a chatbot but able to use all premium models (ex. GPT-o3) of different AI models.

## Target Audience
Innovators and early adaptors, specifically of early to mid 20's university students, of the user segmentation according to tendency to adopt new technology, in this case new AI models in particular.

## User Journey
1. The user has heard of new AI models every couple of weeks. This time Grok4, last time GPT-o3, etc.
2. The user is frustrated; he does not want to pay for a new AI model every time a new model is announced.
3. The user wishes that there is a service where he can use all premium AI models for one all-inclusive subscription.
4. The user finds out about Inquisite. The user, intrigued, enters the landing page of Inquisite.
5. From reading the landing page, the user understood that using Inquisite might resolve his pain point.
6. The user signs up from a smooth, frictionless sign up process. The user is now redirected to the chat page.
7. The user can choose different premium AI models. The user finds out about the "auto" option, which breaks down the user's prompt and optimizes model selection for each segment of the user's prompt breakdown.
8. The user select's the "auto" option. The user asks a complex question to test the utility of the service.
9. The Inquisite agent takes the prompt and processes it, using techniques like chaining. The agent breaks down user's prompt and handles the prompt step by step.
10. The agent finds out some ambiguity in the prompt exists for the agent to return a satisfying response. The agent continues to ask the user to clarify what the user's ambiguous intentions are.
11. All this process of "thinking" is exposed to the user in an aesthetically appealing manner, so that the user is convinced Inquisite's agent is handling the prompt deliberately and professionally.
12. The Inquisite agent finally returns a response of satisfactory. The user clicks a toggle to see the detailed steps the agent took to return the response and finds out how granular the process of breaking down the question was.
13. The user is surprised and is enthusiastic about this agent. He proceeds to ask some more questions, some of which are follow-up questions and others are completely new questions in new chat rooms.


# Design Philosophy, Principles, and System

## Overview
To maintain a smart, trendy, and forward-looking image, Inquisite’s interface will embrace glassmorphic design inspired by iOS 26.  
The aesthetic will convey cutting-edge technology, accessibility, and sophistication—helping users feel they are engaging with something premium, yet intuitive.  
The design will subtly reinforce the perception that Inquisite is ahead of the curve, enabling early adopters to feel part of an exclusive, intelligent experience.

## Design Philosophy
- **Intelligence Made Visible** – Every UI element should suggest thoughtfulness: the system’s “reasoning” animations, segmented chat flows, and detail-on-demand explanations.  
- **Premium Without Intimidation** – While the target audience values sophistication, the design avoids corporate stiffness. It balances luxury cues with approachability.  
- **Transparency as Trust** – The user should see the AI’s thought process. Design patterns will let the AI’s breakdown steps feel like part of the interface, not an afterthought.  
- **Minimal Cognitive Load** – The interface makes it effortless to try different AI models or use “auto,” so experimentation feels rewarding, not overwhelming.

## Design Principles
- **Glassmorphic Foundation** – Layers with blurred translucent backgrounds, soft inner shadows, and frosted effects for depth.  
- **High-Contrast Accents** – Bright accent colors (electric cyan, neon magenta) on muted backgrounds for clear affordances.  
- **Dynamic Transitions** – Smooth animations for model selection, reasoning visualization, and chat flow, reinforcing the “living intelligence” theme.  
- **Consistent Iconography** – Simple, modern icons that match the glass aesthetic, ensuring a cohesive visual identity.  
- **Modular Components** – All interface blocks (chat bubbles, reasoning cards, model selectors) follow the same spatial rhythm and corner radii.

## Color System
- **Background:** Deep charcoal with subtle gradient shifts (evokes depth and exclusivity).  
- **Glass Panels:** Semi-transparent white overlays with 15–20px blur.  
- **Primary Accent:** Electric Cyan (#00E0FF) – for main CTAs and focus states.  
- **Secondary Accent:** Neon Magenta (#FF3CC7) – for highlighting key actions or alternative options.  
- **Text:** White and light gray for primary content; subtle tints for metadata.

## Typography
- **Primary:** SF Pro Display (or equivalent) – modern, clean, legible at small sizes.  
- **Weight Strategy:**  
  - Bold for headlines and model names.  
  - Medium for chat content.  
  - Light for metadata or timestamps.

## Component Guidelines
- **Chat Bubbles** – Rounded-corner glass panels, subtle drop shadow, content-adaptive width.  
- **Model Selector** – Horizontal scrollable list with pill-shaped buttons, each showing model name, logo, and brief descriptor.  
- **Reasoning View Toggle** – Switch or button with micro-animation that reveals the AI’s step-by-step thought process.  
- **Clarification Prompts** – Mini-cards surfaced inline in chat, styled slightly different from user/assistant messages to signal “system intervention.”  
- **Onboarding Flow** – Minimal fields, microcopy with a friendly tone, progressive disclosure for advanced options.

## Motion & Micro-Interactions
- **Model Switching Animation:** Slight scale-up and color glow.  
- **AI Thinking:** Animated pulse or shifting gradient behind the glass panel, subtly changing with complexity of task.  
- **Step Reveal:** Slide-in with easing for each reasoning segment when viewing the detailed breakdown.



# Project Architecture

## Overview
* This project uses Next.js 15, Supabase, Zustand, and Shadcn.
* This project uses server actions and hooks to construct features.
* This project must strictly comply with the usage rules below and maintain type consistency. For type consistency with database tables, use the `database.types.ts` file provided by Supabase.

## Server Actions
* This project uses server actions to communicate with external servers, including the DB and APIs.
* The purose of server actions is to communicate with external servers and tell hooks the results. Remaining tasks will be handled by hooks.
* Server actions must receive necessary inputs.
* Server actions must return a response object containing: success/fail, payload data(if applicable)
* Server actions must not redirect or route the user to another page or refresh the page.

## Database Management
* This project uses Supabase as the database.
* Run Supabase on local for development if running on local is applicable. Otherwise, simply use the production server for development.

## Custom Hooks
* The purpose of custom hooks (hooks hereafter) is to manipulate the website's interaction with the user given the user's request and server actions' responses.
* Hooks handle redirection, refresh, and alert if necessary.
* Hooks handle loading and error states.
* Hooks manage states. For UX enhancement in features involving modification or deletion to database and local state simultaneously, hooks apply the modification to the local state first, modify the database, then revert back to the original state if the database modification failed.
* A hook is assigned to a feature; a hook contains detailed functions related to the feature.
* Upon loading (i.e. reading) data, if the data already exists (i.e. another component called the hook and the data is already in the state), do not re-load the data for performance and API usage optimization.

## State Management
* This project uses Zustand for state management.
* For performance issues, use the Zustand Persist feature if applicable and if the state of issue needs to remain for a relatively long period of time.
* Zustand states are manipulated by hooks and hooks only.
* Access to state data are only possible through hooks. Hooks call the Zustand state and return it again so other components that need the state can access the state data.

## UI Components
* This project uses Shadcn as a base for UI components such as cards, button, inputs, etc.
* The design of components can be adjusted to fit the project's design system.

## Pages and SSR Optimization
* `page.tsx` files must be kept on server-side.
* `page.tsx` files must show an abstract of the page's basic structure. For example, the sample `page.tsx` snippet below shows a glimpse on what the page is doing.
```
export default function ChatPage(){
    return(
        <Container> // Includes header and universal layout
            <LogInCard /> // Includes hooks on logging in and out, etc.
            <MessageList /> // Includes hooks to load and show chat data
            <MessageInput /> // Includes an input box and hooks necessary to handle sending text
        </Container>
    );
};
```
* Component files, such as `<MessageList />` component in the above example (see below for sample code of `<MessageList />`), must load data for itself.
```
"use client"
export default function MessageList(){
    const { messages, loading } = useMessage();

    if (loading) return <LoadingScreen />;
    return (
        <div className="flex flex-col gap-2">
            {
                message.map(m => <MessageBlock data={m} />)
            }
        </div>
    );
};
```

## Environment Management
* As mentioned above, run Supabase on local for development if applicable.
* Commit changes on the development server to the "development" branch and production to the "production" server.

## Remarks
* Note that only OpenAI and Claude models are available.
* Grok and Gemini models will be added soon.