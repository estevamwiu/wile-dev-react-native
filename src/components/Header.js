import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';

export default function Header() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.logo, { color: colors.text }]}>WILE.DEV</Text>
      <Ionicons name="sparkles-outline" size={30} color={colors.accent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 20,
  },
  logo: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
