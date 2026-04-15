export interface DepartmentInfo {
  name: string;
  description: string;
  icon: string;
}

export const departments: Record<string, DepartmentInfo> = {
  "Computer Engineering": {
    name: "Computer Engineering",
    description: "Build and maintain the technical infrastructure of KSDT",
    icon: "💻"
  },
  "Audio": {
    name: "Audio",
    description: "Master the art of sound engineering and production",
    icon: "🎚️"
  },
  "Creative": {
    name: "Creative",
    description: "Design visual content and bring creative ideas to life",
    icon: "🎨"
  },
  "Events": {
    name: "Events",
    description: "Plan and execute exciting campus events and concerts",
    icon: "🎉"
  },
  "Music": {
    name: "Music",
    description: "Curate playlists and share your passion for music",
    icon: "🎵"
  },
  "News": {
    name: "News",
    description: "Report on campus news and important stories",
    icon: "📰"
  },
  "Programming": {
    name: "Programming",
    description: "Schedule and coordinate radio programming content",
    icon: "📻"
  },
  "Sports Broadcasting": {
    name: "Sports Broadcasting",
    description: "Be the voice of UC San Diego athletics",
    icon: "🎙️"
  },
  "Sports Marketing": {
    name: "Sports Marketing",
    description: "Promote sports events and build fan engagement",
    icon: "📣"
  }
};
