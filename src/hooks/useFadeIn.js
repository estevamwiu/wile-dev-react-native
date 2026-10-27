import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

// Animação simples de entrada: aparece e sobe um pouco.
export default function useFadeIn(duration = 500) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [progress, duration]);

  return {
    opacity: progress,
    transform: [
      {
        translateY: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [16, 0],
        }),
      },
    ],
  };
}
