import { getApiClient } from './client';
import type {
  ApiResponse,
  User,
  Stage,
  Problem,
  UserProgress,
  ProgressStatus,
  Streak,
  AISolutionRequest,
  AISolutionResponse,
} from '../types';

// ─── Auth ─────────────────────────────────────────────
export const authApi = {
  register: (email: string, password: string) =>
    getApiClient().post<ApiResponse<{ user: User; token: string }>>('/api/auth/register', {
      email,
      password,
    }),

  login: (email: string, password: string) =>
    getApiClient().post<ApiResponse<{ user: User; token: string }>>('/api/auth/login', {
      email,
      password,
    }),

  me: () => getApiClient().get<ApiResponse<User>>('/api/auth/me'),
};

// ─── Roadmap ──────────────────────────────────────────
export const roadmapApi = {
  getAll: () => getApiClient().get<ApiResponse<Stage[]>>('/api/roadmap'),
  getNext: () => getApiClient().get<ApiResponse<Problem | null>>('/api/roadmap/next'),
};

// ─── Progress ─────────────────────────────────────────
export const progressApi = {
  log: (problemId: string, status: ProgressStatus, timeTakenSeconds?: number) =>
    getApiClient().post<ApiResponse<UserProgress>>('/api/progress', {
      problem_id: problemId,
      status,
      time_taken_seconds: timeTakenSeconds,
    }),

  getAll: () => getApiClient().get<ApiResponse<UserProgress[]>>('/api/progress'),
};

// ─── Streaks ──────────────────────────────────────────
export const streaksApi = {
  get: () => getApiClient().get<ApiResponse<Streak>>('/api/streaks'),
};

// ─── Users ────────────────────────────────────────────
export const usersApi = {
  savePushToken: (token: string) =>
    getApiClient().patch('/api/users/push-token', { expo_push_token: token }),

  updateReminderTime: (time: string) =>
    getApiClient().patch('/api/users/reminder-time', { reminder_time: time }),
};

// ─── AI ───────────────────────────────────────────────
export const aiApi = {
  getSolution: (req: AISolutionRequest) =>
    getApiClient().post<ApiResponse<AISolutionResponse>>('/api/ai/solution', req),
};
