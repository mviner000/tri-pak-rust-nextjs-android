'use client';

import React, { useState, useEffect } from 'react';
import { Circle } from 'lucide-react';

// Types
interface User {
  id: number;
  username: string;
  email: string;
}

interface StatusMessage {
  Status: {
    user_id: number;
    online: boolean;
  };
}

type OnlineState = {
  [key: number]: boolean;
};

// Type guard for status messages
function isStatusMessage(message: any): message is StatusMessage {
  return (
    message &&
    'Status' in message &&
    typeof message.Status.user_id === 'number' &&
    typeof message.Status.online === 'boolean'
  );
}

interface OnlineStatusProps {
  currentUser: User;
  allUsers: User[];
  className?: string;
}

const OnlineStatus: React.FC<OnlineStatusProps> = ({ currentUser, allUsers, className }) => {
  const [onlineUsers, setOnlineUsers] = useState<OnlineState>({});
  const [wsConnected, setWsConnected] = useState(false);
  const [ws, setWs] = useState<WebSocket | null>(null);

  // Initialize online states
  useEffect(() => {
    const initialState = allUsers.reduce<OnlineState>((acc, user) => {
      acc[user.id] = false;
      return acc;
    }, {});
    setOnlineUsers(initialState);
  }, [allUsers]);

  // WebSocket connection management
  useEffect(() => {
    const WS_HOST = process.env.NEXT_PUBLIC_WS_HOST || 'ws://192.168.100.7:8080';
    const websocket = new WebSocket(`${WS_HOST}/ws/${currentUser.id}`);
    
    websocket.onopen = () => {
      console.log('WebSocket Connected');
      setWsConnected(true);
      // Send initial online status
      const message: StatusMessage = {
        Status: {
          user_id: currentUser.id,
          online: true
        }
      };
      websocket.send(JSON.stringify(message));
      
      // Update local state for current user
      setOnlineUsers(prev => ({
        ...prev,
        [currentUser.id]: true
      }));
    };

    websocket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (isStatusMessage(data)) {
          const { user_id, online } = data.Status;
          setOnlineUsers(prev => ({
            ...prev,
            [user_id]: online
          }));
        }
      } catch (error) {
        console.error('Failed to parse message:', error);
      }
    };

    websocket.onclose = () => {
      console.log('WebSocket Disconnected');
      setWsConnected(false);
      // Update local state for current user
      setOnlineUsers(prev => ({
        ...prev,
        [currentUser.id]: false
      }));
    };

    setWs(websocket);

    // Cleanup on unmount
    return () => {
      if (websocket.readyState === WebSocket.OPEN) {
        const message: StatusMessage = {
          Status: {
            user_id: currentUser.id,
            online: false
          }
        };
        websocket.send(JSON.stringify(message));
        websocket.close();
      }
    };
  }, [currentUser.id]);

  const isUserOnline = (userId: number) => {
    if (userId === currentUser.id) {
      return wsConnected;
    }
    return onlineUsers[userId];
  };

  return (
    <div className={className}>
      <h3 className="text-lg font-semibold mb-2">Online Users</h3>
      <div className="space-y-2">
        {allUsers.map(user => (
          <div key={user.id} className="flex items-center space-x-2">
            <Circle 
              className={isUserOnline(user.id) ? "text-green-500" : "text-gray-400"}
              size={16} 
              fill="currentColor"
            />
            <span>{user.username}</span>
            {user.id === currentUser.id && <span className="text-sm text-gray-500">(You)</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineStatus;