import { Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

export default function PrimaryButton({ title, onPress, style }) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: colors.accent, opacity: pressed ? 0.8 : 1 },
        style,
      ]}
    >
      <Text style={[styles.text, { color: colors.onAccent }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
});
