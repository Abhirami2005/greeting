export interface MemoryItem {
  id: string;
  icon: string;
  title: string;
  quote: string;
  color: string;
  bgGradient: string;
}

export interface FriendshipConfig {
  friendName: string;
  senderName: string;
  startDate: string; // YYYY-MM-DD or custom days
  customDays?: number;
  messageLines: string[];
  memories: MemoryItem[];
}

export interface Quote {
  id: number;
  text: string;
  author?: string;
}
