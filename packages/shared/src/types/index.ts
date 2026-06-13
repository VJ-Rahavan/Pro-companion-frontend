// ─── Auth ─────────────────────────────────────────────
export interface User {
  id: string;
  email: string;
  createdAt: string;
  reminderTime?: string; // HH:MM
}

// ─── Roadmap ──────────────────────────────────────────
export type Difficulty = 'easy' | 'med' | 'hard';

export interface Problem {
  id: string;
  topicId: string;
  title: string;
  difficulty: Difficulty;
  pattern: string;
  status?: 'solved' | 'failed' | 'skipped' | null; // user's progress, populated by API
}

export interface Topic {
  id: string;
  stageId: string;
  name: string;
  problems: Problem[];
}

export interface Stage {
  id: string;
  number: number;
  title: string;
  topics: Topic[];
}

// ─── Progress ─────────────────────────────────────────
export type ProgressStatus = 'solved' | 'failed' | 'skipped';

export interface UserProgress {
  id: string;
  userId: string;
  problemId: string;
  status: ProgressStatus;
  timeTakenSeconds?: number;
  solvedAt: string;
  // Joined fields from problems table
  title?: string;
  difficulty?: Difficulty;
  pattern?: string;
}

// ─── Streaks ──────────────────────────────────────────
export interface Streak {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string | null;
}

// ─── AI ───────────────────────────────────────────────
export interface AISolutionRequest {
  problem_title: string;
  pattern: string;
  difficulty: Difficulty;
}

export interface RelatedProblem {
  title: string;
  pattern: string;
  why: string;
}

export interface AISolutionResponse {
  approach: string;
  solution_code: string;
  time_complexity: string;
  space_complexity: string;
  related_problems: RelatedProblem[];
}

// ─── API wrapper ──────────────────────────────────────
export interface ApiResponse<T> {
  data: T;
  message?: string;
}
