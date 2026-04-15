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
    description: "Love music and want to know how it's really made? Learn the ins and outs of studio production, live sound, mixing, mastering, and publishing.",
    icon: "🎚️"
  },
  "Creative": {
    name: "Creative",
    description: "Design visual content and bring creative ideas to life",
    icon: "🎨"
  },
  "Events": {
    name: "Events",
    description: "Into music, events, and creative teamwork? Learn how events come together, from planning to execution.",
    icon: "🎉"
  },
  "Music": {
    name: "Music",
    description: "Curate playlists and share your passion for music",
    icon: "🎵"
  },
  "News Broadcasting": {
    name: "News Broadcasting",
    description: "Research and write stories covering campus happenings, San Diego, U.S., and global news — then bring them to life live on air.",
    icon: "📰"
  },
  "Programming": {
    name: "Programming",
    description: "Schedule and coordinate radio programming content",
    icon: "📻"
  },
  "Sports Broadcasting": {
    name: "Sports Broadcasting",
    description: "Turn your love of sports into on-air experience. Network with professional broadcasters, gain live broadcasting experience, and collaborate with sports marketing.",
    icon: "🎙️"
  },
  "Sports Marketing": {
    name: "Sports Marketing",
    description: "Collaborate in weekly meetings, brainstorm bold marketing ideas, design eye-catching promos, and build brand awareness for KSDT Sports across platforms.",
    icon: "📣"
  },
  "Media": {
    name: "Media",
    description: "Capture and produce video content for KSDT",
    icon: "📸"
  },
  "Administrative": {
    name: "Administrative",
    description: "A selective, leadership-focused program for students looking to gain experience in media, music, event production, and creative project management.",
    icon: "🏛️"
  }
};