import { Question } from "../components/QuizQuestion";

// NOTE: Questions with multiSelect: true allow users to pick multiple answers.
// Your scoring logic should sum scores across all selected options for that question.

export const questions: Question[] = [
  {
    id: 1,
    question:
      "How would you describe yourself in social situations?",
    options: [
      {
        text: "Introvert — I prefer working behind the scenes",
        scores: {
          "Computer Engineering": 3,
          Audio: 3,
          Programming: 3,
          Creative: 2,
          Music: 2,
        },
      },
      {
        text: "Extrovert — I thrive in social interactions and events",
        scores: {
          Events: 3,
          "Sports Broadcasting": 3,
          "Sports Marketing": 3,
          News: 2,
        },
      },
      {
        text: "Balanced — I enjoy both",
        scores: {
          Creative: 2,
          Music: 2,
          News: 2,
          "Sports Marketing": 2,
          Audio: 1,
        },
      },
    ],
  },
  {
    id: 2,
    question: "What type of work excites you most?",
    multiSelect: true,
    options: [
      {
        text: "Technical problem-solving and coding",
        scores: {
          "Computer Engineering": 4,
          Programming: 3,
        },
      },
      {
        text: "Creative design, visuals, and branding",
        scores: {
          Creative: 4,
          "Sports Marketing": 3,
          Events: 1,
        },
      },
      {
        text: "Working with sound and music production",
        scores: {
          Audio: 4,
          Music: 3,
        },
      },
      {
        text: "Live commentary, interviews, and storytelling",
        scores: {
          "Sports Broadcasting": 4,
          News: 3,
        },
      },
      {
        text: "Marketing, fan engagement, and social media",
        scores: {
          "Sports Marketing": 4,
          Events: 2,
          Creative: 1,
        },
      },
      {
        text: "Planning and running events",
        scores: {
          Events: 4,
          "Sports Marketing": 1,
        },
      },
    ],
  },
  {
    id: 3,
    question: "How do you prefer to work?",
    options: [
      {
        text: "Solo, focusing on technical details",
        scores: {
          "Computer Engineering": 3,
          Programming: 3,
          Audio: 2,
        },
      },
      {
        text: "Collaboratively in a creative team",
        scores: {
          Creative: 3,
          Events: 3,
          "Sports Marketing": 3,
          Music: 2,
        },
      },
      {
        text: "Mix of independent work and team collaboration",
        scores: {
          News: 2,
          "Sports Broadcasting": 2,
          Audio: 2,
          Programming: 1,
        },
      },
    ],
  },
  {
    id: 4,
    question: "What environment appeals to you most?",
    multiSelect: true,
    options: [
      {
        text: "Live events — crowds, energy, game days",
        scores: {
          Events: 4,
          "Sports Broadcasting": 3,
          "Sports Marketing": 4,
        },
      },
      {
        text: "A studio with creative freedom",
        scores: {
          Audio: 3,
          Music: 3,
          Creative: 2,
        },
      },
      {
        text: "An office with technology and systems",
        scores: {
          "Computer Engineering": 3,
          Programming: 3,
        },
      },
      {
        text: "Out in the field gathering stories",
        scores: {
          News: 4,
          "Sports Broadcasting": 2,
        },
      },
      {
        text: "Behind a mic or camera on air",
        scores: {
          "Sports Broadcasting": 4,
          News: 2,
          Music: 1,
        },
      },
    ],
  },
  {
    id: 5,
    question: "Which skills do you want to develop at KSDT?",
    multiSelect: true,
    options: [
      {
        text: "Programming and software development",
        scores: {
          "Computer Engineering": 4,
          Programming: 4,
        },
      },
      {
        text: "Graphic design, video, and visual arts",
        scores: {
          Creative: 4,
          "Sports Marketing": 2,
        },
      },
      {
        text: "Audio engineering and sound mixing",
        scores: {
          Audio: 4,
        },
      },
      {
        text: "Writing, reporting, and communication",
        scores: {
          News: 3,
          "Sports Broadcasting": 2,
        },
      },
      {
        text: "Event planning and logistics",
        scores: {
          Events: 4,
          "Sports Marketing": 2,
        },
      },
      {
        text: "Social media strategy and marketing",
        scores: {
          "Sports Marketing": 4,
          Creative: 2,
          Events: 1,
        },
      },
      {
        text: "Music curation and radio programming",
        scores: {
          Music: 4,
          Programming: 3,
          Audio: 1,
        },
      },
    ],
  },
  {
    id: 6,
    question: "What's your relationship with music?",
    options: [
      {
        text: "I'm passionate about discovering and sharing new music",
        scores: {
          Music: 4,
          Programming: 2,
        },
      },
      {
        text: "I love the technical side of music production",
        scores: {
          Audio: 3,
          Music: 2,
        },
      },
      {
        text: "I enjoy music but it's not my main focus",
        scores: {
          Events: 1,
          Creative: 1,
          News: 1,
          "Sports Broadcasting": 1,
          "Sports Marketing": 1,
        },
      },
      {
        text: "Music isn't really my thing",
        scores: {
          "Computer Engineering": 1,
          "Sports Broadcasting": 1,
          "Sports Marketing": 1,
        },
      },
    ],
  },
  {
    id: 7,
    question:
      "How comfortable are you with public speaking or being on air?",
    options: [
      {
        text: "Very comfortable — I love being on mic or camera",
        scores: {
          "Sports Broadcasting": 4,
          News: 3,
          Music: 2,
        },
      },
      {
        text: "Somewhat comfortable — I can do it when needed",
        scores: {
          Events: 2,
          "Sports Marketing": 2,
          News: 1,
        },
      },
      {
        text: "Not comfortable — I prefer behind-the-scenes work",
        scores: {
          "Computer Engineering": 3,
          Audio: 3,
          Programming: 3,
          Creative: 2,
        },
      },
    ],
  },
  {
    id: 8,
    question: "What motivates you most in your work?",
    multiSelect: true,
    options: [
      {
        text: "Building community and engaging an audience",
        scores: {
          "Sports Marketing": 4,
          Events: 3,
          Music: 2,
          Creative: 1,
        },
      },
      {
        text: "Telling compelling stories in real-time",
        scores: {
          "Sports Broadcasting": 4,
          News: 3,
        },
      },
      {
        text: "Creating something visually stunning",
        scores: {
          Creative: 4,
          "Sports Marketing": 2,
        },
      },
      {
        text: "Solving complex technical challenges",
        scores: {
          "Computer Engineering": 4,
          Programming: 3,
        },
      },
      {
        text: "Hyping up fans and building brand awareness",
        scores: {
          "Sports Marketing": 4,
          Events: 2,
          "Sports Broadcasting": 1,
        },
      },
      {
        text: "Making music accessible and sharing it with others",
        scores: {
          Music: 4,
          Programming: 2,
          Audio: 2,
        },
      },
    ],
  },
  {
    id: 9,
    question:
      "How do you feel about UCSD athletics and sports?",
    options: [
      {
        text: "Huge fan — I follow Tritons athletics closely",
        scores: {
          "Sports Broadcasting": 4,
          "Sports Marketing": 4,
        },
      },
      {
        text: "Casual — I'd enjoy being involved in sports coverage or events",
        scores: {
          "Sports Broadcasting": 3,
          "Sports Marketing": 3,
          Events: 1,
        },
      },
      {
        text: "Not really my thing — I'm more into music, arts, or tech",
        scores: {
          Music: 2,
          Creative: 2,
          Audio: 1,
          "Computer Engineering": 1,
          Programming: 1,
        },
      },
    ],
  },
  {
    id: 10,
    question: "Which of these roles sounds most like you?",
    multiSelect: true,
    options: [
      {
        text: "Calling play-by-play for a Tritons basketball game",
        scores: {
          "Sports Broadcasting": 4,
        },
      },
      {
        text: "Designing hype graphics and social content for game days",
        scores: {
          "Sports Marketing": 4,
          Creative: 3,
        },
      },
      {
        text: "Building a new website or app for the station",
        scores: {
          "Computer Engineering": 4,
          Programming: 4,
        },
      },
      {
        text: "Curating playlists and hosting a radio show",
        scores: {
          Music: 4,
          Programming: 3,
          Audio: 1,
        },
      },
      {
        text: "Producing a live podcast or broadcast",
        scores: {
          Audio: 4,
          "Sports Broadcasting": 2,
          Programming: 1,
        },
      },
      {
        text: "Organizing a large campus concert or event",
        scores: {
          Events: 4,
          "Sports Marketing": 1,
        },
      },
      {
        text: "Reporting on campus news or writing stories",
        scores: {
          News: 4,
          "Sports Broadcasting": 1,
        },
      },
    ],
  },
  {
    id: 11,
    question: "What's your ideal Friday night?",
    options: [
      {
        text: "At a Tritons game cheering on the team",
        scores: {
          "Sports Broadcasting": 3,
          "Sports Marketing": 3,
        },
      },
      {
        text: "At a concert or live music event",
        scores: {
          Music: 3,
          Events: 2,
          Audio: 1,
        },
      },
      {
        text: "Working on a creative project or coding",
        scores: {
          Creative: 2,
          "Computer Engineering": 2,
          Programming: 2,
        },
      },
      {
        text: "Researching and writing about current events",
        scores: {
          News: 3,
        },
      },
    ],
  },
];