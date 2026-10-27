import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../theme/ThemeContext';

export default function Footer() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.accent, paddingBottom: 10 + insets.bottom },
      ]}
    >
      <Text style={[styles.text, { color: colors.onAccent }]}>
        WILE.DEV
      </Text>
      <Text style={[styles.text, { color: colors.onAccent }]}>
        Sites e experiências digitais para boas ideias.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    textAlign: 'center',
  },
});
