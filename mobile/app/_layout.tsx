import { Tabs } from 'expo-router';
import { createApiClient } from '@pro-companion/shared';

// Initialize API client
createApiClient(
  process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3001',
  () => null, // replace with SecureStore token getter in real impl
);

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: '#0f172a', borderTopColor: '#1e293b' },
        tabBarActiveTintColor: '#6366f1',
        tabBarInactiveTintColor: '#64748b',
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#f1f5f9',
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Problems' }} />
      <Tabs.Screen name="progress" options={{ title: 'Progress' }} />
      <Tabs.Screen name="system-design" options={{ title: 'System Design' }} />
    </Tabs>
  );
}
