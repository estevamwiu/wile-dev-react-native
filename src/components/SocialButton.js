import { Linking, Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';

export default function SocialButton({ icon, label, url }) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={() => Linking.openURL(url)}
      accessibilityRole="link"
      accessibilityLabel={label}
      style={({ pressed }) => [
        styles.button,
        { borderColor: colors.border, opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <Ionicons name={icon} size={22} color={colors.accent} />
      <Text style={[styles.text, { color: colors.text }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 14,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
});
